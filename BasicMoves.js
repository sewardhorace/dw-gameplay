var BasicMoves = {
  hackAndSlash: function(mover){
    var weapon = mover.getWeapon();//need to account for bonus dmg tags
    var mod = mover.abilities.str.mod;
    var baseDmg = mover.baseDmg;
    var dmg;
    Game.createResult(
      Game.basicRoll(mod),
      function() {
        mover.XP += 1;
        console.log("XP: " + mover.XP);
      },
      function() {
        dmg = Game.rollDice(1,baseDmg);
        console.log("Deal " + dmg + " damage and the enemy makes an attack against you!");
      },
      function() {
        var options = [
          "Deal your damage to the enemy and avoid their attack",
          "Deal +1d6 damage but expose yourself to the enemy’s attack"
        ];
        var choice = Game.getChoiceIndex(options);
        if (choice === 0) {
          dmg = Game.rollDice(1,baseDmg);
          console.log("Deal " + dmg + " damage and avoid the enemy attack!");
        } else {
          dmg = Game.rollDice(1,baseDmg) + Game.rollDice(1,6);
          console.log("Deal " + dmg + " damage and the enemy makes an attack against you!");
        }
      }
    );
  },
  volley: function(mover){
    var weapon = mover.getWeapon();
    var mod = mover.abilities.dex.mod
    var baseDmg = mover.baseDmg;
    var dmg;
    Game.createResult(
      Game.basicRoll(mod),
      function() {
        mover.XP += 1;
        console.log("XP: " + mover.XP);
      },
      function() {
        var options = [
          "You have to move to get the shot placing you in danger as described by the GM",
          "You have to take what you can get: -1d6 damage"
        ];
        if (weapon.)
          options.push("You have to take several shots, reducing your ammo by one");

        var choice = Game.getChoiceIndex(options);
        if (choice === 0) {
          dmg = Game.rollDice(1,baseDmg);
          console.log("Deal " + dmg + " damage, but now you're in danger!");
        } else if (choice === 1) {
          dmg = Game.rollDice(1,baseDmg) - Game.rollDice(1,6);
          dmg = dmg < 0 ? 0 : dmg
          console.log("It's a tough shot; deal " + dmg + " damage.");
        } else {
          dmg = Game.rollDice(1,baseDmg);
          console.log("Deal " + dmg + " damage and lose 1 ammo");
          // TODO structure and relationship of ammo and weapons
        }
      },
      function() {
        dmg = Game.rollDice(1,baseDmg);
        console.log("You have a clear shot! Deal " + dmg + " damage.");
      }
    );
  },
  defyDanger: function(mover){
    var options = ["str", "dex", "con", "int", "wis", "cha"];
    var modChoice = options[Game.getChoiceIndex(options)];
    var mod = mover.abilities[modChoice].mod;
    Game.createResult(
      Game.basicRoll(mod),
      function(){
        mover.XP += 1;
        console.log("XP: " + mover.XP);
      },
      function(){

      },
      function(){

      }
    );
  },
}
