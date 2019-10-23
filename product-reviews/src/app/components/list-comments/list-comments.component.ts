import { Input, Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
	selector: 'app-list-comments',
	templateUrl: './list-comments.component.html',
	styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit {

	@Input() List_comments: any;
	stars = [1, 2, 3, 4, 5];
	screen_size : number = 0;

	constructor(
		private screen : ScreenService
	) {}

	ngOnInit() {
		this.onScreen();
	}

	onScreen() {
		this.screen_size = this.screen.getRatio();
	}

	onResize(event) {
		this.onScreen();
	}
}
