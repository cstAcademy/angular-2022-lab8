import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewComponent } from './add-new/add-new.component';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DashboardComponent, AddNewComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
})
export class FeaturesModule {}
