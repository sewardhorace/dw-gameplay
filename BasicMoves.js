var BasicMoves = {
  hackAndSlash: function(mover){
    var mod = mover.abilities.str.mod;
    var baseDmg = mover.baseDmg;
    var dmg;
    Utilities.createResult(
      Utilities.basicRoll(mod),
      function() {
        mover.XP += 1;
        console.log("XP: " + mover.XP);
      },
      function() {
        dmg = Utilities.rollDice(1,baseDmg);
        console.log("Deal " + dmg + " damage and the enemy makes an attack against you!");
      },
      function() {
        var options = [
          "Deal your damage to the enemy and avoid their attack",
          "Deal +1d6 damage but expose yourself to the enemy’s attack"
        ];
        var choice = Utilities.getChoiceIndex(options);
        if (choice === 0) {
          dmg = Utilities.rollDice(1,baseDmg);
          console.log("Deal " + dmg + " damage and avoid the enemy attack!");
        } else {
          dmg = Utilities.rollDice(1,baseDmg) + Utilities.rollDice(1,6);
          console.log("Deal " + dmg + " damage and the enemy makes an attack against you!");
        }
      }
    );
  },
  defyDanger: function(mover){
    var options = ["str", "dex", "con", "int", "wis", "cha"];
    var modChoice = options[Utilities.getChoiceIndex(options)];
    var mod = mover.abilities[modChoice].mod;
    Utilities.createResult(
      Utilities.basicRoll(mod),
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
