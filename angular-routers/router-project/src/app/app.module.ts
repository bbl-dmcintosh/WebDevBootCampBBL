import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SayLightComponent } from './say-light/say-light.component';
import { SayDynamicBoldComponent } from './say-dynamic-bold/say-dynamic-bold.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes : Routes = [
{ path: 'light/:theme', component: SayLightComponent},
{ path: 'dark/:theme', component: SayDynamicBoldComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SayLightComponent,
    SayDynamicBoldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
