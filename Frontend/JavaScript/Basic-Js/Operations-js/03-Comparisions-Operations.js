
/********************Comparision-Operations********** */
/***********Equal to */
a = 3;
b = 5;
c = a==b;
console.log(c);

/**************Not equal to ************/
x = 3;
y = 5;
z = a!=b;
console.log(z);
/**************Greater than ************/
let age = 18;

if (age > 19) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
/**************Less than ************/
x = 3;
y = 5;
z = x>y;
console.log(z);


/*****************Greater than or equal to******* */
x = 3;
y = 5;
z = x<=y;
console.log(z);



/*****************Less than or equal to******* */
x = 3;
y = 5;
z = x>=y;
console.log(z);

/**************Strictly equal to******** */
let x = 5;
let y = "5";

if (x == y) {
  console.log("x and y are equal in value."); // true, because == ignores type
}

/**************Strictly not equal to******** */
x = 3;
y = "3";
z = x!==y;
console.log(z);