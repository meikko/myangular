import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ShareModule } from '../common/share.module';
import { TestBComponent } from './test-b.component';
import { BcComponent } from './bc/bc.component';
import { TestBRoutingModule } from './testB-routing.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    TestBComponent,
    BcComponent
  ],
  imports: [
    ShareModule,
    TestBRoutingModule,
  ]
})
export class TestBModule { }
