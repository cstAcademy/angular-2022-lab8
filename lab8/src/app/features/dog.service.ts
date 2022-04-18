import { Dog } from './dog.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private dogs: Dog[] = [
    {
      name: 'lala',
      age: 10,
      owner: 'owner',
      gender: 'f',
    },
    {
      name: 'lala2',
      age: 10,
      owner: 'owner',
      gender: 'f',
    },
    {
      name: 'lala5',
      age: 10,
      owner: 'owner',
      gender: 'f',
    },
    {
      name: 'lala3ks',
      age: 10,
      owner: 'owner',
      gender: 'm',
    },
  ];

  getDogs(): Dog[] {
    return this.dogs;
  }

  setDogs(dogs: Dog[]) {
    this.dogs = dogs;
  }
}
