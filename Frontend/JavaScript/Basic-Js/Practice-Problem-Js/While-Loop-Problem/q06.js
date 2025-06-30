// check if the number is prime or not!
pointer = 1;
fact = 17;

count = 0;

while(pointer <= fact){
    if (fact % pointer ==0){
        count++
    }
    pointer++;

} 
if(count == 2){
    console.log("a prime number")
}
else{
    console.log("not a prime numner")
}
