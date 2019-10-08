import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfounedComponent } from './pagenotfouned.component';

describe('PagenotfounedComponent', () => {
  let component: PagenotfounedComponent;
  let fixture: ComponentFixture<PagenotfounedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfounedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfounedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
