import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OutLayoutComponent } from './layouts/out-layout/out-layout.component';
import { InLayoutComponent } from './layouts/in-layout/in-layout.component';
import { LoginComponent } from './Views/login/login.component';
import { TokenStorageService } from './Core/Interceptor/TokenStorageService';
import { TasksComponent } from './Views/tasks/tasks.component';

import { Globals } from './Cache/Globals';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TaskService } from './Services/Task/Task.service';
import { TaskAddComponent } from './Views/tasks/task-add/task-add.component';
import { AuthService } from './Services/Auth/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OutLayoutComponent, InLayoutComponent, LoginComponent,TasksComponent, TaskAddComponent,HttpClientModule],
  providers: [   AuthService,
    Globals,
    TaskService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SimetricaFE';


  constructor(
    private token: TokenStorageService,
  ) {

  }



  UserIsLoggedIn(){

    return this.token.userIsLoggedIn();
  }

  signOut(){

    this.token.signOut();
  }


}
