import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  throwError as observableThrowError,
  Observable,
  observable,
} from 'rxjs';
import { doctor } from './doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorServicesService {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  docId: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.docId = params.get('id');
    });
  }
  getdata(docId: any): Observable<doctor> {
    return this.http.get<doctor>(`http://localhost:3000/doctor/${docId}`);
  }
}
