import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { AdmobfreeService } from 'src/app/services/admobfree.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.page.html',
  styleUrls: ['./famous.page.scss'],
})
export class FamousPage implements OnInit {

  constructor(
    public gs: GlobalService,
    public actionSheet: ActionSheetController,
    public alertC : AlertController,
    private admobS: AdmobfreeService) { }

  ngOnInit() {
  }
  async presentActionSheet(data,index) {
    const actionSheet = await this.actionSheet.create({
      header: 'Saved For ' + data.userName,
      cssClass: 'my-custom-class',
      buttons: [
        {
          cssClass: 'custom_color',
          text: 'View',
          icon: 'eye-outline',
          handler: () => {
            this.gs.saveDateModal(data);
            this.admobS.rendomAdShow();
          }
        },{
          cssClass: 'custom_color',
          text: 'Edit',
          icon: 'brush-outline',
          handler: () => {
            this.admobS.showRewardVideo();
            this.gs.saveDateModal(data);
          }
        },{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        cssClass: 'custom_color',
        handler: () => {
          this.gs.allMyDate.splice(index,1);
          localStorage.setItem('myDate', JSON.stringify(this.gs.allMyDate));
          this.admobS.showRewardVideo();
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          
        }
      }]
    });
    await actionSheet.present();
  }

  async deleteAllDates() {
    const alert = await this.alertC.create({
      header: 'Confirm Delete All!',
      cssClass: 'myalert',
      message: 'Are you sure you want to <strong>All Dates Delete</strong> parminatally ?',
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
            this.gs.allMyDate = [];
            localStorage.removeItem('myDate');
            this.gs.presentToast('This data deleted successfully!');
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
