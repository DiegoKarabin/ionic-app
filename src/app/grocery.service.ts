import { Injectable } from '@angular/core';
import { Grocery } from './tab4/grocery.model';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {


  

  // private grocerys:Grocery[]=[

  //   {
  //     name:"Soy Milk",
  //     quantity:4, 
  //     price:12
  //   },
  //   {
  //     name:"Gluten Free Bread",
  //     quantity:8,
  //     price:30
  //   },
  //   {
  //     name:"Grass-Fed Beef",
  //     quantity:12,
  //     price:18
  //   }

  // ]

  private grocerys:any=[];
 
  getGrocerys(): Observable<any> {

    
      return this.http.get('http://localhost:3000/grocerys');

  }

  // getGrocerys(){

  //   this.http.get('http://localhost:3000/grocerys').subscribe(res=>{

  //     this.grocerys=res

  //     // console.log(this.grocerys)

  //     return this.grocerys;
    
  //   });

    
  //     // return this.http.get('http://localhost:3000/grocerys').subscribe(res=>this.grocerys=res);

  // }

  getGrocery(groceryName) :Observable<any>{

    

    // return {
    //   ...this.grocerys.find(grocery=>{
    //     return groceryName === grocery.name
    //   })
    // }

    return this.http.get('http://localhost:3000/grocerys/'+groceryName);
  }


  addGrocery(name:String,quantity:Number,price:Number):Observable<any>{

    return this.http.post('http://localhost:3000/grocerys/',JSON.stringify({
      "name":name,
      "quantity":quantity,
      "price":price
    }),{
      headers:new HttpHeaders({ 'content-type': 'application/json' })
    })
    
    // .subscribe(data => {
    //   console.log(data);
    //  }, error => {
    //   console.log(error);
    // });

  

  }

  deleteGrocery(name:string){

    this.grocerys=this.grocerys.filter(grocery =>{
      return grocery.name !== name
    })


    this.http.delete('http://localhost:3000/grocerys/:id');

  }

  editGrocery(name:String,quantity,price){

    this.grocerys=this.grocerys.map(grocery =>{

      if(grocery.name === name ){

        console.log("entro")
          grocery.price=price
          grocery.quantity=quantity

      }

      console.log(grocery)

      return grocery

    })

    // console.log(this.grocerys)

  }


  constructor(private http: HttpClient) { }
}
