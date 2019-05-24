import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTablesComponent } from './tables/edit-tables/edit-tables.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';

const routes: Routes = [
  
  {path: 'newTask', component: EditTaskComponent},
  {path: 'newBoard', component: EditTablesComponent},
  {path: 'editBoard', component: EditTablesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
