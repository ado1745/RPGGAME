let enemy; //we declare enemy in global scope instead of constructor, so it's we can use it any where 

function Enemy(enemyType, health, mana, strength, speed) {
    this.enemyType = enemyType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    // this.agility = agility;
    this.speed = speed;
}





let EnemyMoves = {


    enemyAttack: function () {
        let baseDamage = enemy.strength * enemy.mana / 1000
        // this will always make sure that our baseDamage is round number without any decimal points
        let roundBaseDamge = Math.floor(baseDamage)
        // Making sure that we game a bit randomness 
        let offsetDamage = Math.floor(Math.random() * 10) + 1;
        return roundBaseDamge + offsetDamage;
    },

    enemyTimerFun: function () {
        let counter = 5;
        let interval = setInterval(function () {
            $('.enemyTimer').html(`<p>in: <strong>${counter}</strong></p>`);
            counter--;
            // Display 'counter' wherever you want to display it.
            if (counter < 0) {
                clearInterval(interval);
                enemyAttackMove();
                $('.enemyTimer').hide();
            }
            // } else {
            //     $('#time').text(counter);
            //     console.log("Timer --> " + counter);
            // }
        }, 1000);
    }


}



