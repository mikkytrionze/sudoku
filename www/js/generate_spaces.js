function Space () {
	this.x = 0;
	this.y = 0;
	this.value = 0;
	this.is_equal = function (a) {
		return  ((a.x == this.x) && (a.y == this.y));
	};
};

function generate (size) {
	var mySet 		= new Array();
	var complete 	= true;
	var count 		= 0;
	 
	while (complete) {
		//generate two numbers
		
		if (mySet.length == 0) {
			var space = new Space();
			space.x = Math.round(Math.random() * 8);
			space.y = Math.round(Math.random() * 8);
			mySet.push(space);
		} else {
			var space = new Space();
			var found  = false;
			
			space.x = Math.round(Math.random() * 8);
			space.y = Math.round(Math.random() * 8);
			
			for (var i_=0; i_<mySet.length; i_++) {
				// loop through all spaces array to get a duplicate
				var tst = mySet[i_];
				if (tst.is_equal(space)) {
					found = true;
					break;
				} else found = false;
			}
			
			if (!found) mySet.push(space);
			
			if (mySet.length === (size+1)) {
				mySet.pop();
				break;
			}
		}
	}
	return mySet;
};

/*
 * this function collects an array and returns three 
 * arrays 
 * - array with empty spaces 
 * - array with filled spaces
 * - array of spaces with values
 */
function get_both_matrix (arr, amt) {
	var result		= new Object();
	result.empty	= arr; //array of empty cells
	result.spaces 	= generate(amt);
	  
	//loop through spaces to clean the array
	for (var i=0; i<result.spaces.length; i++){
		var space 	= result.spaces[i];
		space.value = result.empty[space.x][space.y]; 
		result.empty[space.x][space.y] = 0;
	}
	return result;
};