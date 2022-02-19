import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-admin-contorl-card',
  templateUrl: './admin-contorl-card.component.html',
  styleUrls: ['./admin-contorl-card.component.css']
})
export class AdminContorlCardComponent implements OnInit {
  @Input() doctorName='';
  @Input() gender='man';
  @Input() id='';
  imgSrc=`../../../assets/${this.gender}.png`;

  @Input() speciality='';
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  edit(){
    this.router.navigate(['/docDetails',{id:this.id}])
  }
  deleteD(){
    this.router.navigate(['/docDel',{id:this.id}])
  }
}
