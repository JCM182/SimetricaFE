import { Injectable } from '@angular/core';
import { Globals } from '../../Cache/Globals';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private _global: Globals,
    private _http: HttpClient
  ) {}

  GetList() {
    return this._http.get(`${this._global.mainUrl}/Task/GetList`);
  }

  Add(newTask: any) {
    return this._http.post(`${this._global.mainUrl}/Task/Add`, newTask);
  }
  Update(Task: any) {
    return this._http.put(`${this._global.mainUrl}/Task/Update`, Task);
  }
}
