import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDetailComponent } from './tasks-detail.component';

describe('TasksDetailComponent', () => {
  let component: TasksDetailComponent;
  let fixture: ComponentFixture<TasksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
