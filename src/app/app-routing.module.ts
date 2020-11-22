import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'new-grocery',
    loadChildren: () => import('./new-grocery/new-grocery.module').then( m => m.NewGroceryPageModule)
  },
  {
    path: 'edit-grocery/:id',
    loadChildren: () => import('./edit-grocery/edit-grocery.module').then( m => m.EditGroceryPageModule),
    
  },
  // {
  //   path:'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
