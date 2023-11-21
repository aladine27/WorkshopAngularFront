import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlocsComponent } from './Bloc/components/all-blocs/all-blocs.component';
import { CreateBlocComponent } from './Bloc/components/create-bloc/create-bloc.component';
import { ModifyBlocComponent } from './Bloc/components/modify-bloc/modify-bloc.component';

const routes: Routes = [
  { path: 'bloc/all', component: AllBlocsComponent },
  { path: 'bloc/add', component: CreateBlocComponent },
 { path: 'modify-bloc//:id', component: ModifyBlocComponent },
{ path: '', redirectTo: '/bloc/all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
