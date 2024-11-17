import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DownComponent} from './down.component';

describe('DownComponent', () => {
  let component: DownComponent;
  let fixture: ComponentFixture<DownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
