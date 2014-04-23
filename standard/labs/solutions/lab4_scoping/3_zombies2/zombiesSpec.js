
describe("zombies!!!", function() {

	it("Zombies can eat anything without being too impolite", function() {
		expect(zombie().eat("pumpkin").swallow()).toEqual("zombie eats pumpkin");
	});

	it("Zombies can eat anything while slurping", function() {
		expect(zombie().eat("stuff").slurping().swallow()).toEqual("zombie slurps stuff");
	});
	
	it("Zombies can eat anything while feasting upon", function() {
		expect(zombie().eat("stuff").feastingUpon().swallow()).toEqual("zombie feasts upon stuff");
	});
	
	it("Zombies can't swallow without eating stuff first", function() {
		expect(zombie().swallow).toBe(undefined);
	});
	
	it("Zombies can slurp and feast upon stuff all at once", function() {
		expect(zombie().eat("stuff").slurping().feastingUpon().swallow()).toEqual("zombie slurps and feasts upon stuff");
	});
	
	it("Zombies can feast upon and slurp, respecting the order", function() {
		expect(zombie().eat("stuff").feastingUpon().slurping().swallow()).toEqual("zombie feasts upon and slurps stuff");
	});
	
	it("Zombies can only eat one thing at a time", function() {
		expect(zombie().eat("stuff").eat).toBe(undefined);
	});
	
	it("Zombies can eat stuff with some hot sauce", function() {
		expect(zombie().eat("human flesh").with("extra chili sauce").swallow()).toEqual("zombie eats human flesh with extra chili sauce");
	});
	
	it("Zombies can mix different sauces", function() {
		expect(zombie().eat("human flesh").with("garlic sauce").with("olive oil").swallow()).toEqual("zombie eats human flesh with garlic sauce and olive oil");
	});
	
	it("Zombies can slurp and feast upon bread, even with some sauce", function() {
		expect(zombie().eat("boring bread").feastingUpon().with("peanut butter").slurping().swallow()).toEqual("zombie feasts upon and slurps boring bread with peanut butter");
	});
	
});
