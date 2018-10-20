import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { PhonebookComponent } from './phonebook/phonebook.component';

const routes: Routes = [
	{
	   path: '', component: ContentComponent
	},
	{
	   path: 'importantnumbers', component: ImportantNumbersComponent
	},
	{
	   path: 'phonebook', component: PhonebookComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
