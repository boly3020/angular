import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  data: any = [];
  result: any = [];
  loginForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],

    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    // const headers = new HttpHeaders();
    // this.data = JSON.stringify(this.loginForm.value);
    // headers.append('Content-Type', 'application/json');
    // const { username: username, password: password } = this.data;

    this.result = JSON.stringify({ username: 'admin', password: 'admin' });
    console.log(this.loginForm.value);
    let head = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .post('http://localhost:3000/admin/login', this.loginForm.value, {
        headers: head,
      })

      .subscribe((data: any) => {
        if(data['token']){
        localStorage.setItem('token', data['token']);
        this.router.navigate(['/admin-dash']);
      }else{
        console.log("not admin")
      }});
  }
}
