import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ScreenService {

	constructor() { }

	getRatio() {
		const width  = window.screen.width;
		const height = window.screen.height;

		return height/width
	}

}
