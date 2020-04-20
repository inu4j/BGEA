import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noti-content',
  templateUrl: './noti-content.page.html',
  styleUrls: ['./noti-content.page.scss'],
})
export class NotiContentPage implements OnInit {

  data : any;
  product : any;


  constructor( private iab: InAppBrowser,private route: ActivatedRoute, private router : Router) {
    // this.product = [];
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.sendData;
        console.log(this.data);
      }
    })

   }

  ngOnInit() {
  }

  open_link(url: string){
    const browser = this.iab.create(url, '_system');
  }
}
