import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from '@pages/main-page/main-page.component';
import { UserPageComponent } from '@pages/user-page/user-page.component';
import { SearchPageComponent } from '@pages/search-page/search-page.component';
import { ShowPageComponent } from '@pages/show-page/show-page.component';
import { AuthPageComponent } from '@pages/auth-page/auth-page.component';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';
import { SeasonsPageComponent } from '@pages/seasons-page/seasons-page.component';
import { SeasonPageComponent } from '@pages/season-page/season-page.component';
import { EpisodePageComponent } from '@pages/episode-page/episode-page.component';

import { MainShowInfoComponent } from '@components/main-show-info/main-show-info.component';

import { AuthGuard } from '@guards/auth.guard';



const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: MainPageComponent,
  }, {
    path: 'user',
    component: UserPageComponent,
  }, {
    path: 'search-results',
    component: SearchPageComponent,
  }, {
    path: 'show/:showId',
    component: ShowPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info'
      }, {
        path: 'info',
        component: MainShowInfoComponent,
      }, {
        path: 'seasons',
        component: SeasonsPageComponent,
      }, {
        path: 'season/:seasonId',
        component: SeasonPageComponent,
      }, {
        path: 'episode/:episodeId',
        component: EpisodePageComponent,
      }
    ]
  }, {
    path: 'auth',
    component: AuthPageComponent,
  }, {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
