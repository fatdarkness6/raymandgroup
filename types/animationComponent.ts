type AnimationComponentsBase = {
  duration: string;
  delay?: number;
  preset: string | string[] | ((i: number) => string);
  motionClass?: string | string[] | ((i: number) => string);
};

// Either:
type AnimationComponentsWithLoops = AnimationComponentsBase & {
  numberOfLoops: number;
  items?: never; // disallow items here
};

// Or:
type AnimationComponentsWithItems = AnimationComponentsBase & {
  items: any[];
  numberOfLoops?: never; // disallow numberOfLoops here
};

export type AnimationComponentsType = 
  | AnimationComponentsWithLoops
  | AnimationComponentsWithItems;