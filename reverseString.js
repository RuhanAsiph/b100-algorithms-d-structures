//Reverse String 
//Step 1 - Check input --> typeof string or if it's empty or less than 2 return string
//Step 2 - convert the string into an array --> backwards[] array
//Step 3 - fill the backwards[] array from highest to lowest, from last to first
//Step 4 - Turn backwards[] into a string using join('') method

function reverse(str){
	if(!str || typeof str != 'string' || str.length < 2 ) return str;
	
	const backwards = [];
	const totalItems = str.length - 1;
	for(let i = totalItems; i >= 0; i--){
	  backwards.push(str[i]);
	}
	return backwards.join('');
      }


console.log(reverse('Wizard'));