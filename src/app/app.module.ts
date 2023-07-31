import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RewardComponent } from './reward/reward.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { environment } from 'src/environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthenticationService } from './shared/services/authentication.service';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from './material/material.module';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    RewardComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
