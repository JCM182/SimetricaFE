import { Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { TasksComponent } from './Views/tasks/tasks.component';
import { TaskAddComponent } from './Views/tasks/task-add/task-add.component';

export const routes: Routes = [
  // { path: '**', component: LoginComponent },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'Tasks',
    component: TasksComponent
  },
  {
    path: 'Tasks-Add',
    component: TaskAddComponent
  },
];
