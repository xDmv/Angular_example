import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { ScreenService } from 'src/app/services/screen.service';


@Component({
	selector    : 'app-main',
	templateUrl : './main.component.html',
	styleUrls   : ['./main.component.scss']
})
export class MainComponent implements OnInit {

	data$;

	title    : string;
	products : any;
	product  : any;
	shown    : boolean = false;

	cols        : number = 1;
	hei         : string = '1:1';
	screen_size : number = 0;

	constructor(
		public  api    : ApiService,
		private router : Router,
		public  data   : DatakeepService,
		private screen : ScreenService
	) {

	}

	ngOnInit() {
		this.title = "List products";
		this.data$ = this.api.listProduct().subscribe(
			data => {
				this.products = data;
				this.shown = true;
			},
			error => {
				console.log('error: ', error);
			}
		);
		this.onScreen();
	}

	onScreen() {
		this.screen_size = this.screen.getRatio();
	}

	onResize(event) {
		this.onScreen();
	}

	onGridList() {
		if (this.cols == 2) {
			this.cols = 1;
		} else {
			this.cols = 2;
			this.hei = "2:1";
		}
	}

	onChoeseProduct(product: any) {
		this.data.check_product = product;
		this.router.navigate(['/product/' + product.id]);
	}

}
