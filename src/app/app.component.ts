import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { OneSignal } from "@ionic-native/onesignal/ngx";

var config = {
  apiKey: "AIzaSyCShlxA9ZG03QGCF3krtdmDdih6ChNl-Vo",
  authDomain: "bgea-d6102.firebaseapp.com",
  databaseURL: "https://bgea-d6102.firebaseio.com",
  projectId: "bgea-d6102",
  storageBucket: "bgea-d6102.appspot.com",
  messagingSenderId: "656013132528",
  appId: "1:656013132528:web:84f5c2bf2da1f9b6683835",
  measurementId: "G-8KPBXHSD2F"
};

firebase.initializeApp(config);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal : OneSignal,
    private alertCtrl: AlertController,
    private router : Router,
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
 
      this.statusBar.styleDefault();           
      this.splashScreen.hide();
      if (this.platform.is('cordova')){
        this.setupPush();
      }
    });
  }

  setupPush(){
    // I recommend to put these into your environment.ts
    // this.oneSignal.startInit('YOUR ONESIGNAL APP ID', 'YOUR ANDROID ID');
    this.oneSignal.startInit('0e1d603b-773b-495e-ad6f-4091bb7145cd', '656013132528');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let msg = data.notification.payload.body;
      let title = data.notification.payload.title;
      let additionalData = data.notification.payload.additionalData;

      this.showAlert("알림" ,title, additionalData.task);
    });

    this.oneSignal.endInit();    
  }

  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: '확인',
          handler: () => {
            // E.g: Navigate to a specific screen
            this.router.navigate(['/noti-list']);    

          }
        }
      ]
    })
    alert.present();
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "소개",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "알림",
        url   : "/noti-list",
        icon  : "notifications-outline"
      },
      {
        title : "참여교회신청",
        url   : "/church",
        icon  : "people-outline"
      },
      {
        title : "일정",
        url   : "/calendar",
        icon  : "calendar-outline"
      }
    ]
  }
}
