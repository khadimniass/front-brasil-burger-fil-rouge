import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCommandesComponent } from './row-commandes.component';

describe('RowCommandesComponent', () => {
  let component: RowCommandesComponent;
  let fixture: ComponentFixture<RowCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
