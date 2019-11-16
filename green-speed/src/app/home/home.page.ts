import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private router: Router, public loadingController: LoadingController ) {}

  handleFrom(event) {
    console.log(event.target.value);
  }
  handleTo(event) {
    console.log(event.target.value);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading',
      duration: 2000
    });
    await loading.present();
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    this.presentLoading();
    const _router = this.router;
    setTimeout(function(){
      _router.navigate(["/list"]);
    }, 2000);
  }

}
