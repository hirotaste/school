import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { PipeModule } from '@shared/pipes/pipe.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CollapsedSidebarComponent } from './sidebar/collapsed-sidebar/collapsed-sidebar.component';
import { ExpandedSidebarComponent } from './sidebar/expanded-sidebar/expanded-sidebar.component';
import { TimeDistanceModule } from '@shared/pipes/time-distance/time-distance.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    CollapsedSidebarComponent,
    ExpandedSidebarComponent,
  ],
  imports: [CommonModule, RouterModule, NgbDropdownModule, NgbTooltipModule, PipeModule, TimeDistanceModule]
})
export class LayoutsModule {}
