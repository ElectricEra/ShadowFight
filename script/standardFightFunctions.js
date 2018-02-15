function roll(a, pseudoRoll = Math.random()) {
	return a >= pseudoRoll;
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

	checkDeath(minion2);
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

function checkDeath(minion) {
	if (minion.health <= 0) {
		minion.health = 0;
		minion.isAlive = false;
	}
}

function prepareMinionToFight(minion) {
	minion.attackThisTurn = 0;
	minion.damageToApply = 0;
	minion.health = minion.basicHealth;
	minion.isAlive = true;
}

function applyEffect(whenToModify, minion1, minion2) {
	minion1.auraEffects.forEach((minionAuraEffects) => {

		if (minionAuraEffects.whenToModify === whenToModify) {
			if (checkRace(minionAuraEffects.affectedRace, minion2.race) && checkLevel(minionAuraEffects.affectedLevel, minion2.level)) {
				if (minionAuraEffects.maxProcs && roll(minionAuraEffects.chance)) {
					
					minionAuraEffects.effect.forEach((effect)=> {
						minion1[effect.statToModify] += getValue(effect.valueMin, effect.valueMax);		
					})
				}
			}
		}
	})
}

function checkRace(race, raceToCkeck) {
	console.log(race)
	return race === 'all' || race.includes(raceToCkeck);
}

function checkLevel(level, levelToCheck) {
	return level === 'all' || level.includes(levelToCkeck);
}