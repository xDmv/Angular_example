import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AddcommentComponent } from './components/addcomment/addcomment.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';


@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		DetailProductComponent,
		HeaderComponent,
		AuthorizationComponent,
		AddcommentComponent,
		MessagesComponent,
		ListCommentsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatIconModule,
		MatGridListModule,
		MatButtonModule,
		MatCardModule,
		MatToolbarModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		FormsModule,
		MatInputModule,
		MatPaginatorModule,
		MatTableModule,
		MatSortModule
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [
		AuthorizationComponent, 
		AddcommentComponent, 
		MessagesComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
