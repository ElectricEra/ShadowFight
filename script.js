let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");

let minion1 = Object.create(Swordmaster);
let minion2 = Object.create(Imp);

let minion1Debouncer = true;
let minion2Debouncer = true;

prepareMinionToFight(minion1);
prepareMinionToFight(minion2);

displayMinion(card1, minion1);
displayMinion(card2, minion2);

card1.addEventListener('click', () => {
	if (minion2.isAlive && minion1.isAlive && minion1Debouncer) {
		minion1Debouncer = false;
		setTimeout(()=>{minion1Debouncer = true}, 1100);
		hit(minion1, minion2);
		cardHitAnimation(document.querySelector('#card1 > .card'), 'move-right', animationOffset);
		displayMinion(card1, minion1);
		displayMinion(card2, minion2, true);
		console.log(minion1, minion2);
	}
})

card2.addEventListener('click', () => {
	if (minion1.isAlive && minion2.isAlive && minion2Debouncer) {
		minion2Debouncer = false;
		setTimeout(()=>{minion2Debouncer = true}, 1100);
		hit(minion2, minion1);
		cardHitAnimation(document.querySelector('#card2 > .card'), 'move-left', animationOffset)
		displayMinion(card2, minion2);
		displayMinion(card1, minion1, true);
		console.log(minion1, minion2);
	}
})
