import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  doctorsData:any;


  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/doctor').subscribe(data => {
      console.log(data);
          this.doctorsData = data;

   });
  }


}
