let count=0;
function sortArrayAscending(arr){
    return arr.sort(function(a,b){
        count++;
        
        console.log(`a:${a},b:${b}=${a}-${b}`)
        return a-b;
    })
}


const unsortedArray=[4,2,3,5,1,5,2];
const sortedArray=sortArrayAscending(unsortedArray);
console.log(sortedArray);
console.log(count);