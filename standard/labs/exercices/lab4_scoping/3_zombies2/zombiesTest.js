
$(document).ready(function() {

	test("Zombies can eat anything without being too impolite", function() {
		equal(zombie().eat("pumpkin").swallow(), "zombie eats pumpkin");
	});

	test("Zombies can eat anything while slurping", function() {
		equal(zombie().eat("stuff").slurping().swallow(), "zombie slurps stuff");
	});
	
	test("Zombies can eat anything while feasting upon", function() {
		equal(zombie().eat("stuff").feastingUpon().swallow(), "zombie feasts upon stuff");
	});
	
	test("Zombies can't swallow without eating stuff first", function() {
		equal(zombie().swallow, undefined);
	});
	
	test("Zombies can slurp and feast upon stuff all at once", function() {
		equal(zombie().eat("stuff").slurping().feastingUpon().swallow(), "zombie slurps and feasts upon stuff");
	});
	
	test("Zombies can feast upon and slurp, respecting the order", function() {
		equal(zombie().eat("stuff").feastingUpon().slurping().swallow(), "zombie feasts upon and slurps stuff");
	});
	
	test("Zombies can only eat one thing at a time", function() {
		equal(zombie().eat("stuff").eat, undefined);
	});
	
	test("Zombies can eat stuff with some hot sauce", function() {
		equal(zombie().eat("human flesh").with("extra chili sauce").swallow(), "zombie eats human flesh with extra chili sauce");
	});
	
	test("Zombies can mix different sauces", function() {
		equal(zombie().eat("human flesh").with("garlic sauce").with("olive oil").swallow(), "zombie eats human flesh with garlic sauce and olive oil");
	});
	
	test("Zombies can slurp and feast upon bread, even with some sauce", function() {
		equal(zombie().eat("boring bread").feastingUpon().with("peanut butter").slurping().swallow(), "zombie feasts upon and slurps boring bread with peanut butter");
	});
	
});
