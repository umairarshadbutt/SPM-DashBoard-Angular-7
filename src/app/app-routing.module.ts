import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { EditTablesComponent } from './tables/edit-tables/edit-tables.component';

const routes: Routes = [
  {path: 'newTask', component: EditTaskComponent},
  {path: 'editTask', component: EditTaskComponent},
  {path: 'newBoard', component: EditTablesComponent},
  {path: 'editBoard', component: EditTablesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
