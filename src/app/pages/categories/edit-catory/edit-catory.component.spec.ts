import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatoryComponent } from './edit-catory.component';

describe('EditCatoryComponent', () => {
  let component: EditCatoryComponent;
  let fixture: ComponentFixture<EditCatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
