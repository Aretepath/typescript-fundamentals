// Decorators are an experimental TypeScript feature.
// Enable `experimentalDecorators` in tsconfig to compile this file.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classLogger(constructor) {
    console.log(`Class decorator applied to: ${constructor.name}`);
}
function methodLogger(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${String(propertyKey)} with`, args);
        return originalMethod.apply(this, args);
    };
}
function accessorLogger(target, propertyKey, descriptor) {
    console.log(`Accessor decorator applied to: ${String(propertyKey)}`);
}
function propertyLogger(target, propertyKey) {
    console.log(`Property decorator applied to: ${String(propertyKey)}`);
}
function parameterLogger(target, propertyKey, parameterIndex) {
    console.log(`Parameter decorator applied to ${String(propertyKey)} parameter index ${parameterIndex}`);
}
let ReviewService = class ReviewService {
    constructor() {
        this.title = "A New Hope";
        // Parameter decorators can cause runtime issues in some environments
        // Uncomment the next line to see parameter decorator in action:
        // printReview(@parameterLogger rating: number): void {
    }
    get uppercaseTitle() {
        return this.title.toUpperCase();
    }
    printReview(rating) {
        console.log(`Review for ${this.uppercaseTitle}: ${rating}/10`);
    }
};
__decorate([
    propertyLogger
], ReviewService.prototype, "title", void 0);
__decorate([
    accessorLogger
], ReviewService.prototype, "uppercaseTitle", null);
__decorate([
    methodLogger
], ReviewService.prototype, "printReview", null);
ReviewService = __decorate([
    classLogger
], ReviewService);
export { ReviewService };
export function demoDecorators() {
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
//# sourceMappingURL=decorators.js.map