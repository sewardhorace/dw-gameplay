//TODO should initializers return values, or simply set them??? (currently inconsistent)
//TODO in general, should function always return a value, even if its true or false???

function Character() {
  this.XP = 0;
  this.level = 1;
  this.abilities = this.assignAbilities();
  this.klass = this.assignClass();
  this.name = this.assignName();
  this.look = this.assignLook();
  this.race = this.assignRace();
  this.maxHP = this.calculateMaxHP();
  this.HP = this.maxHP;
  this.maxLoad = this.calculateMaxLoad();
  this.bonds = this.assignBonds();
  this.alignment = this.assignAlignment();
  this.equipment = {
    weapons:[],
    ammo:[],
    armor:[],
    coins:0,
    other:[],
  };
  this.assignEquipment();
  this.spells = [];
  this.klassMoves = [];
  // this.companions = []; //hirelings, animal companions, familiars, etc.??
  //for temp stats:
  this.hold = {};
  this.forward = {};
}
Character.prototype = {

  assignAbilities: function() {
    return Abilities.getRandomAbilities();
  },
  assignClass: function() {
    return Bard;
  },
  assignName: function() {
    return this.klass.names[0].options[0];
  },
  assignLook: function() {
    var lookOptions = this.klass.look;
    var look = [];
    for (i in lookOptions) {
      look.push(lookOptions[i].options[0]);
    };
    return look;
  },
  assignRace: function() {
    return this.klass.races[0];
  },
  calculateMaxHP: function() {
    return this.klass.baseHP + this.abilities.con.score
  },
  calculateMaxLoad: function() {
    return this.klass.baseLoad + this.abilities.str.mod
  },
  assignBonds: function() {
    return this.klass.bonds;
  },
  assignAlignment: function() {
    return this.klass.alignment[0];
  },
  equip: function(item){
    if (item.type) {
      if (item.type === EquipmentEnums.types.WEAPON){
        this.equipment.weapons.push(Utilities.deepClone(item));
      } else if (item.type === EquipmentEnums.types.AMMO) {
        this.equipment.ammo.push(Utilities.deepClone(item));
      } else if (item.type === EquipmentEnums.types.ARMOR) {
        this.equipment.armor.push(Utilities.deepClone(item));
      } else if (item.type === EquipmentEnums.types.COINS) {
        console.log("Got " + item.amt + " coins.");
        this.equipment.coins += item.amt;
      } else if (item.type === EquipmentEnums.types.OTHER) {
        this.equipment.other.push(Utilities.deepClone(item));
      }
    }
  },
  unequip: function(item) {
    if (item.type) {
      if (item.type === EquipmentEnums.types.WEAPON){
        var idx = this.equipment.weapons.indexOf(item);
        if (idx > -1) {
          this.equipment.weapons.splice(idx, 1);
        }
      } else if (item.type === EquipmentEnums.types.AMMO) {
        var idx = this.equipment.ammo.indexOf(item);
        if (idx > -1) {
          this.equipment.ammo.splice(idx, 1);
        }
      } else if (item.type === EquipmentEnums.types.ARMOR) {
        var idx = this.equipment.armor.indexOf(item);
        if (idx > -1) {
          this.equipment.armor.splice(idx, 1);
        }
      } else if (item.type === EquipmentEnums.types.OTHER) {
        var idx = this.equipment.other.indexOf(item);
        if (idx > -1) {
          this.equipment.other.splice(idx, 1);
        }
      }
    }
  },
  assignEquipment: function() {
    var startingGear = [];
    //get all automatic gear
    for (i in this.klass.equipment.automatic){
      startingGear.push(this.klass.equipment.automatic[i]);
    }
    //choose from groups of gear options
    for (i in this.klass.equipment.selectable){
      var selectable = this.klass.equipment.selectable[i];
      console.log("Choose " + selectable.numberGranted + " " + selectable.name);
      var optionNames = [];
      for (var i = 0; i < selectable.options.length; i++){
        optionNames.push(selectable.options[i].name);
      }
      var choice = Game.getChoiceIndex(optionNames);
      var selection = selectable.options[choice];
      for (i in selection.objects) {
        console.log(selection.objects[i]);
        startingGear.push(selection.objects[i]);
      }
    }
    //equip
    for (i in startingGear){
      this.equip(startingGear[i]);
    }
  },

  getWeapon: function() {
    var options = this.equipment.weapons || [];
    options = options.concat([
      {
        type: EquipmentEnums.types.WEAPON,
        name: "(Other)",
        description: "???",
        weight: 0,
        tags: [],
      }
    ]);
    var weaponNames = [];
    for (weapon in options){
      weaponNames.push(options[weapon].name);
    }
    var choice = Game.getChoiceIndex(weaponNames);
    return options[choice];
  },
  getAmmo: function(weapon) {
    if (weapon.ammoType){
      var ammoType = weapon.ammoType;
      if (ammoType) {
        var availableAmmo = [];
        for (var key in this.equipment.ammo) {
          if (this.equipment.ammo[key].ammoType === ammoType){
            availableAmmo.push(this.equipment.ammo[key]);
          }
        }
        if (availableAmmo.length > 1){
          var ammoNames = [];
          for (var i = 0; i < availableAmmo.length; i++) {
            ammoNames.push(availableAmmo[i].name + ", amt: " + availableAmmo[i].ammo);
          }
          var choice = Game.getChoiceIndex(ammoNames);
          return availableAmmo[choice];
        } else if (availableAmmo.length === 1) {
          return availableAmmo[0];
        }
      }
    }
  },
}
