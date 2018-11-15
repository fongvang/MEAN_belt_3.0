import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayComponent,
    NewComponent,
    EditComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
