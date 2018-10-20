import { Component, OnInit } from '@angular/core';
import { PhonebookService  } from "../shared/phonebook.service";

@Component({
  selector: 'app-phonebook-form',
  templateUrl: './phonebook-form.component.html',
  styleUrls: ['./phonebook-form.component.sass']
})
export class PhonebookFormComponent implements OnInit {

	submitted: boolean;
	formControls =this.phonebookService.form.controls;
	showSuccessMessage: boolean;

  constructor(private phonebookService: PhonebookService) { }

  ngOnInit() {
    this.phonebookService.toggleForm();
  }

  onSubmit(){
   this.submitted = true;
   if(this.phonebookService.form.valid){
        if(this.phonebookService.form.get("$key").value == null ){ // here we will call the insert function and we passed an object containing details of numbers from the form and .value to bring the values from the input boxes including $key                   
        	this.phonebookService.insertNumbers(this.phonebookService.form.value);
   		}else {
   			this.phonebookService.updateNumbers(this.phonebookService.form.value);
        }
		this.showSuccessMessage = true;// we set the property to true
		setTimeout(()=>this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
    this.submitted = false;
    this.phonebookService.form.reset();// the form will be empty after new record created
    this.phonebookService.toggleForm();      
 	  }
  }

  onCancel(){
    this.phonebookService.toggleForm();
    this.phonebookService.form.reset();
  }
}
