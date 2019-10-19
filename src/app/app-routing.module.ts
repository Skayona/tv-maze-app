import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MainShowInfoComponent } from './main-show-info/main-show-info.component';
import { SeasonsPageComponent } from './seasons-page/seasons-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuard } from './guards/auth.guard';
import { SeasonPageComponent } from './season-page/season-page.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { SearchPageComponent } from './search-page/search-page.component';



const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: MainPageComponent,
  }, {
    path: 'login',
    component: LoginPageComponent,
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
