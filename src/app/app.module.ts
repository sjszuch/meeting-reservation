import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatSlider, MatSliderModule} from '@angular/material/slider';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { SelectionComponent } from './components/selection/selection.component';
import { SplashComponent } from './components/splash/splash.component';
import { MatSelectModule} from '@angular/material/select';
import { TopbarComponent } from './components/topbar/topbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SelectionComponent,
    SplashComponent,
    TopbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
