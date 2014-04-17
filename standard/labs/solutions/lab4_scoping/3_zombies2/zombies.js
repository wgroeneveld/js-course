
function zombie() {
	var politeness = [];
	var sauces = [];

	return {
		eat: function(food) {
			function add(politenesLevel, arr) {
				arr.push(politenesLevel);
				return edible;
			}
		
			function reduceSauce() {
				var saucesResult = "";
				if(sauces.length > 0) {
					saucesResult = " with " + sauces.reduce(function(prev, next) {
						return prev + " and " + next;
					});
				}
				return saucesResult;
			}
		
			function reducePoliteness() {
				return politeness.reduce(function(prev, next) {
					return prev + " and " + next;
				});
			}
		
			var edible = {
				slurping: function() { return add("slurps", politeness); },
				feastingUpon: function() { return add("feasts upon", politeness); },
				with: function(sauce) { return add(sauce, sauces); },
				swallow: function() {
					if(politeness.length === 0) {
						return "zombie eats " + food + reduceSauce();
					} else {
						return "zombie " + reducePoliteness() + " " + food + reduceSauce();
					}
				}
			};
		
			return edible;
		}
	}

}
