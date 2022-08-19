import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesClientComponent } from './commandes-client.component';

describe('CommandesClientComponent', () => {
  let component: CommandesClientComponent;
  let fixture: ComponentFixture<CommandesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
