import { Component, OnInit, Inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { ApiService } from 'src/app/services/api.service';
import { ScreenService } from 'src/app/services/screen.service';


export interface DialogData {
	text: string;
	text_btn: string;
}
@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

	name             : string = '';
	password         : string = '';
	name_warning     : string;
	password_warning : string;
	token            : any;
	message          : string;
	screen_size      : number = 0;

	constructor(
		public dialogRef : MatDialogRef<HeaderComponent>,
		private storage  : DatakeepService,
		public  api      : ApiService,
		private screen : ScreenService,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	ngOnInit() {
		this.onScreen();
	}

	onScreen() {
		this.screen_size = this.screen.getRatio();
		console.log('this.screen_size: ', this.screen_size);
	}

	onResize(event) {
		this.onScreen();
	}

	save() {
		this.message = '';
		if(this.onValidate()){
			if(this.data.text_btn === 'Registrate'){
				this.api.addUser(this.name, this.password).subscribe(
					data => {
						console.log('data1:: ', data);
						this.token = data;
						if(this.token.token){
							this.storage.login_name = this.name;
							this.storage.token = this.token.token;
							this.dialogRef.close(this.name);
						}
						if(!this.token.token){
							this.message = this.token.message;
						}
					},
					error => {
						console.log('error1: ', error);
					}
				);
			}
			if(this.data.text_btn === 'Log in'){
				this.api.onLogin(this.name, this.password).subscribe(
					data => {
						console.log('data2:: ', data);
						this.token = data;
						if(this.token.token){
							this.storage.login_name = this.name;
							this.storage.token = this.token.token;
							this.dialogRef.close(this.name);
						}
						if(!this.token.token){
							this.message = this.token.message;
						}
					},
					error => {
						console.log('error2: ', error);
					}
				);
			}
		}
	}

	close() {
		this.dialogRef.close();
	}

	onValidate(){
		let i : number = 0;
		this.name_warning = '';
		this.password_warning = '';
		console.log('length: ', this.name.length);
		if((this.name !== '') && (this.name.length < 51)) {
			i++;
		} else {
			this.name_warning = "must not be empty"
		}
		if(this.password) {
			i++;
		} else {
			this.password_warning = "must not be empty"
		}
		if(i === 2){
			return true;
		} else {
			return false;
		}
	}

}
