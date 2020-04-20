import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import * as firebase from 'firebase';


// var config = {
//   apiKey: "AIzaSyCShlxA9ZG03QGCF3krtdmDdih6ChNl-Vo",
//   authDomain: "bgea-d6102.firebaseapp.com",
//   databaseURL: "https://bgea-d6102.firebaseio.com",
//   projectId: "bgea-d6102",
//   storageBucket: "bgea-d6102.appspot.com",
//   messagingSenderId: "656013132528",
//   appId: "1:656013132528:web:84f5c2bf2da1f9b6683835",
//   measurementId: "G-8KPBXHSD2F"
// };

// firebase.initializeApp(config);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url: string;
  title: string;
  churchCount : number;
  churchData =[];
  langRef = firebase.database().ref('/church/');

  constructor( private iab: InAppBrowser, public platform: Platform ) {

    this.platform.ready().then(() =>{      
 
    });

    this.langRef.on('value', (snapshot) => {
      console.log ( JSON.stringify(snapshot.val()) );
      this.churchData=[];   
      this.churchData = snapshotToArray(snapshot);
      this.churchCount = this.churchData.length;
    });
  
  }

  click_url(url: string){
    const browser = this.iab.create(url, '_system');
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};


