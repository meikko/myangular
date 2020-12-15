import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

import {
  PlusSquareTwoTone, ArrowUpOutline, ArrowDownOutline, FileSearchOutline, FileExcelTwoTone, AreaChartOutline, MailOutline, EditFill,
  ClusterOutline, SolutionOutline, ContactsOutline, HistoryOutline, ShareAltOutline, BarChartOutline, CalendarOutline, FilterOutline,
  ToolOutline, SettingOutline, FileTextOutline, VerticalAlignTopOutline, PlusOutline, InboxOutline, PlusCircleOutline, DeleteOutline,
  MobileTwoTone, PhoneTwoTone, RedoOutline
} from '@ant-design/icons-angular/icons';
import { ErrorComponent } from './error/error.component';

const icons: IconDefinition[] = [
  PlusSquareTwoTone, ArrowUpOutline, FileSearchOutline, FileExcelTwoTone, AreaChartOutline, SettingOutline, FileTextOutline, MailOutline,
  EditFill, ArrowDownOutline, ClusterOutline, SolutionOutline, ContactsOutline, HistoryOutline, ShareAltOutline, BarChartOutline,
  CalendarOutline, FilterOutline, ToolOutline, VerticalAlignTopOutline, PlusOutline, InboxOutline, PlusCircleOutline, DeleteOutline,
  MobileTwoTone, PhoneTwoTone, RedoOutline,
];

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    NzIconModule.forChild(icons)
  ],
  exports: [
    CommonModule,
    NzGridModule,
    FormsModule,
    HttpClientModule,
    NzAvatarModule,
    NzBreadCrumbModule,
    NzSpaceModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTabsModule,
    NzLayoutModule,
    NzTableModule,
    NzMessageModule,
    NzRadioModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTreeModule,
    NzModalModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzCardModule,
    NzPaginationModule,
    NzEmptyModule,
    NzUploadModule,
    NzDividerModule,
    NzDescriptionsModule,
    NzMenuModule,
    NzDropDownModule,
    NzIconModule,
    NzToolTipModule,
    NzTimePickerModule,
    NzNotificationModule,
    NzTreeSelectModule,
  ]
})
export class ShareModule {
}
