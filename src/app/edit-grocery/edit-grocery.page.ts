import { Component, OnInit } from '@angular/core';
import {GroceryService}  from '../grocery.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Grocery } from '../tab4/grocery.model';

@Component({
  selector: 'app-edit-grocery',
  templateUrl: './edit-grocery.page.html',
  styleUrls: ['./edit-grocery.page.scss'],
})
export class EditGroceryPage implements OnInit {

  grocery:any;


  constructor(private groceryService:GroceryService,private route:ActivatedRoute,private router: Router) {


   }

  ngOnInit() { 

    let id = this.route.snapshot.paramMap.get('id');

    console.log(id)
    this.groceryService.getGrocery(id).subscribe(res=>{
      this.grocery=res
    });
  
  }

  ionViewWillEnter(){
    // this.route.paramMap.subscribe(paramMap=>{
    //   const id=paramMap.get("id")
    //   // this.grocery=this.groceryService.getGrocery(id).subscribe(res=>this.grocery=res);
    //   this.groceryService.getGrocery(id).subscribe(res=>{
        
    //     this.grocery=res
    //     console.log(this.grocery)
      
    //   });
    
    
    // })
  
  }

  ionViewDidEnter(){
    this.route.paramMap.subscribe(paramMap=>{
      const id=paramMap.get("id")
      // this.grocery=this.groceryService.getGrocery(id).subscribe(res=>this.grocery=res);
      this.groceryService.getGrocery(id).subscribe(res=>{
        
        this.grocery=res
        console.log(this.grocery)
      
      });
    
    
    })
    console.log(this.grocery)
  }


  // ionViewDidLoad(){

  //   console.log("Entro")
  //   console.log(this.grocery)
  // }


  editGrocery(name:String,quantity:number,price:number){
  
    this.groceryService.editGrocery(name,quantity,price)
    this.router.navigate(['/tabs/tab4'])
  
  }

}
