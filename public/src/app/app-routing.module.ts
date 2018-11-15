import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
	{path: "restaurants", component: HomeComponent},
	{path: "restaurants/new", component: NewComponent},
	{path: "restaurants/:id", component: DisplayComponent},
	{path: "restaurants/edit/:id", component: EditComponent},
	{path: "restaurants/review/:id", component: ReviewComponent},
	{path: "", pathMatch: "full", redirectTo: "restaurants"},
	{path: "**", pathMatch: "full", redirectTo: "restaurants"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
