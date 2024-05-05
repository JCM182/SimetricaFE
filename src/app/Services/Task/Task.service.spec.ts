/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskService } from './Task.service';
import { Globals } from '../../Cache/Globals';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Service: Task', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService,Globals,HttpClient,HttpHandler]
    });
  });

  it('should ...', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
