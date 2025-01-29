# TypeScript Runtime Type Errors

This example demonstrates a common issue in TypeScript where type safety is not fully enforced at runtime.  While TypeScript's compiler catches many type errors during development, it doesn't prevent runtime errors that might arise from passing incorrect types to functions.

The `bug.ts` file contains a function `add` that is supposed to add two numbers.  However, if you pass a string as an argument, the function will still compile, but the result will be incorrect due to JavaScript's type coercion.

The `bugSolution.ts` provides a more robust solution using type guards to perform runtime checks and prevent unexpected behaviors.