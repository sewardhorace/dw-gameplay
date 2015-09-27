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
  this.equipment = this.assignEquipment();
  this.spells = [];
  this.klassMoves = [];
  // this.companions = []; //hirelings, animal companions, familiars, etc.??
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
  assignEquipment: function() {
    var equipment = {
      weapons: [],
      armor:[],
      gp:0,
      other: []
    };
    return equipment;
  }
}
