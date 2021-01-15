import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesktopComponent } from './add-desktop.component';

describe('AddDesktopComponent', () => {
  let component: AddDesktopComponent;
  let fixture: ComponentFixture<AddDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
