import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const approute: Routes=[
    {path: '', redirectTo:'/comment', pathMatch:'full'},
    { path:'comment', component:AppComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(approute)],
    exports: [RouterModule]
})
export class CommentRouting{

}