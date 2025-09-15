/ ___________________________QUESTION___________________________________________

function findDifferentCards (array, condition) {
    return array.filter (value => condition);
}

console.log(findDifferentCards(deckOfCards, value => value.cardSuit === 'spades' && value.value === 'Ace'));
console.log(findDifferentCards(deckOfCards, value => value.value === 6));
console.log(findDifferentCards(deckOfCards, value => value.cardSuit === 'hearts' || value.cardSuit === 'diamond'));;
console.log(findDifferentCards(deckOfCards, value => value.cardSuit === 'diamond'));
console.log(findDifferentCards(deckOfCards, value => value.cardSuit === 'club' && (value.value === 9 || value.value === 10 || value.value === 'Jack' || value.value === 'Queen' || value.value === 'King' || value.value === 'Ace')));

