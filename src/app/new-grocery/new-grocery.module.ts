import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGroceryPageRoutingModule } from './new-grocery-routing.module';

import { NewGroceryPage } from './new-grocery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewGroceryPageRoutingModule
  ],
  declarations: [NewGroceryPage]
})
export class NewGroceryPageModule {}
