import { DogService } from './../dog.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dog } from '../dog.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomValidators } from '../custom-validator';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit {
  form!: FormGroup;

  constructor(private dogService: DogService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      dogName: new FormControl(null, Validators.required),
      dogAge: new FormControl(null, Validators.required),
      dogOwner: new FormControl(null, [Validators.required, CustomValidators.humanName]),
      dogGender: new FormControl(null, Validators.required),
      dogPrice: new FormControl(null, [Validators.required, CustomValidators.specificPrice]),
    });
  }

  addDog() {
    if (this.form.valid) {
      const payload: Dog = {
        name: this.dogName?.value,
        owner: this.dogOwner?.value,
        age: this.dogAge?.value,
        gender: this.dogGender?.value,
        price: this.dogPrice?.value
      };

      this.dogService.addNewDog(payload);
      this._snackBar.open('Dog added successfully!');
    } else {
      this._snackBar.open('The form is not valid!');
    }
  }

  get dogName() {
    return this.form.get('dogName');
  }

  get dogAge() {
    return this.form.get('dogAge');
  }

  get dogOwner() {
    return this.form.get('dogOwner');
  }

  get dogGender() {
    return this.form.get('dogGender');
  }

  get dogPrice() {
    return this.form.get('dogPrice');
  }
}
