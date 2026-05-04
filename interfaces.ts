interface Movie {
  title: string;
  director: string;
  yearReleased: number;
  streaming: boolean;
  length?: number; // Optional property
  logReview?: ReviewLogger; // Optional method
}

// Function type interface - defines the shape of a function
interface ReviewLogger {
  (review: string): void;
}

interface Person {
  name: string;
  email: string;
}

// Interface inheritance - Director extends Person, adding new properties
interface Director extends Person {
  numMoviesDirected: number;
}

// Interface with method implementation requirement
interface CastMember extends Person {
  role: string;
  rehearse: (sceneNumber: number) => void;
}

// Type aliases - renaming exported types for cleaner imports
export type { Movie, ReviewLogger as Logger, Person, Director, CastMember };
