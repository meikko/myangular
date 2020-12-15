import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonService } from './common/common.service';
import { ErrorComponent } from './common/error/error.component';

import {TestBComponent} from './testB/test-b.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'testA',
    pathMatch: 'full'
  },
  {
    // path 监控 URL
    path: 'testA',
    resolve: { commonService: CommonService },
    loadChildren: () => import('./testA/test-a.module').then(m => m.TestAModule),
    data: { breadcrumb: '栏目1' },
  },
  {
    path: 'testB',
    // loadChildren: () => import('./testB/test-b.module').then(m => m.TestBModule),
    component: TestBComponent,
    data: { breadcrumb: '栏目2' }
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '**', component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
