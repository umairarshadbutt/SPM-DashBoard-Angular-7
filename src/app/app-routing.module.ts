import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { EditTablesComponent } from './tables/edit-tables/edit-tables.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  
  {path: 'newTask', component: EditTaskComponent},
  {path: 'editTask', component: EditTaskComponent , children: [
    { path: '', component: EditTaskComponent },
    { path: ':id', component: TasksComponent },
    { path: ':id/edit', component: EditTaskComponent },
  ] },
  {path: 'newBoard', component: EditTablesComponent},
  {path: 'editBoard', component: EditTablesComponent},
  { path: 'board' , component: TaskDetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
