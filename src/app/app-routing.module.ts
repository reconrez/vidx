import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: "home", pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: () => import('./core/routes/videoplayer-routing.module').then(r => r.VideoplayerRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
