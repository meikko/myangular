import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {TestAComponent} from './test-a.component';
import {AbComponent} from './ab/ab.component';
import {AcComponent} from './ac/ac.component';


const routes: Routes = [
  {
    path: '', component: TestAComponent,
    children: [
      { path: '', redirectTo: 'ab', pathMatch: 'full' },

      { path: 'ab', component: AbComponent, data: { breadcrumb: '栏目1-1' } },
      { path: 'ac', component: AcComponent, data: { breadcrumb: '栏目2-1' } },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestARoutingModule {
}
