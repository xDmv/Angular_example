import { Injectable } from '@angular/core';
import { ENV } from '../environment/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	url: string;

	constructor(
		public http: HttpClient
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
		var params = new HttpParams();
		params = params.append('rate', String(rate));
		params = params.append('text', comment);
		const result = this.http.post(url, {params: params});
		// const body = { "rate": rate, "text": comment, "username": "sd" };
		// const result = this.http.post(url, body);
		return result;
	}

	listReviews(id: any) {
		const url = this.url + 'reviews/' + id;
		const result = this.http.get(url);
		return result;
	}
}
