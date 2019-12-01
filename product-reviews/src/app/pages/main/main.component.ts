import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { ScreenService } from 'src/app/services/screen.service';
import { Observable } from 'rxjs';
import { Product } from "../../interfaces/product";
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
	selector    : 'app-main',
	templateUrl : './main.component.html',
	styleUrls   : ['./main.component.scss']
})
export class MainComponent implements OnInit {

	title       : string;
	products    : Observable<Object>;
	product     : any;
	shown       : boolean = false;
	screen_size : number = 0;

	dataSource = new MatTableDataSource<Product>();
	displayedColumns: string[] = ['id', 'title', 'img', 'text', 'button'];
	@ViewChild(MatPaginator, { static: false } ) paginator: MatPaginator;
	@ViewChild(MatSort, { static: false }) sort: MatSort;

	constructor(
		public  api    : ApiService,
		private router : Router,
		public  data   : DatakeepService,
		private screen : ScreenService
	) {
	}

	ngOnInit() {
		this.title = "List products";
		this.products = this.api.listProduct();
		this.shown = true;
		this.products.subscribe(
			(data) => {
				this.product = data;
				this.dataSource = new MatTableDataSource<Product>(this.product);
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
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

	onChoeseProduct(product: any) {
		this.data.check_product = product;
		this.router.navigate(['/product/' + product.id]);
	}

}
