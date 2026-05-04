// Generic function - works with any type T
export function identity(value) {
    return value;
}
// Generic function returning array of type T
export function wrapInArray(value) {
    return [value];
}
// Generic function with constraints - K must be a key of T
export function getProperty(obj, key) {
    return obj[key];
}
// Generic class - type-safe container for any type T
export class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// Generic function returning generic interface
export function createResponse(data) {
    return {
        data,
        success: true,
    };
}
export function demoGenerics() {
    console.log("-- Generics demo starting --");
    // Type inference - TypeScript infers T as number
    const numberValue = identity(42);
    console.log("identity<number>(42):", numberValue);
    // Explicit type parameter
    const stringArray = wrapInArray("TypeScript");
    console.log('wrapInArray<string>("TypeScript"):', stringArray);
    // Constrained generics - key must exist on Person
    const person = { name: "Leia Organa", age: 23 };
    const personName = getProperty(person, "name");
    console.log("getProperty(person, 'name'):", personName);
    // Generic class usage
    const personRepository = new Repository();
    personRepository.add(person);
    personRepository.add({ name: "Han Solo", age: 32 });
    console.log("Repository<Person> items:", personRepository.getAll());
    // Generic function with inferred object type
    const response = createResponse({ id: 1, title: "A New Hope" });
    console.log("createResponse<{id:number;title:string}>(...):", response);
    console.log("-- Generics demo complete --");
}
void demoGenerics();
//# sourceMappingURL=generics.js.map