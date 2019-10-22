import { Component, OnInit, Inject } from '@angular/core';
import { DetailProductComponent } from "../../pages/detail-product/detail-product.component"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

export interface DialogData {
	id: number;
}
@Component({
	selector: 'app-addcomment',
	templateUrl: './addcomment.component.html',
	styleUrls: ['./addcomment.component.scss']
})
export class AddcommentComponent implements OnInit {

	title      : string = 'Please add a comment';
	product_id : number;
	rate       : number = 0;
	rate_shown : boolean = false;
	rate_fix   : boolean = true;
	comment    : any;

	constructor(
		public dialogRef : MatDialogRef<DetailProductComponent>,
		public api       : ApiService,
		@Inject(MAT_DIALOG_DATA) public dataparam: DialogData
	) {
		this.product_id = dataparam.id;
	}

	ngOnInit() {
	}

	onAddComent() {
		this.api.addReview(this.rate, this.comment, this.product_id).subscribe(
			data => {
				console.log('data: ', data);
				this.rate = 0;
				this.comment = '';
			},
			error => { console.log('error: ', error); }
		);
		this.dialogRef.close();
	}

	onClose() {
		this.rate = 0;
		this.comment = '';
		this.dialogRef.close();
	}

	onRate(star: number, fixed: boolean) {
		if (this.rate_fix === true){
			if((fixed === true) ) {
				this.rate = star;
				this.rate_shown = true;
				this.rate_fix = false;
			}
			if((!this.rate_shown)) {

				this.rate = star;
			}
		}
	}
}
