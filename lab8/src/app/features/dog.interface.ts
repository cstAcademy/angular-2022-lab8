export interface Dog {
  name: string;
  age: number;
  owner: string;
  gender: Gender;
  price: number;
}

export enum Gender {
  MALE,
  FEMALE,
}
