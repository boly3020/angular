import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocListComponent } from './components/doc-list/doc-list.component';
import { DocDetailComponent } from './components/doc-detail/doc-detail.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
const routes: Routes = [
  { path: '', component: DocListComponent },
  { path: 'docDetails', component: DocDetailComponent },
  { path:'admin-signUp',component:RegFormComponent},
  {path:'admin-login',component:LogFormComponent},
  { path:'admin-dash',component:AdminDashComponent},
  {path:'docDel',component:DeleteCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
