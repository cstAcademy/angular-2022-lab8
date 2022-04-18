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
      price: 400
    },
    {
      name: 'lala2',
      age: 10,
      owner: 'owner',
      gender: Gender.FEMALE,
      price: 400

    },
    {
      name: 'lala5',
      age: 10,
      owner: 'owner',
      gender: Gender.FEMALE,
      price: 400

    },
    {
      name: 'lala3ks',
      age: 10,
      owner: 'owner',
      gender: Gender.MALE,
      price: 400

    },
  ];

  getDogs(): Dog[] {
    return this.dogs;
  }

  setDogs(dogs: Dog[]) {
    this.dogs = dogs;
  }

  sortByAge(): Dog[] {
    return this.dogs.sort((a, b) => a.age - b.age);
  }

  searchDog(dogName: string): Dog[]{
    return this.dogs.filter((item) => item.name.includes(dogName));
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
