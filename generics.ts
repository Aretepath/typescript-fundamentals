// Generic interface - reusable structure with type parameter
interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

interface Person {
  name: string;
  age: number;
}

// Generic function - works with any type T
export function identity<T>(value: T): T {
  return value;
}

// Generic function returning array of type T
export function wrapInArray<T>(value: T): T[] {
  return [value];
}

// Generic function with constraints - K must be a key of T
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Generic class - type-safe container for any type T
export class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

// Generic function returning generic interface
export function createResponse<T>(data: T): ApiResponse<T> {
  return {
    data,
    success: true,
  };
}

export function demoGenerics(): void {
  console.log("-- Generics demo starting --");

  // Type inference - TypeScript infers T as number
  const numberValue = identity(42);
  console.log("identity<number>(42):", numberValue);

  // Explicit type parameter
  const stringArray = wrapInArray("TypeScript");
  console.log('wrapInArray<string>("TypeScript"):', stringArray);

  // Constrained generics - key must exist on Person
  const person: Person = { name: "Leia Organa", age: 23 };
  const personName = getProperty(person, "name");
  console.log("getProperty(person, 'name'):", personName);

  // Generic class usage
  const personRepository = new Repository<Person>();
  personRepository.add(person);
  personRepository.add({ name: "Han Solo", age: 32 });
  console.log("Repository<Person> items:", personRepository.getAll());

  // Generic function with inferred object type
  const response = createResponse({ id: 1, title: "A New Hope" });
  console.log("createResponse<{id:number;title:string}>(...):", response);

  console.log("-- Generics demo complete --");
}

void demoGenerics();
