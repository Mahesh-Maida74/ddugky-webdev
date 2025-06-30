// Print the factors of a number
pointer = 1;
fact = 12;
count = 0;

while(pointer<=12){
    if (fact % pointer ==0){
        console.log( pointer,count++);   
    }
    pointer++;

} 
console.log(count)