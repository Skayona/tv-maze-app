import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';

import { MainPageComponent } from '@pages/main-page/main-page.component';
import { ShowPageComponent } from '@pages/show-page/show-page.component';
import { UserPageComponent } from '@pages/user-page/user-page.component';
import { SeasonPageComponent } from '@pages/season-page/season-page.component';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';
import { EpisodePageComponent } from '@pages/episode-page/episode-page.component';
import { SeasonsPageComponent } from '@pages/seasons-page/seasons-page.component';
import { AuthPageComponent } from '@pages/auth-page/auth-page.component';
import { SearchPageComponent } from '@pages/search-page/search-page.component';

import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ScheduleShowComponent } from '@components/schedule-show/schedule-show.component';
import { RecomendedShowComponent } from '@components/recomended-show/recomended-show.component';
import { ShowItemComponent } from '@components/show-item/show-item.component';
import { MainShowInfoComponent } from '@components/main-show-info/main-show-info.component';
import { EpisodeListComponent } from '@components/episode-list/episode-list.component';
import { InfoCardComponent } from '@components/info-card/info-card.component';
import { SeasonItemComponent } from '@components/season-item/season-item.component';
import { SearchResultsComponent } from '@components/search-results/search-results.component';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ShowPageComponent,
    UserPageComponent,
    SeasonPageComponent,
    ProfilePageComponent,
    EpisodePageComponent,
    SeasonsPageComponent,
    AuthPageComponent,
    SearchPageComponent,
    HeaderComponent,
    FooterComponent,
    ScheduleShowComponent,
    RecomendedShowComponent,
    ShowItemComponent,
    MainShowInfoComponent,
    EpisodeListComponent,
    InfoCardComponent,
    SeasonItemComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    TabMenuModule,
    TableModule,
    FormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
