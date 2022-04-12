import { Dog, Gender } from './dog.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private dogs: Dog[] = [
    {
      id: 1,
      name: 'lala',
      age: 10,
      race: 'race1',
      owner: 'owner',
      gender: Gender.FEMALE,
    },
    {
      id: 2,
      name: 'lala2',
      age: 10,
      race: 'race1',
      owner: 'owner',
      gender: Gender.FEMALE,
    },
    {
      id: 3,
      name: 'lala',
      age: 10,
      race: 'race1',
      owner: 'owner',
      gender: Gender.FEMALE,
    },
    {
      id: 4,
      name: 'lala',
      age: 10,
      race: 'race1',
      owner: 'owner',
      gender: Gender.FEMALE,
    },
  ];

  getDogs(): Dog[] {
    return this.dogs;
  }

  setDogs(dogs: Dog[]) {
    this.dogs = dogs;
  }

  getDogById(dogId: number): Dog | undefined {
    return this.dogs.find((dog) => dog.id == dogId);
  }

  addNewDog() {
    //todo
  }
}
