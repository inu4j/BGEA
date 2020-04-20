import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import * as firebase from 'firebase';


@Component({
  selector: 'app-noti-list',
  templateUrl: './noti-list.page.html',
  styleUrls: ['./noti-list.page.scss'],
})
export class NotiListPage implements OnInit {

  msgData =[];
  msgRef = firebase.database().ref('push/').orderByChild('/date').limitToLast(50);

  constructor(private router:Router) { 
    this.msgRef.on('value', (snapshot) => {
      console.log ( JSON.stringify(snapshot.val()) );
      this.msgData=[];   
      // this.msgData = snapshotToArray(snapshot);
      snapshot.forEach((childSnapshot) => {
        this.msgData.unshift(childSnapshot.val());
      });
    });

  }
  
  clickItem(itemId){
    console.log ("Click Item : " + itemId);
    var result = this.msgData.filter( function(entry){ return entry.id ===itemId }  );
    console.log (result);

    let navigationExtras: NavigationExtras = {
      state :{
        sendData : result
      }
    }
    this.router.navigate(['noti-content'], navigationExtras);
  }

  ngOnInit() {
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

