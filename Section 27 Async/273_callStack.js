const multiply = (x, y) => x * y;

const square = (x) => multiply(x * x);

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}

console.log("Before");
isRightTriangle(3,4,5); //put a breakpoint here in the sources tab to view call stack in inspector
console.log("Done");