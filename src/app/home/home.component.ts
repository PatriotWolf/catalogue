import { Component, OnInit } from '@angular/core';
import {GetlistService} from '../services/getlist.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	images: Array<string>;;

  constructor() { }

  ngOnInit() {
  	this.images=["http://crizaze.com/wp-content/uploads/2014/12/modeling-agency.jpg","https://i.ytimg.com/vi/sDf0LKR82-4/maxresdefault.jpg","http://jonvilma.com/images/model-18.jpg"]
  }

}
