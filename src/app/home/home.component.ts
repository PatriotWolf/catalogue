import { Component, OnInit } from '@angular/core';
//import {GetlistService} from '../services/getlist.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	images: Array<string>;;
	card:any;
  constructor(private http:HttpClient) { this.getData().subscribe(data => {
            this.card=data
        });}

  ngOnInit() {
  	this.images=["http://crizaze.com/wp-content/uploads/2014/12/modeling-agency.jpg","https://i.ytimg.com/vi/sDf0LKR82-4/maxresdefault.jpg","http://jonvilma.com/images/model-18.jpg"]
  }
  getData(){
  	return this.http.get("https://makeup-api.herokuapp.com/api/v1/products.json")

  }
}
