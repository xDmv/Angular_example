import { Component, OnInit } from '@angular/core';
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

	id: any;
	product: any;
	reviews: any;

	constructor(
		public  api      : ApiService,
		private route    : ActivatedRoute,
		private location : Location,
		public  data     : DatakeepService
	) {
		console.log('id:::', this.route.snapshot.paramMap.get('id'));
	}

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id');
		this.api.listReviews(this.id).subscribe(
			data => { this.reviews = data },
			error => { console.log('error: ', error) }
		);
		this.product = this.data.check_product;
	}

	goBack() {
		this.location.back();
	}

}
