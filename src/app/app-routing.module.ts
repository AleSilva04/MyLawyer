import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent} from "./appointments/pages/appointments/appointments.component";
import { ClientsComponent} from "./clients/pages/clients/clients.component";
import {NotificationComponent} from "./notifications/pages/notification/notification.component";
import {IndexComponent} from "./index/pages/index.component";
import {ClientNotificationComponent} from "./notifications/pages/client-notification/client-notification.component";
import {SearchLawyerComponent} from "./search-lawyer/pages/search-lawyer/search-lawyer.component";
import {AppointmentsClientComponent} from "./appointments/pages/appointments-client/appointments-client.component";
import {LawyersComponent} from "./clients/pages/lawyers/lawyers.component";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";


const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'profile', component: IndexComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'lawyers', component: LawyersComponent },
  { path: 'appointmentsLawyer', component: AppointmentsComponent },
  { path: 'appointmentsClient', component: AppointmentsClientComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'notificationsC', component: ClientNotificationComponent },
  { path: 'signIn', component:SignInComponent},
  { path: 'signUp', component:SignUpComponent},
  { path: 'searchlawyer', component:SearchLawyerComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
