import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule
  ]
})
export class SplashModule { }
