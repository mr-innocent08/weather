import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNavComponent } from './mini-nav.component';

describe('MiniNavComponent', () => {
  let component: MiniNavComponent;
  let fixture: ComponentFixture<MiniNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniNavComponent]
    });
    fixture = TestBed.createComponent(MiniNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
