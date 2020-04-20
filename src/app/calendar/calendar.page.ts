import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {


  constructor(public modalController: ModalController) {
    
  }

  ngOnInit() {
  }

  modal_data =[ 
    {
    'title': '2020년 1-2월',
    'subtitle': '-목회자동원, <br>-지속적인기도',
    'content': '- 2월부터는 본 전도전략의 핵심은 안드레 되기를 각교회에 소개합니다.<br>- 어린이 전도를 위한 전도프로그램(엔디되기)은 따로 진행되며 이들을 전도자로 훈련시킵니다'
    },
    {
      'title': '2020년 3월',
      'subtitle': '-교회리더쉽동원, <br>-지속적인기도',
      'content': '- 2020 코리아 페스티벌 전도전략의 핵심내용을 소개하는 세미나 (Follow-up / Discipleship Seminar)를 갖습니다.<br>- 이 세미나는 목회자를 위한 것이며, 이를 통해 그리스도의 삶과 전도(CLWC)를 훈련시킬 강사를 모집합니다.'
    },
    {
      'title': '2020년 4-6월',
      'subtitle': '-성도동원, <br>-지속적인기도',
      'content': '- 1박 2일간 진행되는 TTT(Train The Trainers)를 통해 양육자 훈련과정인 그리스도인의 삶과 전도를 가르칠 강사들이 양성됩니다.<br>-미국 빌리그래함전도협회에서 수십년간 제자훈련을 연구해 온 밥 켄디그(Bob Kendig)목사가 인도합니다.'
    },
    {
      'title': '2020년 7-9월',
      'subtitle': '-공동체동원, <br>-지속적인기도',
      'content': '- TTT훈련을 받은 목회자는 성도들을 주1회 2시간씩 3주에 걸쳐 성숙한 그리스도인 및 상담자로 훈련시킵니다. 이 훈련을 받은 성도 중에 카운셀러로 되기 로 결심한 분들은 페스티벌 당일, 또 그 이후에 교회에서 제자훈련 교사로 섬기게 됩니다.'
    },
    {
      'title': '2020년 10월',
      'subtitle': '-페스티벌과 그 이후, <br>-지속적인기도',
      'content': '- 페스티벌에서 예수님을 영접한 사람들은 각 지역의 페스티벌 참여교회에 연결되어 일정기간 동안 제자훈련을 받으며 교회에 정착합니다.'
    }
  ];

  async showModal(no:number) {

    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-modal-css',
      componentProps: this.modal_data[no]
    });
    return await modal.present();
  }


}
