import { Component, OnInit } from '@angular/core';
// import { DoctorServicesService } from '../../doctor-services.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css'],
})
export class DocListComponent implements OnInit {
  doctorsData:any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/doctor').subscribe(data => {
        console.log(data);
            this.doctorsData = data;
     });
  }
}
