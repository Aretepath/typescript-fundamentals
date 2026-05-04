// Decorators are an experimental TypeScript feature.
// Enable `experimentalDecorators` in tsconfig to compile this file.

function classLogger(constructor: Function) {
  console.log(`Class decorator applied to: ${constructor.name}`);
}

function methodLogger(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    console.log(`Calling ${String(propertyKey)} with`, args);
    return originalMethod.apply(this, args);
  };
}

function accessorLogger(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  console.log(`Accessor decorator applied to: ${String(propertyKey)}`);
}

function propertyLogger(target: Object, propertyKey: string) {
  console.log(`Property decorator applied to: ${String(propertyKey)}`);
}

function parameterLogger(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number,
) {
  console.log(
    `Parameter decorator applied to ${String(propertyKey)} parameter index ${parameterIndex}`,
  );
}

@classLogger
export class ReviewService {
  @propertyLogger
  title = "A New Hope";

  @accessorLogger
  get uppercaseTitle(): string {
    return this.title.toUpperCase();
  }

  @methodLogger
  printReview(rating: number): void {
    console.log(`Review for ${this.uppercaseTitle}: ${rating}/10`);
  }

  // Parameter decorators can cause runtime issues in some environments
  // Uncomment the next line to see parameter decorator in action:
  // printReview(@parameterLogger rating: number): void {
}

export function demoDecorators(): void {
  console.log("-- Decorators demo starting --");

  const service = new ReviewService();
  service.title = "The Empire Strikes Back";
  service.printReview(10);

  console.log("-- Decorators demo complete --");
}

void demoDecorators();

// Parameter decorators can cause runtime issues in some environments
// Uncomment the next line to see parameter decorator in action:
// printReview(@parameterLogger rating: number): void {
