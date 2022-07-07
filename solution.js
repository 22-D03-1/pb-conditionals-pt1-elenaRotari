//1
const int1 = 34;
const int2 = 66;

if ((int1 >= 50 && int1 <= 90) || (int2 >= 50 && int2 <= 90)) {
  console.log(true);
} else {
  console.log(false);
}

//2
const int3 = 8;

if (int1 >= 50 && int1 <= 90) {
  console.log(true);
} else if (int2 >= 50 && int2 <= 90) {
  console.log(true);
} else if (int3 >= 50 && int3 <= 90) {
  console.log(true);
} else {
  console.log(false);
}

//3
const a = 45;
const b = 12;
const c = 6;
console.log(Math.max(a, b, c));
console.log(Math.max(int1, int2, int3));
const max1 = Math.max(a, b, c);
const max2 = Math.max(int1, int2, int3);
if (a === max1) {
  console.log(a);
} else if (b === max1) {
  console.log(b);
} else {
  console.log(c);
}
if (int1 === max2) {
  console.log(int1);
} else if (int2 === max2) {
  console.log(int2);
} else {
  console.log(int3);
}
// if (a - b > 0) {
//   if (a - c > 0) {
//     console.log("a is larger");
//   } else if (b - c > 0) {
//     console.log("b is larger");
//   }
// } else if (b - a > 0) {
//   if (b - c > 0) {
//     console.log("b is larger");
//   } else {
//     console.log("c is larger");
//   }
// } else if (c - a > 0) {
//   if (c - b > 0) {
//     console.log("c is larger");
//   }
// }
// if (int1 - int2 > 0) {
//   if (int1 - int3 > 0) {
//     console.log("int1 is larger");
//   } else if (int2 - c > 0) {
//     console.log("int2 is larger");
//   }
// } else if (int2 - int1 > 0) {
//   if (int2 - int3 > 0) {
//     console.log("int2 is larger");
//   } else {
//     console.log("int3 is larger");
//   }
// } else if (int3 - int1 > 0) {
//   if (int3 - int2 > 0) {
//     console.log("int3 is larger");
//   }
// }

//4

let str = "thon";

if (str.slice(0, 2) === "Py") {
  console.log(str);
} else {
  str = "Py" + str;
  console.log(str);
}

//5

if (int1 + int2 >= 50 && int1 + int2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}

//6
const int4 = 7;
const int5 = 4;

if (int4 + int5 === 8 || int4 - int5 === 8) {
  console.log(true);
} else {
  console.log(false);
}

//7
if (int4 === 15 || int5 === 15 || int4 + int5 === 15) {
  console.log(true);
} else {
  console.log(false);
}
//8
if (int4 % 7 === 0 || int4 % 11 === 0 || int5 % 7 === 0 || int5 % 11 === 0) {
  console.log(true);
} else {
  console.log(false);
}
//9
if (int4 + int5 === int4 + int5) {
  console.log((int4 + int5) * 3);
} else {
  console.log(int4 + int5);
}

//10
if (int5 - 19 > 0) {
  const diff_int5 = int5 - 19;
  console.log(diff_int5 * 2);
} else {
  const diff_int5 = 19 - int5;
  console.log(diff_int5);
}
//11
const firstName = "Ella";
const age = 37;
if (age < 13) {
  console.log(`${firstName} ist ein Kind`);
} else if (age < 20) {
  console.log(`${firstName} ist ein Teenager`);
} else if (age < 30) {
  console.log(`${firstName} ist ein junger Erwachsener`);
} else {
  console.log(`${firstName} ist ein Erwachsener`);
}
