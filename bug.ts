function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // This line will compile without error, but will result in unexpected behavior at runtime.