import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocCardComponent } from './components/doc-card/doc-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DocListComponent } from './components/doc-list/doc-list.component';
import { DocDetailComponent } from './components/doc-detail/doc-detail.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { AdminContorlCardComponent } from './components/admin-contorl-card/admin-contorl-card.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { DoctorServicesService } from './doctor-services.service';

@NgModule({
  declarations: [
    AppComponent,
    DocCardComponent,
    NavBarComponent,
    DocListComponent,
    DocDetailComponent,
    RegFormComponent,
    LogFormComponent,
    AdminDashComponent,
    AdminContorlCardComponent,
    EditCardComponent,
    DeleteCardComponent,
    AddCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [DoctorServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
