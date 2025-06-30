// const word = "aBcd45&*";

// function formatWord(word) {
//   return word
//     .split("")
//     .map(function (ch) {
//       const asciiVal = ch.toUpperCase().charCodeAt(0);
//       if (asciiVal >= 65 && asciiVal <= 90) {
//         return ch;
//       } else return "";
//     })
//     .filter((ch) => ch !== "")
//     .map(function (ch, i) {
//       if (i === 0) return ch.toUpperCase();
//       else return ch.toLowerCase();
//     })
//     .join("");
// }

// const travelLog = [
//   "##p@ar!is123",
//   "to*kyO!!",
//   "nEw%%yORK",
//   "123", // invalid
//   "@loNDon$%",
//   "ba#ng@koK",
// ];

// const res = travelLog
//   .map((word) => formatWord(word))
//   .filter((word) => word !== "")
//   .sort((a, b) => a.length - b.length)
//   .join(",");

// console.log(res);

// const str = "#4Ma@h*es4h";
// const strArray = str.split("").filter(function (chr) {
//   const ascivalue = chr.charCodeAt(0);
// });
// console.log(strArray);

/*
 lcmAndGcd(a, b) {
        
        let n1 = a;
        let n2 = b;
    
        
        let remainder = null;
        let HCF = null;
        
        while(remainder !== 0){
            remainder = n1 % n2;
            if(remainder === 0) HCF = n2;
            n1 = n2;
            n2 = remainder;
        }
        
        const LCM = a * b / HCF;
        
        return [LCM, HCF];
        
    }
}
*/

// const Lcm_Hcf = function (a, b) {
//   let n1 = a;
//   let n2 = b;
//   let remainder = null;

//   while (remainder !== 0) {
//     remainder = n1 % n2;

//     console.log(remainder);
//   }
//   return remainder;
// };

// console.log(Lcm_Hcf(12, 2));

const Lcm_Hcf = function (a, b) {
  let n1 = a;
  let n2 = b;
  let remainder;

  while (n2 !== 0) {
    remainder = n1 % n2;
    n1 = n2;
    n2 = remainder;
  }

  return n1; // n1 is the HCF
};

console.log(Lcm_Hcf(12, 2)); // Output: 2
