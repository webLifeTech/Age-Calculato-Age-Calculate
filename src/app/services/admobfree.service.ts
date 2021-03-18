import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Injectable({
  providedIn: 'root'
})
export class AdmobfreeService {
  isIntAdsReady : boolean = false;
  isRewardAdsReady : boolean = false;
  constructor(private admobFree: AdMobFree) { }

  adMobFreeBanner(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-8376945539001469/1400552284',
      isTesting: true,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare().then((res) => {
      console.log("bannerConfig>>>>>>>>>>>>>>", res);
      }).catch(e => console.log(e));
  }

  showInterstitialAds() {
    if(!this.isRewardAdsReady){
      this.isIntAdsReady = true;
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-8376945539001469/5702759372',
        isTesting: true,
        autoShow: true
      };
      this.admobFree.interstitial.config(interstitialConfig);
      this.admobFree.interstitial.prepare().then((res) => {
        console.log("interstitialConfig>>>>>>>>>>>>>>", res);
        this.admobFree.interstitial.show();
        this.isIntAdsReady = false;
        })
        .catch(e => console.log(e));
      }
  }  

  showRewardVideo() {
    if(!this.isIntAdsReady){
      this.isRewardAdsReady = true;
      const rewardVideoConfig: AdMobFreeRewardVideoConfig = {
        id: 'ca-app-pub-8376945539001469/9877808108',
        isTesting: true,
        autoShow: true
      };
      this.admobFree.rewardVideo.config(rewardVideoConfig);
      this.admobFree.rewardVideo.prepare().then((res) => {
        console.log("rewardVideoConfig>>>>>>>>>>>>>>", res);
          this.admobFree.rewardVideo.show();
          this.isRewardAdsReady = false;
        })
        .catch(e => console.log(e));
      }
  }

  rendomAdShow(){
    var reqCount = [1, 2, 3, 4, 5];
    var findFive = reqCount[Math.floor(Math.random() * reqCount.length)];
    if(findFive == 3){
      this.showInterstitialAds();
    }
  }
}
