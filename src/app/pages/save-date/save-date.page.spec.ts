import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaveDatePage } from './save-date.page';

describe('SaveDatePage', () => {
  let component: SaveDatePage;
  let fixture: ComponentFixture<SaveDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
