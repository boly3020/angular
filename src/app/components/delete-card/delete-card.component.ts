import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, ParamMap ,Router} from '@angular/router';
@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
  docId:any;
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.docId = params.get('id');
    });
  }
  del(){
    let head = new HttpHeaders({
      'authorization':`${localStorage.getItem('token')}`
    });
    this.http
      .delete<any>(`http://localhost:3000/doctor/${this.docId}`,{headers : head})
      .subscribe((data) => {
        // this.doctorsDetails = data;
        console.log(data);
      });
  }
  cancel(){
    this.router.navigate(['/admin-dash'])
  }
}
