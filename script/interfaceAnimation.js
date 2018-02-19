const animationOffset = 1000;
const animationStep = 0.2
const animationFrames = 1 / animationStep;
const animationFrameOffset = animationStep * animationOffset;

function animationQueue() {
	let arrayOfEvents = [];
	return {
		addEvent: (timeOffset, events) => arrayOfEvents.push({timeOffset, action: events}),
		start: (clearEvents = true) => {
			arrayOfEvents.forEach(event => {setTimeout(event.action, event.timeOffset)}); 
			if (clearEvents) { arrayOfEvents = []; }
		}
	}
}

function getElement(parent, selector) {
	return parent.querySelector(selector);
} 

function setIntoContainer(container, value) {
	container.innerHTML = value;
}

function displayMinionStaticData(card, minion) {
	getElement(card, ".image > img").src = minion.img;
	setIntoContainer(getElement(card, '.name'), minion.name);
	setIntoContainer(getElement(card, '.level'), minion.level);
	setIntoContainer(getElement(card, '.race'), minion.race);
	setIntoContainer(getElement(card, '.detailed'), `<b>${minion.auraName}</b> - ${minion.auraShortDescription}`);
}

function displayMinion(card, minion2, attacked = false) {
	let health = getElement(card, '.health');
	let attack = getElement(card, '.attack');
	let armor = getElement(card, '.armor');
	let attackThisTurn = getElement(card, '.attackThisTurn');
	let imageAnimation = getElement(card, '.image-animation');
	
	let newHealth = minion2.isAlive ? minion2.health : "RIP";
	let newAttack = `${minion2.attackMin}-${minion2.attackMax}`;
	let newArmor = `${minion2.armorPower}-${minion2.armorDurability}`;
	let newAttackThisTurn = minion2.attackThisTurn;
	let healthDiff = health.innerHTML ? +health.innerHTML - +newHealth : 0;
	
	setIntoContainer(health, newHealth);
	setIntoContainer(attack, newAttack);
	setIntoContainer(armor, newArmor);
	setIntoContainer(attackThisTurn, newAttackThisTurn);
	setIntoContainer(imageAnimation, !isNaN(healthDiff) ? healthDiff : 'K.O.');

	if (attacked) {
		addAnimation(imageAnimation, 'active', animationOffset)
	}
	
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
}

function addAnimation(element, className, timeout) {
	setTimeout(()=>{element.classList.toggle(className, true)}, 0);
	setTimeout(()=>{element.classList.toggle(className, false)}, timeout);
}

function cardHitAnimation(element, className, timeout) {
	setTimeout(()=>{element.classList.toggle('lift', true)}, 0);
	setTimeout(()=>{element.classList.toggle(className, true)}, timeout * 0.2);
	setTimeout(()=>{element.classList.toggle(className, false)}, timeout * 0.8);
	setTimeout(()=>{element.classList.toggle('lift', false)}, timeout * 1.0);
}

function displayWinner(element) {
	setTimeout(()=>element.classList.add('winner'), 1500);
}

function hitFlow(queue, offset, card1, card2, minion1, minion2, className) {
	queue.addEvent(0 + offset, () => {
		hit(minion1, minion2)
	});
	queue.addEvent(0 + offset, () => {
		cardHitAnimation(card1.querySelector('.card'), className, animationOffset)
	});
	queue.addEvent(0 + offset, () => {
		displayMinion(card1, minion1);
		displayMinion(card2, minion2, true);
	});
}

function auraFlow(queue, offset, triggerTime, card1, card2, minion1, minion2) {
	queue.addEvent(0 + offset, () => {
		applyEffect(triggerTime, minion1, minion2);
	});
	queue.addEvent(0 + offset, () => {
		displayMinion(card1, minion1);
		displayMinion(card2, minion2);
	});
}

