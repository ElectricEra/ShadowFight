function prepareFight() {
	prepareMinionToFight(minion1);
	prepareMinionToFight(minion2);

	displayMinionStaticData(card1, minion1);
	displayMinionStaticData(card2, minion2);
	displayMinion(card1, minion1);
	displayMinion(card2, minion2);	
}

function fight(minion1, minion2) {
	setTimeout( () => { card1.click(); }, 0);
	setTimeout( () => { card2.click(); }, 2400);
	setTimeout( () => { minion1.isAlive && minion2.isAlive ? fight(minion1, minion2) : null }, 5000);
}

function selectFighter(select, index) {
	select.selectedIndex = index;
	return Object.create(minions[index]);
}

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");

let card1select = card1.querySelector('select');
let card2select = card2.querySelector('select');

let card1button = card1.querySelector('button');
let card2button = card2.querySelector('button');

let minions = [Swordmaster, Gog, Priest, Wolfraider]

minions.forEach( minion => {
	option1 = document.createElement("option");
	option2 = document.createElement("option");
	option1.value = minion.name;
	option2.value = minion.name;
	option1.text = minion.name;
	option2.text = minion.name;
	card1select.add(option1);
	card2select.add(option2);
})


let minion1;
let minion2;

minion1 = selectFighter(card1select, Math.floor(Math.random()*minions.length));
minion2 = selectFighter(card2select, Math.floor(Math.random()*minions.length));

console.log(minion1);

let minion1Debouncer = true;
let minion2Debouncer = true;

prepareFight();

applyEffect(0, minion1, minion2);
applyEffect(0, minion2, minion1);

card1.querySelector('.card').addEventListener('click', () => {
	if (minion2.isAlive && minion1.isAlive && minion1Debouncer) {
		let queue = animationQueue();
	
		minion1Debouncer = false;
		setTimeout(()=>{minion1Debouncer = true}, 2000);

		auraFlow(queue, 0, 1, card1, card2, minion1, minion2)
		hitFlow(queue, 0, card1, card2, minion1, minion2, 'move-right');
		if (!minion2.isAlive) {
			queue.addEvent(1000, () => {
				displayWinner(card1);
				applyEffect(4, minion1, minion2)
			})
		} else {
			auraFlow(queue, 1500, 2, card1, card2, minion1, minion2)
		}
		queue.start();
	}
})

card2.querySelector('.card').addEventListener('click', () => {
	if (minion1.isAlive && minion2.isAlive && minion2Debouncer) {
		let queue = animationQueue();

		minion2Debouncer = false;
		setTimeout(()=>{minion2Debouncer = true}, 2000);

		auraFlow(queue, 0, 1, card2, card1, minion2, minion1)
		hitFlow(queue, 0, card2, card1, minion2, minion1, 'move-left');
		if (!minion1.isAlive) {
			queue.addEvent(1000, () => {
				displayWinner(card2);
				applyEffect(4, minion2, minion1)
			})
		} else {
			auraFlow(queue, 1500, 2, card2, card1, minion2, minion1)
		}
		queue.start();
	}
})

document.getElementById('auto-fight').addEventListener('click', () => {
	fight(minion1, minion2);
})

card1button.addEventListener('click', () => {
	minion1 = selectFighter(card1select, card1select.selectedIndex);
	prepareFight();
})

card2button.addEventListener('click', () => {
	minion2 = selectFighter(card1select, card1select.selectedIndex);
	prepareFight();
})
