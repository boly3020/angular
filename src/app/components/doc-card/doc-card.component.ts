import { Component,Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: ['./doc-card.component.css']
})
export class DocCardComponent implements OnInit {
  @Input() doctorName='';
  @Input() gender='man';
  @Input() id='';
  imgSrc=`../../../assets/${this.gender}.png`;

  @Input() speciality='';
  constructor(private route: ActivatedRoute,private router: Router) {

   }

  ngOnInit(): void {
  }
  docDetails(){
    this.router.navigate(['/docDetails',{id:this.id}])
    console.log(this.id)
  }

}
