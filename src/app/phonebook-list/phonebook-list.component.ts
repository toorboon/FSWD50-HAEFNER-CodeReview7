import { Component, OnInit } from '@angular/core';
import { PhonebookService  } from "../shared/phonebook.service";

@Component({
  selector: 'app-phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrls: ['./phonebook-list.component.sass']
})
export class PhonebookListComponent implements OnInit {
	numbersArray =[];
	showDeletedMessage : boolean;
	searchText:string = "";

  constructor(private phonebookService: PhonebookService) { }

  ngOnInit() {
  	this.phonebookService.getNumbers().subscribe(
	  		(list) => {
			        this.numbersArray = list.map( (item) => {
			            return {
		                    $key : item.key,
		                    ...item.payload.val()
		                }
			        })
			 	});
  }

  	onDelete(){
	    if(confirm("Are you sure you want to delete all records in the database?")){
 			if(confirm("This is NOT reversable!!! Are you sure to delete the whole database?")){
				this.phonebookService.deleteAllNumbers();
				this.showDeletedMessage = true;
	  			setTimeout(()=> this.showDeletedMessage=false , 3000)
	  		}
	    }
	}

	onDeleteSingle(key){
    	if(confirm("Are you sure you want to delete this record?")){
    		this.phonebookService.deleteSingleNumber(key)
    		this.showDeletedMessage = true;
       		setTimeout(()=> this.showDeletedMessage=false , 3000)
    	}
	}

	filterCondition(numbers){
   		return (numbers.firstname.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) ||
   		(numbers.lastname.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) ||
   		(numbers.number.indexOf(this.searchText) != -1) ||
   		(String(numbers.important).indexOf(this.searchText) != -1)
	   		
	}

}
