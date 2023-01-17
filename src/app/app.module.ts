import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'todolist', component: TodoComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
