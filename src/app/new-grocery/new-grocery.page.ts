import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../grocery.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-new-grocery',
  templateUrl: './new-grocery.page.html',
  styleUrls: ['./new-grocery.page.scss'],
})
export class NewGroceryPage implements OnInit {

  constructor(private groceryService: GroceryService,private router: Router ) { }

  ngOnInit() {
  }

  async addNewGrocery(name,quantity,price){

    await this.groceryService.addGrocery(name.value,quantity.value,price.value).toPromise()

    this.router.navigate(['/tabs/tab4'])
  
  }

  
}



