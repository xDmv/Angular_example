import { Input, Component, OnInit } from '@angular/core';
import { DatakeepService } from 'src/app/services/datakeep.service';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Input() MenuTitle: string;

	avtorizate  : boolean;
	name        : string;
	icon_toggle : boolean;

	constructor(
		private data: DatakeepService
	) { }

	ngOnInit() {
		if(this.MenuTitle === 'List products'){
			this.icon_toggle = false;
		} else {
			this.icon_toggle = true;
		}
		if(this.data.token){
			this.avtorizate = true;
			this.name = this.data.login_name;
		} else {
			this.avtorizate = false;
		}
	}

}
