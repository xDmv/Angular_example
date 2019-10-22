import { Input, Component, OnInit } from '@angular/core';
// import { DatakeepService } from 'src/app/services/datakeep.service';

@Component({
	selector: 'app-list-comments',
	templateUrl: './list-comments.component.html',
	styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit {

	@Input() List_comments: any;
	stars = [1, 2, 3, 4, 5];

	constructor(
		// private storage : DatakeepService
	) { }

	ngOnInit() {

	}

}
