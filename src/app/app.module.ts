import { TableService } from './tables/table.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import {TasksComponent} from './tasks/tasks.component';
import {HttpModule} from '@angular/http';
import { ServerService } from './server.service';
import { CommentComponent } from './comment/comment.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { EditTablesComponent } from './tables/edit-tables/edit-tables.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    TasksComponent,
    CommentComponent,
    TaskDetailComponent,
    EditTablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ServerService,TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
