import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  defaultVal = {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    img: '',
    username: '',  };
  account: Account = this.defaultVal;
  accountSubs: Subscription;

  constructor(
    // private dataService: DataService,
    private authService: AuthService,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    ) { }

  ngOnInit() {
    this.accountSubs = this.authService.userAccount.subscribe((acc) => {
      this.account = acc;
    });

  }

  logout() {
    // this.accountSubs.unsubscribe();
    this.popoverCtrl.dismiss();
    this.authService.signOut();
    this.account = this.defaultVal;
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Are you sure?',
      message: '<p>You will need to login again to keep using the applications</p>',
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            console.log('Cancel Logout');
          }
        }, {
          text: 'LOG OUT',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Logout');
            this.logout()
          }
        }
      ]
    });

    await alert.present();
  }


}
