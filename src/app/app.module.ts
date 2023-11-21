import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBlocsComponent } from './Bloc/components/all-blocs/all-blocs.component';
import { ModifyBlocComponent } from './Bloc/components/modify-bloc/modify-bloc.component';;

import { HttpClientModule } from '@angular/common/http'; 
import { CreateBlocComponent } from './Bloc/components/create-bloc/create-bloc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllBlocsComponent,
     CreateBlocComponent,
    ModifyBlocComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
