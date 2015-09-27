var Utilities = {
  rollDice: function(numberOfDice, numberOfSides) {
    numberOfDice = numberOfDice || 1;
    numberOfSides = numberOfSides || 6;
    var total = 0;
    for (var i = 0; i < numberOfDice; i++) {
      var roll = Math.floor((Math.random() * numberOfSides) + 1);
      total += roll;
    }
    return total;
  },
  BasicRollEnum: {
    FAIL: 1,
    PARTIAL: 2,
    SUCCESS: 3,
    BONUS: 4,
  },
  basicRoll: function(mod) {
    mod = mod || 0;
    var roll = Utilities.rollDice(2,6)
    console.log("rolled " + roll + " + " + mod);
    roll = roll + mod
    var result;
    if (roll <= 6) {
      result = Utilities.BasicRollEnum.FAIL;
      console.log("failure");
    } else if (roll <= 9){
      result = Utilities.BasicRollEnum.PARTIAL;
      console.log("partial success");
    } else if (roll <= 12){
      result = Utilities.BasicRollEnum.SUCCESS;
      console.log("success");
    } else {
      result = Utilities.BasicRollEnum.BONUS;
      console.log("success (bonus)");
    }
    return result
  },

  createResult: function(result, one, two, three, four){
    if (result === Utilities.BasicRollEnum.FAIL){
      one();
    } else if (result === Utilities.BasicRollEnum.PARTIAL){
      two();
    } else if (result === Utilities.BasicRollEnum.SUCCESS){
      three();
    } else {
      if (four) {
        four();
      } else {
        three();
      }
    }
  },

  showOptions: function(options){
    options = options || [];
    console.log("Options:");
    for (i in options) {
      console.log(i + ". " + options[i]);
    }
  },
  getChoiceIndex: function(options){
    options = options || [];
    Utilities.showOptions(options);
    var choice;
    while (!(choice >= 0 && choice < options.length)){
      choice = parseInt(prompt("Enter the number of your choice:", ""));
    }
    console.log(options[choice]);
    return choice;
  },

  deepClone: function(obj) {
    if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
        return obj;
    var temp = obj.constructor();
    for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = this.deepClone(obj[key]);
            delete obj['isActiveClone'];
        }
      }
    return temp;
  },
  randomItem: function(arr) {
    if (!arr) {
      return undefined;
    }
    var idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  }
}
