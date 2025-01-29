function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return "Invalid input: Arguments must be numbers";
  }
}

let result1 = addSafe(1, 2);   // Output: 3
let result2 = addSafe(1, "2"); // Output: "Invalid input: Arguments must be numbers"
let result3 = addSafe("1", 2); // Output: "Invalid input: Arguments must be numbers"