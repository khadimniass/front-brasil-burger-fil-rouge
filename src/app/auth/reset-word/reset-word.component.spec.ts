import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetWordComponent } from './reset-word.component';

describe('ResetWordComponent', () => {
  let component: ResetWordComponent;
  let fixture: ComponentFixture<ResetWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
