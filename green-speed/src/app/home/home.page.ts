import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router ) {}

  handleFrom(event) {
    console.log(event.target.value);
  }
  handleTo(event) {
    console.log(event.target.value);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    this.router.navigate(["/list"]);
  }

}
