
function biteTheDust(army) {
	if(!army || army.length === 0) {
		return 0;
	}
	
	return army.reduce(function(prevZombie, currZombie) {
		return ZombieArmy.enlist(prevZombie.strength + currZombie.strength);
	}).strength * 10;
}
