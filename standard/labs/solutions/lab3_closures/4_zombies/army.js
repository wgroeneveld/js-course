ZombieArmy = (function() {

	var zombie = {
		strength: 10,
		eat: function() {
			console.log("brrraaiinnnzzz");
		}
	};

	function createZombie(strength) {
		var aZombie = Object.create(zombie);
		aZombie.strength = strength;
		return aZombie;
	}
	
	return {
		enlist: createZombie,
		zombie: createZombie(10),
		poleVaultingZombie: createZombie(17),
		coneheadZombie: createZombie(28),
		screenDoorZombie: createZombie(65),
		footballZombie: createZombie(80),
		dancingZombie: createZombie(17)
	};

})();
