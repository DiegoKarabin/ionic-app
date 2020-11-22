import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGroceryPage } from './new-grocery.page';

const routes: Routes = [
  {
    path: '',
    component: NewGroceryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewGroceryPageRoutingModule {}
