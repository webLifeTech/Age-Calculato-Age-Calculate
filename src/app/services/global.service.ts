import { Injectable } from '@angular/core';
import { AlertController, ModalController,PopoverController, ToastController } from '@ionic/angular';
import { PopoverComponent } from '../component/popover/popover.component';
import { SaveDatePage } from '../pages/save-date/save-date.page';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Market } from '@ionic-native/market/ngx';
import * as moment from 'moment';
import { AdmobfreeService } from './admobfree.service';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // appLogoUrl: any = 'assets/AppLogo.webp';
  // globali
  userHitstory : any = [];
  dayStart: any = new Date('01/01/2001').toISOString();
  CommanDate: any = new Date('01/01/2001').toISOString();
  dayEnd: any = new Date().toISOString();

  ageYears : any = '00';
  ageMonths : any = '00';
  ageDays : any = '00';
  
  totleYears : any = '00';
  totalMonths : any = '00';
  totleWeeks : any = '00';
  totleDays : any = '00';
  totleHours : any = '00';
  totleMinutes : any = '00';
  totleSeconds : any = '00';

  allMyDate : any = [];
  appLogo = "assets/logo.png"

  constructor(
  	public mc : ModalController,
    public tc: ToastController,
    private socialSharing: SocialSharing,
    private market: Market,
    private admobS: AdmobfreeService,
    public alertC: AlertController,
    public pc: PopoverController) {
    this.ageCalculate();
  }

  async presentPopover(ev: any) {
    const popover = await this.pc.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async saveDateModal(data) {
    const modal = await this.mc.create({
      component: SaveDatePage,
      componentProps: {
        result: data
      },
      cssClass: 'my-custom-class'
    });
    await modal.present();
  }
  dismissModal() {
    this.mc.dismiss();
  }

  ageCalculate(){
    this.totleDays = '';
    this.totalMonths = '';
    this.totleYears = '';

    this.totleYears = moment(this.dayEnd).diff(this.dayStart, 'years');
    this.totalMonths = moment(this.dayEnd).diff(this.dayStart, 'months');
    this.totleDays = moment(this.dayEnd).diff(this.dayStart, 'days');
    this.totleWeeks = Math.round((this.totleDays / 7));
    this.totleHours = Math.round((this.totleDays * 24));
    this.totleMinutes = Math.round((this.totleHours * 60));
    this.totleSeconds = Math.round((this.totleMinutes * 60));
    this.diff_year_month_day();
  }

  diff_year_month_day() {
    var age = moment.duration(moment(this.dayEnd).diff(this.dayStart));
    console.log("age>>>>",age);
    
    // var ffffffffff = moment.duration(moment(this.dayStart).diff(this.dayEnd));
    
    var yearsBetween = age.years();
    var monthsBetween = age.months();
    var daysBetween = age.days();
    this.ageYears = yearsBetween;
    this.ageMonths = monthsBetween;
    this.ageDays = daysBetween;

    let body = {
      start_date: this.dayStart,
      end_date: this.dayEnd,
      ageYears : this.ageYears,
      ageMonths : this.ageMonths,
      ageDays : this.ageDays,
      totleYears: this.totleYears,
      totleDays: this.totleDays,
      totleWeeks: this.totleWeeks,
      totleHours: this.totleHours,
      totleMinutes: this.totleMinutes,
      totleSeconds: this.totleSeconds
    }
    
    if (this.dayStart != this.CommanDate){
      this.CommanDate = this.dayStart;
      this.presentToast('Your Celculation is ready.');
      this.agePopup(this.ageYears)
      this.userHitstory.push(body);
      // var result = this.daysUntil(this.dayStart);
      // console.log("result>>>>>>",result);
      localStorage.setItem('userData', JSON.stringify(this.userHitstory))
    }
  }

  ageClear(){
    this.admobS.showInterstitialAds();
    this.dayStart = new Date('01/01/2001').toISOString();
    this.dayEnd = new Date().toISOString();
    this.totleYears = '00';
    this.totalMonths = '00';
    this.totleDays = '00';
    this.totleWeeks = '00';
    this.totleHours = '00';
    this.totleMinutes = '00';
    this.totleSeconds = '00';
    this.ageYears = '00';
    this.ageMonths = '00';
    this.ageDays = '00';
    this.presentToast('Can you again age Celculation')
    
  }

  // daysUntil(date) {
  //   var birthday = moment(date);
  //   var today = moment().format("YYYY-MM-DD");
  //   var age = moment(today).diff(birthday, 'years');
  //   moment(age).format("YYYY-MM-DD");
  //   console.log('person age', age);

  //   var nextBirthday = moment(birthday).add(age, 'years');
  //   moment(nextBirthday).format("YYYY-MM-DD");
  //   if (nextBirthday.isSame(today)) {
  //     return 'Cake!!';
  //   } else {
  //     nextBirthday = moment(birthday).add(age + 1, 'years');
  //     console.log("nextBirthday>>>>", nextBirthday.days());
      
  //     return 'Days until next birthday' + ' ' + nextBirthday.diff(today, 'month') + ' '
  //       + nextBirthday.diff(today, 'weeks') + ' ' +nextBirthday.days();
       
  //   }
  // }



  appShare(){
    
    this.socialSharing.share(
      'Age Calculator - My Age Calculate Downlaod, Share and Give 5 Stare Review Thank you :',
      'Thank you',
      'https://play-lh.googleusercontent.com/b7QhtzmqTd8smc826sHkhhpOMajxz3rP-QSHNO-Kc3HsMeSvC0R7QY0lTZGo-QWoKp0=s360-rw',
      'https://play.google.com/store/apps/details?id=com.lifetechs.agecalculator'
      ).then((res) => {
       
      // Success!
    }).catch((error) => {
      // Error!
    })
  }

  appRate(){
    this.market.open('com.lifetechs.agecalculator');
  }

  async presentToast(message) {
    const toast = await this.tc.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  async agePopup(ageyears) {
    const alert = await this.alertC.create({
      header: 'Congratulations!',
      cssClass: 'myalert',
      subHeader: 'My Age is '+ ageyears +' Year',
      buttons: [
        {
          text: 'View More',
          role: 'cancel',
          cssClass: 'alert_button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }
}
