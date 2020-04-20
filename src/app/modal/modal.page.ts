import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;

  constructor(private navParams : NavParams,  private modalController: ModalController) { 
    console.log(navParams.get('title'));
  }

  async dismiss() { 
    this.modalController.dismiss({ 
      'dismissed': true 
    }); 
  }


  ngOnInit() {
  }

  

}
 