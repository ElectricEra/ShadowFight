const animationOffset = 500;

function roll(a) {
	return a >= Math.random();
}

function getValue(min, max) {
	let a = parseInt(min);
	let b = parseInt(max);
	return a + Math.floor(Math.random() * (b - a + 1))
}

function coreHitLogic(minion1, minion2) {
	
	//Checking if minion will crit
	if (roll(minion1.critChance)) {
		minion1.attackThisTurn *= minion1.critModifier;
		console.log("Critical strike!")
	}

	//Setting current damage to the rolled value
	minion1.damageToApply = minion1.attackThisTurn;

	//If unit's armor can proc, if he has armor and if the attacking value is greater than 0
	if (roll(minion2.armorProcChance) && minion2.armorDurability > 0 && minion1.attackThisTurn > 0) {
		
		//Minion loses 1 armor durability
		minion2.armorDurability -= 1;
		
		// If attack is greater than armor / is smaller than armor
		if (minion2.armorPower < minion1.attackThisTurn) {
			minion1.damageToApply = minion1.attackThisTurn - minion2.armorPower;
		} else {
			minion1.damageToApply = 0;
		}
	
	} else {
		console.log("Target\'s armor didn't work.")
	}
	
	//Applying damage
	minion2.health -= minion1.damageToApply;
}

function hit(minion1, minion2) {
	if (roll(minion1.canHit)) {
		if (roll(minion1.hitChance)) {
			getAttack(minion1);
			coreHitLogic(minion1, minion2);	
		} else {
			console.log("Unit missed his attack.")
		}
	} else {
		console.log("Unit wasn\'t able to hit.")
	}
}

function getAttack(minion) {
	minion.attackThisTurn = getValue(minion.attackMin, minion.attackMax)
}

function attack(minion1, minion2) {
	getAttack(minion1);
	hit(minion1, minion2);
	console.log(minion1);
	console.log(minion2);
}

function prepareMinionToFight(minion) {
	minion.attackThisTurn = 0;
	minion.damageToApply = 0;
	minion.health = minion.basicHealth;
}

function displayMinion(card, minion2) {
	var health = card.getElementsByClassName('health')[0];
	var attack = card.getElementsByClassName('attack')[0];
	var armor = card.getElementsByClassName('armor')[0];
	var attackThisTurn = card.getElementsByClassName('attackThisTurn')[0];
	var newHealth = minion2.health;
	var newAttack = `${minion2.attackMin}-${minion2.attackMax}`;
	var newArmor = `${minion2.armorPower}-${minion2.armorDurability}`;
	var newAttackThisTurn = minion2.attackThisTurn;
	if (health.innerHTML != newHealth) {
		addAnimation(health, 'highlight', animationOffset)
	}
	if (attack.innerHTML != newAttack) {
		addAnimation(attack, 'highlight', animationOffset)
	}
	if (armor.innerHTML != newArmor) {
		addAnimation(armor, 'highlight', animationOffset)
	}
	if (attackThisTurn.innerHTML != newAttackThisTurn) {
		addAnimation(attackThisTurn, 'highlight', animationOffset)
	}
	health.innerHTML = newHealth;
	attack.innerHTML = newAttack;
	armor.innerHTML = newArmor;
	attackThisTurn.innerHTML = newAttackThisTurn;
}

function addAnimation(element, className, timeout) {
	element.classList.toggle(className, true)
	setTimeout(()=>{element.classList.toggle(className, false)}, timeout);
}

/*
    "name": "Swordmaster", //Name
    "race": "Human", //Race
    "level": 1, //Level
    "basicHealth": 12, //Starting health
    "hitChance": 1, // Hit chance [0%..100%]-[0..1]
    "amountOfAttacks": 1, // Amount of attacks [0..1..]-[0..1..]
    "attackMin": 2, // Minimal attack value
    "attackMax": 3, // Maximal attack value
    "critChance": 0, // Chance of having critical attack
    "critModifier": 1, // Critical strike modifier [100%..200%..]-[1..2..]
    "armorProcChance": 1, // Armor effect chance [0%..100%]-[0..1]
    "armorPower": 1, // Armor power
    "armorDurability": 3, // Armor durability
    "canHit": 1 // Can minion arrack this turn [0%..100%]-[0..1]
*/

let minion1 = {
    "name": "Swordmaster",
    "race": "Human",
    "level": 1,
    "basicHealth": 12,
    "hitChance": 1,
    "amountOfAttacks": 1,
    "attackMin": 2,
    "attackMax": 3,
    "critChance": 0,
    "critModifier": 1,
    "armorProcChance": 1,
    "armorPower": 1,
    "armorDurability": 3,
    "canHit": 1
}

let minion2 = {
    "name": "Imp",
    "race": "Demon",
    "level": 1,
    "basicHealth": 12,
    "hitChance": 1,
    "amountOfAttacks": 1,
    "attackMin": 2,
    "attackMax": 3,
    "critChance": 0,
    "critModifier": 1,
    "armorProcChance": 1,
    "armorPower": 1,
    "armorDurability": 3,
    "canHit": 1
}

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");

prepareMinionToFight(minion1);
prepareMinionToFight(minion2);

displayMinion(card1, minion1);
displayMinion(card2, minion2);

card1.addEventListener('click', () => {
	hit(minion1, minion2);
	addAnimation(document.querySelector('#card1 > .card'), 'move-right', animationOffset);
	displayMinion(card1, minion1);
	displayMinion(card2, minion2);
	console.log(minion1, minion2);
})

card2.addEventListener('click', () => {
	hit(minion2, minion1);
	addAnimation(document.querySelector('#card2 > .card'), 'move-left', animationOffset)
	displayMinion(card1, minion1);
	displayMinion(card2, minion2);
	console.log(minion1, minion2);
})
