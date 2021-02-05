//Function to start a new game
var startGame = function() {
    //Reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        
        console.log(playerInfo);

        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1 ) );

            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            
<<<<<<< HEAD
            console.log (pickedEnemyObj);
=======
            console.log(pickedEnemyObj);
>>>>>>> develop

            fight(pickedEnemyObj);

            //If we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                // if yes, take them to the store() function
                if (storeConfirm) {
                shop();
                }
            }
        } else {
            break;
        }
    }

    endGame();
};
        
//Function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
<<<<<<< HEAD
    
    if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
    } else {
        window.alert("You've lost your robot in battle.");
=======

    //LocalStorage
    var highScore = localStorage.getItem("highscore") || 0;

    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
>>>>>>> develop
    }

    //Ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?")

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

var fight = function(enemy) {
    
    var isPlayerTurn = true;

    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    //Repeat and execute as long as the enemy-robot is alive 
    while(playerInfo.health > 0 && enemy.health > 0) {
        if(isPlayerTurn) {
        if (fightOrSkip()) { 
        break;
        }
        
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)

<<<<<<< HEAD
    //Remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    //Random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining. "
    );
=======
        //Remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        enemy.health = Math.max(0, enemy.health - damage);
    
        console.log(
        playerInfo.name + 
        " attacked " + 
        enemy.name + 
        ". " + 
        enemy.name + 
        " now has " + 
        enemy.health + 
        " health remaining. "
        );
>>>>>>> develop
        
        //Check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

        //Award player money for wimming
        playerInfo.money + playerInfo.money + 20;
<<<<<<< HEAD

        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?" );
        if (storeConfirm) {
            shop();
        }
        
=======
>>>>>>> develop
        break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
    } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        //Remove player's health by subtracting the amount set in the enemy.attack variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(
            enemy.name + 
            " attacked " + 
            playerInfo.name + 
            ". " + 
            playerInfo.name + 
            " now has " + 
            playerInfo.health + 
            " health remaining. "
        );
    
            //Check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
                } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
        isPlayerTurn = !isPlayerTurn;
    }
};

var shop = function () {
    //Ask player what they'd like to do
    var shopOptionPrompt = window.prompt( 
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    
    if (shopOptionPrompt === null || shopOptionPrompt === "" || isNaN(shopOptionPrompt)) {
        window.alert("You need to provide a valid answer! Please try again.");
        return shop();
    }
        
    shopOptionPrompt = parseInt(shopOptionPrompt);
        
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
    
        case 2:
            playerInfo.upgradeAttack();
            break;
    
        case 3:
            window.alert("Leaving the store.");
            break;
    
            default:
                window.alert("You did not pick a valid option. Try again.");
    
            shop();
            break;
    }
};
    
var getPlayerName = function () {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};



var shop = function () {
    //Ask player what they'd like to do
    var shopOptionPrompt = window.prompt( 
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //Use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");

            //Do nothing, so function will end
            break;
            default:
                window.alert("You did not pick a valid option. Try again.");

            //Call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

//Random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    
    promptFight = promptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        
        return true;  
      }
    }
return false;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars."); 
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

<<<<<<< HEAD
console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

=======
>>>>>>> develop

startGame();