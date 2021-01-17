import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Injectable({
  providedIn: 'root'
})
export class AdmobfreeService {

  constructor(private admobFree: AdMobFree) { }

  adMobFreeBanner(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-8376945539001469/1400552284',
      isTesting: false,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare().then((res) => {
      console.log("bannerConfig>>>>>>>>>>>>>>", res);
      }).catch(e => console.log(e));
  }

  showInterstitialAds() {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: 'ca-app-pub-8376945539001469/5702759372',
      isTesting: false,
      autoShow: true
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then((res) => {
      console.log("interstitialConfig>>>>>>>>>>>>>>", res);
        this.admobFree.interstitial.show()
      })
      .catch(e => console.log(e));
  }  
}
