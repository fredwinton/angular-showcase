import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { FacebookComponent } from './facebook/facebook.component';
import { FacebookFriendComponent } from './facebook/facebook-friend/facebook-friend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './facebook/user-form/user-form.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'user-form', component: UserFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent,
    FacebookFriendComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
