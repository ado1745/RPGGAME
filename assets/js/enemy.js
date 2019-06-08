let enemy; //we declare enemy in global scope instead of constructor, so it's we can use it any where 

function Enemy(enemyType, health, mana, strength, speed) {
    this.enemyType = enemyType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    // this.agility = agility;
    this.speed = speed;
}





let enemyMoves = {


    enemyAttack: function () {


        let enemyAttackCalc = function () {
            let basedDamage = enemy.strength * enemy.mana / 1000
            let offsetDamage = Math.floor(Math.random() * 10) + 1;
            let totalDamageEnemy = basedDamage + offsetDamage;

            return totalDamageEnemy;
            // console.log(totalDamageEnemy);
        }



    }





}