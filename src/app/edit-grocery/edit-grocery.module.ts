import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGroceryPageRoutingModule } from './edit-grocery-routing.module';

import { EditGroceryPage } from './edit-grocery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditGroceryPageRoutingModule
  ],
  declarations: [EditGroceryPage]
})
export class EditGroceryPageModule {}
