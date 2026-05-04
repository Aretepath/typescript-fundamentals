interface ApiResponse<T> {
    data: T;
    success: boolean;
    error?: string;
}
export declare function identity<T>(value: T): T;
export declare function wrapInArray<T>(value: T): T[];
export declare function getProperty<T, K extends keyof T>(obj: T, key: K): T[K];
export declare class Repository<T> {
    private items;
    add(item: T): void;
    getAll(): T[];
}
export declare function createResponse<T>(data: T): ApiResponse<T>;
export declare function demoGenerics(): void;
export {};
//# sourceMappingURL=generics.d.ts.map