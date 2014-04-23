
describe("zombies!!!!", function() {

	it("Reducing one zombie to dust", function() {
		var dust = biteTheDust([ZombieArmy.zombie]);
		expect(dust).toBe(100);
	});

	it("Reducing a whole army of zombies to dust", function() {
		var dust = biteTheDust([ZombieArmy.coneheadZombie, ZombieArmy.poleVaultingZombie]);
		expect(dust).toBe(170 + 280);
	});
	
	it("An empty army is attacking??, so no dust has been produced", function() {
		expect(biteTheDust([])).toBe(0);
	});
	
	it("No zombies at all are attacking, so no dust has been produced", function() {
		expect(biteTheDust()).toBe(0);
	});
	
});
