import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TaskService } from '../../Services/Task/Task.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Globals } from '../../Cache/Globals';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatPaginatorModule],
  providers:[TaskService,Globals],

  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  public TaskDTO: any[] = [];
  displayedColumns: string[] = [
    'description',
    'creationDate',
    'updateDate',

  ];

  dataSource = new MatTableDataSource<any>(this.TaskDTO);

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  /**
   *
   */
  constructor(
    private taskService: TaskService,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this.GetTask();
  }

  GoToAdd(){
    this._router.navigate(['/Tasks-Add'])
  }

  GetTask() {

    this.taskService.GetList().subscribe(
      (data: any) => {

        console.log(data);

        this.TaskDTO = data;
        this.dataSource = new MatTableDataSource<any>(this.TaskDTO);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);

      }
    );
  }
}
