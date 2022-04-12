export interface Dog {
  name: string;
  age: number;
  owner: string;
  gender: Gender;
}

export enum Gender {
  MALE,
  FEMALE,
}
