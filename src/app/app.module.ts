import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';
import { PhonebookFormComponent } from './phonebook-form/phonebook-form.component';
import { PhonebookService } from "./shared/phonebook.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    ImportantNumbersComponent,
    PhonebookComponent,
    PhonebookListComponent,
    PhonebookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [PhonebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
