export interface Dog {
  id: number;
  name: string;
  age: number;
  race: string;
  owner: string;
  gender: Gender;
}

export enum Gender {
  MALE,
  FEMALE,
}
