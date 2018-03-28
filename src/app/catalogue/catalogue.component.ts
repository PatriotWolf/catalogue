import { Component, OnInit } from '@angular/core';
import {GetlistService} from '../services/getlist.service';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
	cards:any=[];
	isValid=false;
  constructor(private listData:GetlistService) {
  	this.listData.getData().subscribe(data =>{
  		console.log(data)
  		this.isValid=true;
  		this.cards=data;
  	});
  	console.log(this.cards)
  }

  ngOnInit() {
  	
  }

}
