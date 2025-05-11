function mincost(arr)
{ 
	let current = arr
	let final = []
	let total = 0
	let i = 0

	function assending(){
		current = current.sort((a,b)=>a-b);
	}

	while (current.length <=1) {
		assending();
		total = current[i]+current[i+1];
		current.pop(current[i]);
		current.pop(current[i+1]);
		current.push(total);
		final.push(total);
		total=0;
		if (current.length <=1) {
			final.foreach((data)=>{
				 return total +=data;
			})
		}
	}

	
//write your code here
// return the min cost
  
}

module.exports=mincost;
