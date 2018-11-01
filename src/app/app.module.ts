import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HttpRequest } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserSService } from './user/user-s.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarComponent } from './car/car.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news/news.service';
import { CarService } from './car/car.service';
import { ReparComponent } from './repair/repair.component';
import { RepairService } from './repair/repair.service';
import { PartComponent } from './part/part.component';
import { PartService } from './part/part.service';

const appRoutes: Routes = [
  { path: 'users', 
  component: UserComponent},
  { path: 'cars', 
  component: CarComponent},
  { path: 'repairs', 
  component: ReparComponent},
  { path: 'parts', 
  component: PartComponent},
  { path: '', 
  component: NewsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CarComponent,
    UserDetailComponent,
    NewsComponent,
    ReparComponent,
    PartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [UserSService, NewsService, CarService, RepairService, PartService],
  bootstrap: [AppComponent ,UserComponent, UserDetailComponent, CarComponent, ReparComponent, PartComponent]
})
export class AppModule { }
