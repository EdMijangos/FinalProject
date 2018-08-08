import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveHubsComponent } from './active-hubs.component';

describe('ActiveHubsComponent', () => {
  let component: ActiveHubsComponent;
  let fixture: ComponentFixture<ActiveHubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveHubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveHubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
