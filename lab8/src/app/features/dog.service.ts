import { Dog, Gender } from './dog.interface';
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
      gender: Gender.FEMALE,
    },
    {
      name: 'lala2',
      age: 10,
      owner: 'owner',
      gender: Gender.FEMALE,
    },
    {
      name: 'lala5',
      age: 10,
      owner: 'owner',
      gender: Gender.FEMALE,
    },
    {
      name: 'lala3ks',
      age: 10,
      owner: 'owner',
      gender: Gender.MALE,
    },
  ];

  getDogs(): Dog[] {
    return this.dogs;
  }

  setDogs(dogs: Dog[]) {
    this.dogs = dogs;
  }

  getCertainDog(dog: Dog): Dog | undefined {
    return this.dogs.find((elem) => elem == dog);
  }

  addNewDog(dog: Dog) {
    this.dogs.push(dog);
    console.log(this.dogs);
  }

  deleteDog(dog: Dog) {
    this.dogs = this.dogs.filter((item) => item !== dog);
    return this.dogs;
  }
}
