import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
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
          }
        },{
          cssClass: 'custom_color',
          text: 'Edit',
          icon: 'brush-outline',
          handler: () => {
            this.admobS.showInterstitialAds();
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
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.admobS.showInterstitialAds();
        }
      }]
    });
    await actionSheet.present();
  }


}
