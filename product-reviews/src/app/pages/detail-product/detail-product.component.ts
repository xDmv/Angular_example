import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddcommentComponent } from '../../components/addcomment/addcomment.component'
import { MessagesComponent } from '../../components/messages/messages.component';
import { ScreenService } from 'src/app/services/screen.service';


@Component({
	selector: 'app-detail-product',
	templateUrl: './detail-product.component.html',
	styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

	id           : any;
	product      : any;
	product_name : string;
	product_img  : string;
	product_text : any;
	reviews = [];
	reviews_items : any;
	reviews_shown : boolean;
	title         : string;
	screen_size   : number = 0;
	message : string = 'In order to leave a comment you need to log in!';

	constructor(
		public  api      : ApiService,
		private route    : ActivatedRoute,
		private location : Location,
		public  storage  : DatakeepService,
		private dialog   : MatDialog,
		private screen   : ScreenService
	) {}

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.route.snapshot.paramMap.get('id'));
		if(this.storage.check_product){
			this.product = this.storage.check_product;
			this.addDefaultContent(this.product);
		}
		else{
			this.api.listProduct().subscribe(
				data => {
					this.product = data[this.id-1];
					this.addDefaultContent(this.product);
				},
				error => {
					console.log('error: ', error);
				}
			);
		}
		this.reviews_shown = false;
		this.getListReviews();
		this.onScreen();
	}

	onScreen() {
		this.screen_size = this.screen.getRatio();
	}

	onResize(event) {
		this.onScreen();
	}

	goBack() {
		this.location.back();
	}

	addDefaultContent(arr: any){
		this.product_img = arr.img;
		this.product_name = arr.title;
		this.product_text = arr.text;
		this.title = "Details product";
	}

	addComment(): void {
		if(this.storage.token){
			const dialogConfig = new MatDialogConfig();
			dialogConfig.disableClose = true;
			dialogConfig.autoFocus = true;
			dialogConfig.data = {
				id: this.id
			}
			const dialogRef = this.dialog.open(AddcommentComponent, dialogConfig);
			dialogRef.afterClosed().subscribe(
				result => {
					this.getListReviews();
				}
			);
			this.reviews_shown = false;
			
		} else {
			this.openMessages(this.message);
		}
	}

	openMessages(message: string): void{
		const dialogConfig = new MatDialogConfig();
		dialogConfig.data = {
			text: message,
			btn2: false
		}
		const dialogRef = this.dialog.open(MessagesComponent, dialogConfig);
		dialogRef.afterClosed();
	}

	getListReviews(){
		this.api.listReviews(this.id).subscribe(
			data => { 
				let mass : any;
				mass = data;
				for (var i = 1; i <= mass.length; i++){
					this.reviews.push(mass[mass.length - i]);
				}
				this.reviews_shown = true;
			},
			error => { console.log('error: ', error) }
		);
	}

}
