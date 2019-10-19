import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';

import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleShowComponent } from './schedule-show/schedule-show.component';
import { RecomendedShowComponent } from './recomended-show/recomended-show.component';
import { ShowItemComponent } from './show-item/show-item.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SeasonPageComponent } from './season-page/season-page.component';
import { MainShowInfoComponent } from './main-show-info/main-show-info.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { SeasonsPageComponent } from './seasons-page/seasons-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SeasonItemComponent } from './season-item/season-item.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    ScheduleShowComponent,
    RecomendedShowComponent,
    ShowItemComponent,
    ShowPageComponent,
    LoginPageComponent,
    UserPageComponent,
    SeasonPageComponent,
    MainShowInfoComponent,
    EpisodeListComponent,
    InfoCardComponent,
    SeasonsPageComponent,
    AuthPageComponent,
    ProfilePageComponent,
    SeasonPageComponent,
    SeasonItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    TabMenuModule,
    TableModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
