import { Gender } from './../dog.interface';
import { AddNewComponent } from './../add-new/add-new.component';
import { DogService } from './../dog.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dogs: Dog[] = [];
  genders = Gender;

  constructor(private dogService: DogService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dogs = this.dogService.getDogs();
  }

  openAddModal() {
    this.dialog.open(AddNewComponent);
  }

  deleteDog(dog: Dog) {
    this.dogs = this.dogService.deleteDog(dog);
  }
}
