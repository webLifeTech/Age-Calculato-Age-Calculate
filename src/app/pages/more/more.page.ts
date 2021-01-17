import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmobfreeService } from 'src/app/services/admobfree.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(
    public gs: GlobalService,
    public router: Router,
    private admobS: AdmobfreeService,) { }

  ngOnInit() {
  }
  
  goInCalculator(){
    this.admobS.showInterstitialAds();
    this.router.navigate(['/tabs/overview'])
  }

  goInHistory(){
    this.admobS.showInterstitialAds();
    this.router.navigate(['/tabs/history'])
  }

}
