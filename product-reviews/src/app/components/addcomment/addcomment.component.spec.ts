import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AddcommentComponent } from './addcomment.component';

describe('AddcommentComponent', () => {
	let component: AddcommentComponent;
	let fixture: ComponentFixture<AddcommentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AddcommentComponent ],
			imports: [
				MatIconModule,
				FormsModule,
				MatDialogModule,
				MatInputModule
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddcommentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
