import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DefaultSumDartKeyboardComponent} from './default-sum-dart-keyboard.component';

describe('DefaultSumDartKeyboardComponent', () => {
  let component: DefaultSumDartKeyboardComponent;
  let fixture: ComponentFixture<DefaultSumDartKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSumDartKeyboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSumDartKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
