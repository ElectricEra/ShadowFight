let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");

let minion1 = Object.create(Swordmaster);
let minion2 = Object.create(Imp);

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
