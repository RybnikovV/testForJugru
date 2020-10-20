import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  displayModalSubscription: boolean;
  signed: boolean;
  displayModalNegative: boolean;
  displayModal: boolean;
  formSubscribe: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formSubscribe = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ])
    });
  }

  closeModal() {
    this.displayModal = false;
    this.displayModalSubscription = false;
    this.displayModalNegative = false;
  }

  openModalSubscribe() {
    this.displayModal = true;
    this.displayModalSubscription = true;
  }

  openModalNegative() {
    this.displayModal = true;
    this.displayModalNegative = true;
  }

  submit() {
    this.signed = true;
  }
}
