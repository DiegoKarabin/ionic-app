import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../grocery.service';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})



export class Tab4Page  {

  
  grocerys :any=[];

  constructor(private groceryService: GroceryService,private router: Router ) { }

  ngOnInit() {

  
    this.groceryService.getGrocerys().subscribe(res=>this.grocerys=res);
    console.log("iniciado")
   
  }

  ionViewWillEnter(){
   
    this.groceryService.getGrocerys().subscribe(res=>this.grocerys=res);
    
    
  }

  ionViewDidEnter(){
    this.groceryService.getGrocerys().subscribe(res=>this.grocerys=res);
  }


  deleteGrocery(grocery){ 

    this.groceryService.deleteGrocery(grocery.name)
   
    // this.grocerys=this.groceryService.getGrocerys().subscribe(res=>this.grocerys=res);
  
  }

  navigateGrocery(){
    this.router.navigate(['/new-grocery'])
  }

  navigateGroceryEdit(item){
    this.router.navigate(['/edit-grocery',item.name])
  }

 
}
