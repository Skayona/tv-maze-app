import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { SeasonPageComponent } from './season-page/season-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { EpisodesPageComponent } from './episodes-page/episodes-page.component';
import { MainShowInfoComponent } from './main-show-info/main-show-info.component';



const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MainPageComponent,
}, {
  path: 'login',
  component: LoginPageComponent,
  data: {
    breadcrumbs: 'Home'
  }
}, {
  path: 'user',
  component: UserPageComponent,
  data: {
    breadcrumbs: 'User'
  }
}, {
  path: 'show/:showId',
  component: ShowPageComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'main'
    }, {
      path: 'main',
      component: MainShowInfoComponent,
      data: {
        breadcrumbs: 'Show'
      }
    }, {
      path: 'episodes',
      component: EpisodesPageComponent,
      data: {
        breadcrumbs: 'Episodes'
      }
    }
  ]
}, {
  path: 'season/:seasonId',
  component: SeasonPageComponent,
  data: {
    breadcrumbs: 'Season'
  }
}, {
  path: 'episode/:episodeId',
  component: EpisodePageComponent,
  data: {
    breadcrumbs: 'Episode'
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
