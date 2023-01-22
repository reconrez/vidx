import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoplayerRoutingModule } from '../routes/videoplayer-routing.module';
import { VideoListComponent } from '../../video-list/video-list.component';
import { VideoPlayerComponent } from '../../video-player/video-player.component';
import { ControlsComponent } from '../../shared/components/controls/controls.component';
import { SeekBarComponent } from '../../shared/components/seek-bar/seek-bar.component';
import { TimeDisplayComponent } from '../../shared/components/time-display/time-display.component';
import { VideoInfoComponent } from '../../shared/components/video-info/video-info.component';
import { TranscriptsComponent } from '../../shared/components/transcripts/transcripts.component';



@NgModule({
  declarations: [
    VideoListComponent,
    VideoPlayerComponent,
    ControlsComponent,
    SeekBarComponent,
    TimeDisplayComponent,
    VideoInfoComponent,
    TranscriptsComponent
  ],
  imports: [
    CommonModule,
    VideoplayerRoutingModule
  ]
})
export class VideoplayerModule { }
