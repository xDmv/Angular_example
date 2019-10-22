import { Input, Component, OnInit } from '@angular/core';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthorizationComponent } from "../authorization/authorization.component"
import { MessagesComponent } from '../../components/messages/messages.component';

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
		private storage : DatakeepService,
		private dialog  : MatDialog
	) {
	}

	ngOnInit() {
		if(this.MenuTitle === 'List products'){
			this.icon_toggle = false;
		} else {
			this.icon_toggle = true;
		}
		if(this.storage.token){
			this.avtorizate = true;
			this.name = this.storage.login_name;
		} else {
			this.avtorizate = false;
		}
	}

	openAutharizate(title: string, btn_text: string): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.autoFocus = false;
		dialogConfig.data = {
			text: title,
			text_btn: btn_text
		}
		const dialogRef = this.dialog.open(AuthorizationComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(
			result => {
				this.name = result;
				if (this.name) {
					this.avtorizate = true;
				} else {
					this.avtorizate = false;
				}
			}
		);
	}


	onCloseLogin() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.data = {
			text: 'Are you sure you want to sign out?',
			btn2: true
		}
		const dialogRef = this.dialog.open(MessagesComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(
			result => {
				if(result == 'clear'){
					this.storage.login_name = '';
					this.storage.token = '';
					this.avtorizate = false;
				}
			}
		);
	}

}
