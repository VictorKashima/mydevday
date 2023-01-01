import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydevdayFormComponent } from './mydevday-form.component';

describe('MydevdayFormComponent', () => {
  let component: MydevdayFormComponent;
  let fixture: ComponentFixture<MydevdayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydevdayFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydevdayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
