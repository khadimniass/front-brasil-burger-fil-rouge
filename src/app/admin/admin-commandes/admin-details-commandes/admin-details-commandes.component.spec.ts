import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsCommandesComponent } from './admin-details-commandes.component';

describe('AdminDetailsCommandesComponent', () => {
  let component: AdminDetailsCommandesComponent;
  let fixture: ComponentFixture<AdminDetailsCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailsCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailsCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
