import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/user';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage implements OnInit {

  stations = [];

   defaultVal = {
    firstName: '',    middleName: '',    lastName: '',    address: '',    phone: '',    email: '',     img: '',
    username: '',  };
  account: Account = this.defaultVal;
  accountSubs: Subscription;

  myDate = new Date();
  hrs = this.myDate.getHours()

  greet: string;


  subscription: Subscription;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
  ) {
    this.dataService.getStations().subscribe(res => {
      console.log(res);
      this.stations = res;
    })
   }

  ngOnInit() {

    this.accountSubs = this.authService.userAccount.subscribe((acc) => {
      this.account = acc;
    });

     if (this.hrs < 12)
        this.greet = 'Good Morning';
    else if (this.hrs >= 12 && this.hrs <= 17)
        this.greet = 'Good Afternoon';
    else if (this.hrs >= 17 && this.hrs <= 24)
        this.greet = 'Good evening';
  

  }

  // ViewDidEnter() {
  //   this.authService.userAccount
  //     .pipe(first())
  //     .subscribe(
  //       (res) => (this.fullName = res.firstname + ' ' + res.lastname)
  //     );
  // }

}
