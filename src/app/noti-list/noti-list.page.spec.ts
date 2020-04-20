import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotiListPage } from './noti-list.page';

describe('NotiListPage', () => {
  let component: NotiListPage;
  let fixture: ComponentFixture<NotiListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotiListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
