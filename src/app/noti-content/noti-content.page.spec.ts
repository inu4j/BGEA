import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotiContentPage } from './noti-content.page';

describe('NotiContentPage', () => {
  let component: NotiContentPage;
  let fixture: ComponentFixture<NotiContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotiContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
