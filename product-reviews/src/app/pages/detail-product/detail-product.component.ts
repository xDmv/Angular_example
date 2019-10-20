import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { DatakeepService } from 'src/app/services/datakeep.service';


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
	reviews      : any;
	title        : string;

	constructor(
		public  api      : ApiService,
		private route    : ActivatedRoute,
		private location : Location,
		public  data     : DatakeepService
	) {}

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.route.snapshot.paramMap.get('id'));
		if(this.data.check_product){
			this.product = this.data.check_product;
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
		this.api.listReviews(this.id).subscribe(
			data => { this.reviews = data },
			error => { console.log('error: ', error) }
		);
	}

	goBack() {
		this.location.back();
	}

	addDefaultContent(arr: any){
		this.product_img = arr.img;
		this.product_name = arr.title;
		this.product_text = arr.text;
		this.title = "Description for " + this.product_name;
	}

}
