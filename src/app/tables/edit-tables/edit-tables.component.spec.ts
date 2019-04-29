import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTablesComponent } from './edit-tables.component';

describe('EditTablesComponent', () => {
  let component: EditTablesComponent;
  let fixture: ComponentFixture<EditTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
