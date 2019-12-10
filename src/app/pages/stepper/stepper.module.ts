import { MaterialModule } from './../../material.module';
import { ComponentsModule } from './../../components/components.module';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StepperPage } from './stepper.page';

const routes: Routes = [
  {
    path: '',
    component: StepperPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MaterialModule
  ],
  declarations: [StepperPage]
})
export class StepperPageModule {}
