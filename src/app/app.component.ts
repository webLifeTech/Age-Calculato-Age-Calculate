import { Component, ViewChild } from '@angular/core';

import { IonRouterOutlet, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';
import { AdmobfreeService } from './services/admobfree.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private admobS: AdmobfreeService,
    private gs: GlobalService
  ) {
    this.initializeApp();
    // localStorage.clear();
    this.gs.userHitstory = JSON.parse(localStorage.getItem('userData')) != null ? JSON.parse(localStorage.getItem('userData')) : [];
    this.gs.allMyDate = JSON.parse(localStorage.getItem('myDate')) != null ? JSON.parse(localStorage.getItem('myDate')) : [];
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url) {
        // this.platform.exitApp();

        // or if that doesn't work, try
        navigator['app'].exitApp();
      } else {
        // this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#0d2c6c');
      this.splashScreen.hide();
      this.admobS.adMobFreeBanner();
      // let updateURL = new URL("https://play.google.com/store/apps/details?id=com.lifetechs.agecalculator");
    });
  }
}
