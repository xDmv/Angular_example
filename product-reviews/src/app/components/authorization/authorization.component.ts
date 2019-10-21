import { Component, OnInit, Inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { ApiService } from 'src/app/services/api.service';

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

	name: string;
	password: string;
	token: any;
	message: string;

	constructor(
		public dialogRef : MatDialogRef<HeaderComponent>,
		private storage  : DatakeepService,
		public  api      : ApiService,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}


	save() {
		console.log('this.data.btn_text: ', this.data.text_btn);
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

	close() {
		this.dialogRef.close();
	}

	ngOnInit() {
	}

}
