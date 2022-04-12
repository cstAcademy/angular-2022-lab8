import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    console.log('closeModal');
  }

  addDog() {
    console.log('add');
  }
}
