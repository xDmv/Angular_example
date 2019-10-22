import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { ENV } from '../environment/environment';

describe('ApiService', () => {
	let httpTestingController: HttpTestingController;
	let service: ApiService;
	let url = ENV.api.url;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ApiService],
			imports: [HttpClientTestingModule]
		});

		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(ApiService);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ApiService]
		});

		service = TestBed.get(ApiService);
		httpTestingController = TestBed.get(HttpTestingController);
	});
	
	it('should have a service instance', () => {
		expect(service).toBeDefined();
	});
	
});
