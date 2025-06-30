///**************First Question */
/*******📝 1. Count and Print All Even)*/

/*
num = 1;
count = 0;
while(num<=50){
    if(num %2==0){
        console.log(num);
        count++;
    }
    num++;
  
} 

console.log("Count : ", count)


    /**************📝 2. Print the Squares of Numbers from 1 to 10 ******/
/*
    num1 = 1;
    while(num1<=10){
        console.log(num1,"x",num1,"x","=",num1*num1);
        num1++;
    } */
/**************📝 2. Print the Cubes of Numbers from 1 to 10 ******/
/*
    num1 = 1;
    while(num1<=10){
        console.log(num1,"x",num1,num1,"x","=",num1*num1*num1);
        num1++;
    } */

/*************📝 3. Count the Reverse number  in a Given Number */
/* 
    let num3 = 12345;
    // 54321
    while(num3>0){
        let digit = num3 % 10;
        console.log(digit);
        num3 = Math.floor(num3/10);
    }   
        */

/******************************************    . Reverse a Given Number  */
/*
let num4 = 12345;
res = 0;
// 54321
while(num4>0){
    let digit = num4 % 10;
    res = res%10 +digit;
    
    num4 = Math.floor(num4/10);
    console.log(num4) 
}
    */
// digit = 1;
// fact = 12;
// while(digit<=12){
//     if(1%12==0){
//         console.log(digit);
//     }
// }

// console.log("helllo");

const data = [
  "Alice|Developer|Frontend",
  "Bob|Designer|UI",
  "Charlie|Developer|Frontend",
  "David|Manager|Backend",
  "Eve|Developer|Backend",
];

const dataMap = data.forEach(function (str) {
  let res = {};
  let splitstr = str.split("|");
  let [name, role, team] = splitstr;
  let obj = { name: name, role: role, team: team };

  if (res[team] === undefined) res[team] = [];
  res[team].push(obj);
  console.log(res);
});
