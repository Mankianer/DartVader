import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DefaultSingleDartKeyboardComponent} from './default-single-dart-keyboard.component';

describe('DefaultSingleDartKeyboardComponent', () => {
  let component: DefaultSingleDartKeyboardComponent;
  let fixture: ComponentFixture<DefaultSingleDartKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSingleDartKeyboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSingleDartKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
