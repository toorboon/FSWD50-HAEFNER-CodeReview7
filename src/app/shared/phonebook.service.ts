import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {
	numbersList: AngularFireList<any>;

	form = new FormGroup({
		$key:new FormControl(null),
		firstname:new FormControl(''),
		lastname:new FormControl('', Validators.required),
		number:new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('[0-9]*')]),
		important:new FormControl(false)
	});

  constructor(private firebase: AngularFireDatabase) { }

  	getNumbers(){
                 this.numbersList = this.firebase.list('numbers');
                 return this.numbersList.snapshotChanges();
    }

 	insertNumbers(numbers){
        this.numbersList.push({
                 firstname: numbers.firstname,
                 lastname: numbers.lastname,
                 number: numbers.number,
                 important: numbers.important
        });
    }

    deleteAllNumbers(){
		this.numbersList.remove();
    }

    deleteSingleNumber(key: string){
    	this.numbersList.remove(key);
	}	

	populateForm(numbers){
    	this.form.setValue(numbers);
 	}

 	updateNumbers(numbers){
    	this.numbersList.update(numbers.$key,{
			firstname: numbers.firstname,
			lastname: numbers.lastname,
			number: numbers.number,
			important: numbers.important,
        });
    }
}
