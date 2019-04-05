import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  username = '';
  isEmpty = true;

  constructor() { }

  ngOnInit() {
  }

  // onFill(event: any) {
  //   if (this.username === '') {
  //     this.isEmpty = true;
  //   } else {
  //     this.isEmpty = false;
  //   }
  // }

  // onClearUsername() {
  //   this.username = '';
  //   this.isEmpty = true;
  // }

}