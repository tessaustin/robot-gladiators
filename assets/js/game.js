var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//Function to start a new game
var startGame = function() {
    //Reset player stats
    playerHealth = 100
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1 ) );
            var pickedEnemyName = enemyNames[i];
            // debugger;
            enemyHealth = 50;
            fight(pickedEnemyName);
        } 
        else {
            break;
        }
    }

    endGame();
};
        
//Function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a scaore of " + playerMoney + '.');
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

//Ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?")

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

var fight = function(enemyName) {
    //Repeat and execute as long as the enemy-robot is alive 
    while(enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
        //If player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //If yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //Subtract money
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
            }
        }

    //Remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

        //Award player money for wimming
        playerMoney + playerMoney + 20;
            break;

        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

    //Remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );
        //Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

startGame();