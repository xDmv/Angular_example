import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';


@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		DetailProductComponent,
		HeaderComponent,
		AuthorizationComponent
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
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [AuthorizationComponent]
})
export class AppModule { }
