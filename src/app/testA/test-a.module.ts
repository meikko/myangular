import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ShareModule } from '../common/share.module';
import { TestARoutingModule } from './testA-routing.module';
import { TestAComponent } from './test-a.component';
import { AbComponent } from './ab/ab.component';
import { AcComponent } from './ac/ac.component';


registerLocaleData(zh);


@NgModule({
  declarations: [
    TestAComponent,
    AbComponent,
    AcComponent
  ],
  imports: [
    ShareModule,
    TestARoutingModule
  ]
})
export class TestAModule { }
