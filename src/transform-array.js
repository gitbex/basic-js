module.exports = function transform(arr) {
    let l = arr.length;
	if (!Array.isArray(arr)) {
        throw new Error();
    } else if (arr === undefined || l == 0) {
      return arr;
    }
	

for(let i = 0; i<l; i++){
	
	
if(arr[i] === '--double-next' &&  i !== arr.length -1) {
arr.splice(i, 1, arr[i + 1]);
 } else if(arr[i] === '--double-prev' &&  i !== 0 ) {
arr.splice(i, 1, arr[i - 1]);
} else if(arr[i] === '--discard-next' &&  i !== arr.length -1) {
arr.splice(i, 2);
i--;
} else if(arr[i] === '--discard-prev' &&  i !== 0) {
arr.splice(i-1, 2);
i-=2;
} else if((arr[i] === '--discard-next' || arr[i] === '--double-next') && i === arr.length -1){
arr.splice(i,1)
} else if((arr[0] === '--discard-prev' || arr[0] === '--double-prev') && i ===  0){
arr.splice(i,1)
}
	
}	//end of for loop
	



return arr;

}