import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import {GetlistService} from '../services/getlist.service';
import {NgbModule,NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  public transform(values: any[], filter: string): any[] {
    
    
    return values.filter(v =>{ v.ori=(v.price*0.05)+ +v.price; v.buyQuantity=[1,2,3,4,5,6,7,8,9,10];return (v.price>=25&&v.price<=200)});
  }
}

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
	cards:any=[];
	isValid=false;
	selectedData:any;
  constructor(private listData:GetlistService,private modalService: NgbModal) {
  	this.listData.getData().subscribe(data =>{
  		console.log(data)
  		this.isValid=true;
  		this.cards=data;
  	});
  	console.log(this.cards)
  }

  ngOnInit() {
  	
  }
  buy(elem,a,b)
  {	this.selectedData=a;
  	this.selectedData.quantityOd=b;
  	console.log(this.selectedData)
  	this.modalService.open(elem,{size:"lg"}).result.then((result) => {})
  }
}
