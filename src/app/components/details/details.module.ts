import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { SplashComponent } from '../splash/splash.component';



@NgModule({
  declarations: [
    CardComponent,
    SplashComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailsModule { }
