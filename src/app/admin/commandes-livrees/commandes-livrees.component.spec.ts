import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesLivreesComponent } from './commandes-livrees.component';

describe('CommandesLivreesComponent', () => {
  let component: CommandesLivreesComponent;
  let fixture: ComponentFixture<CommandesLivreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesLivreesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesLivreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
