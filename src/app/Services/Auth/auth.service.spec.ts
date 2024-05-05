import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Globals } from '../../Cache/Globals';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService,Globals,HttpClient,HttpHandler]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
