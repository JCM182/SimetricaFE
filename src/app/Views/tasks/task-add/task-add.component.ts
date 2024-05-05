import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskService } from '../../../Services/Task/Task.service';
import { BasicModule } from '../../../Modules/basic/basic.module';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [BasicModule],
  providers:[
    TaskService
  ],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {

constructor(
  private taskService: TaskService
) {

}


SaveTask(Task:any) {

  this.taskService.Add(Task).subscribe(
    (data: any) => {

      console.log(data);


    },
    (error) => {
      console.log(error);

    }
  );
}

}
