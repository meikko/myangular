import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TestBComponent } from './test-b.component';
import { BcComponent } from './bc/bc.component';



const routes: Routes = [
  {
    path: '', component: TestBComponent,
    children: [
      { path: '', redirectTo: 'bc', pathMatch: 'full' },

      { path: 'bc', component: BcComponent, data: { breadcrumb: '栏目1-1' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestBRoutingModule {
}
