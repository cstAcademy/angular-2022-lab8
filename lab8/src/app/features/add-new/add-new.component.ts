import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      dogName: new FormControl(null, Validators.required),
      dogAge: new FormControl(null, Validators.required),
      dogOwner: new FormControl(null, Validators.required),
      dogGender: new FormControl(null, Validators.required),
    });
  }

  addDog() {}
}
