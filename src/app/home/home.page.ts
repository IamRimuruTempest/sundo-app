import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = [
    {
      tab: 'hero',
      icon: 'home-outline',
      title: 'Home'
    },
    {
      tab: 'account',
      icon: 'person-circle-outline',
      title: 'Accounts'
    }
  ]

  

  tab: string;

  constructor(
    private router: Router,
  ) {}

  // ionViewDidEnter() {
  //   this.router.navigate([this.tab]);
  // }

}
