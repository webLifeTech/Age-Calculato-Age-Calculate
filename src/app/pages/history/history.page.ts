import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdmobfreeService } from 'src/app/services/admobfree.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(
    public gs: GlobalService,
    private admobS: AdmobfreeService,
    public alertC : AlertController ) { }

  ngOnInit() {
  }
  async deleteAllHistory() {
    const alert = await this.alertC.create({
      header: 'Confirm Delete All!',
      cssClass: 'myalert',
      message: 'Are you sure you want to <strong>All History Delete</strong> parminatally ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert_button',
          handler: (blah) => {
            this.admobS.rendomAdShow();
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          cssClass: 'alert_button',
          handler: () => {
            this.admobS.showRewardVideo();
            this.gs.userHitstory = [];
            localStorage.removeItem('userData');
            this.gs.presentToast('This data deleted successfully!');
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteOne(i){
    const alert = await this.alertC.create({
      header: 'Confirm Delete!',
      cssClass: 'myalert',
      message: 'Are you sure you want to <strong>delete</strong> parminatally ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert_button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          cssClass: 'alert_button',
          handler: () => {
            for (let ui in this.gs.userHitstory){
              if (ui == i){
                this.admobS.rendomAdShow();
                this.gs.userHitstory.splice(ui, 1);
                this.gs.presentToast('This data deleted successfully!');
                localStorage.setItem('userData', JSON.stringify(this.gs.userHitstory))
              }
            }
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
    
  }

}
