import { Component, OnInit } from '@angular/core';
import { PhonebookService  } from "../shared/phonebook.service";

@Component({
  selector: 'app-important-numbers',
  templateUrl: './important-numbers.component.html',
  styleUrls: ['./important-numbers.component.sass']
})
export class ImportantNumbersComponent implements OnInit {
	importantNumbersArray =[];
	searchText:string = "";

  constructor(private phonebookService: PhonebookService) { }

  ngOnInit() {
  this.phonebookService.getNumbers().subscribe(
	  		(list) => {
			        this.importantNumbersArray = list.map( (item) => {
			            return {
		                    $key : item.key,
		                    ...item.payload.val()
		                }
			        })
			 	});
  }

  filterCondition(numbers){
   	if (numbers.important){	
   		return (numbers.firstname.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) ||
   		(numbers.lastname.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) ||
   		(numbers.number.indexOf(this.searchText) != -1)
	}   		
	}

}
