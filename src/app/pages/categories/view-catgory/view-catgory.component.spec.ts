import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatgoryComponent } from './view-catgory.component';

describe('ViewCatgoryComponent', () => {
  let component: ViewCatgoryComponent;
  let fixture: ComponentFixture<ViewCatgoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCatgoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCatgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
