import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTablesComponent } from './tables/edit-tables/edit-tables.component';

const routes: Routes = [
  {path:'addTask', component:EditTablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
