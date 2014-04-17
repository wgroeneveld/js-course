
$(document).ready(function() {

	test("Reducing one zombie to dust", function() {
		var dust = biteTheDust([ZombieArmy.zombie]);
		equal(dust, 100);
	});

	test("Reducing a whole army of zombies to dust", function() {
		var dust = biteTheDust([ZombieArmy.coneheadZombie, ZombieArmy.poleVaultingZombie]);
		equal(dust, 170 + 280);
	});
	
	test("An empty army is attacking??, so no dust has been produced", function() {
		equal(biteTheDust([]), 0);
	});
	
	test("No zombies at all are attacking, so no dust has been produced", function() {
		equal(biteTheDust(), 0);
	});
	
});
