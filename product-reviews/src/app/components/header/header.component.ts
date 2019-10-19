import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	avtorizate : boolean = false;
	name       : string = 'user';
	token      : any;

	constructor() { }

	ngOnInit() {
	}

}
