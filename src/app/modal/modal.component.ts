import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  displayModalSubscription: boolean;
  displayModalNegative: boolean;
  displayModal: boolean;

  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.displayModal = false;
    this.displayModalSubscription = false;
    this.displayModalNegative = false;
  }

  openModalSubscribe(){
    this.displayModal = true;
    this.displayModalSubscription = true;
  }

  openModalNegative(){
    this.displayModal = true;
    this.displayModalNegative = true;
  }
}
