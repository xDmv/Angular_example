import { Injectable } from '@angular/core';
import { ENV } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DatakeepService } from './datakeep.service';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	url: string;

	constructor(
		public http    : HttpClient,
		public storage : DatakeepService
	) {
		this.url = ENV.api.url;
	}

	listProduct() {
		const url = this.url + 'products/';
		const result = this.http.get(url);
		return result;
	}

	addUser(user: string, pass: string) {
		const url = this.url + 'register/';
		const body = { username: user, password: pass };
		const result = this.http.post(url, body);
		return result;
	}

	onLogin(user: string, pass: string) {
		const url = this.url + 'login/';
		const body = { username: user, password: pass };
		const result = this.http.post(url, body);
		return result;
	}

	addReview(rate: number, comment: string, id_product: number) {
		const url = this.url + 'reviews/' + id_product;
		let token = this.storage.token;
		const myHeaders = new HttpHeaders({
			'Authorization': 'Token ' + token,
			'Content-Type': 'application/json'
		});
		const body = {
			"rate": rate,
			"text": comment
		};
		const result = this.http.post(url, body, {headers:myHeaders});
		return result;
	}

	listReviews(id: any) {
		const url = this.url + 'reviews/' + id;
		const result = this.http.get(url);
		return result;
	}
}
