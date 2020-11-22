import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewGroceryPage } from './new-grocery.page';

describe('NewGroceryPage', () => {
  let component: NewGroceryPage;
  let fixture: ComponentFixture<NewGroceryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroceryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewGroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
