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
import { TaskService } from './tasks/tasks.service';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { HeaderComponent } from './header/header.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    TasksComponent,
    CommentComponent,
    TaskDetailComponent,
    EditTablesComponent,
    EditTaskComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    DragDropModule
  ],
  providers: [ServerService,TableService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
