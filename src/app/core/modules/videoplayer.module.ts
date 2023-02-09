import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoplayerRoutingModule } from '../routes/videoplayer-routing.module';
import { ControlboxComponent } from '../../shared/components/controlbox/controlbox.component';
import { SeekBarComponent } from '../../shared/components/seek-bar/seek-bar.component';
import { TimeControlsComponent } from '../../shared/components/time-controls/time-controls.component';
import { VideoInfoComponent } from '../../shared/components/video-info/video-info.component';
import { TranscriptsComponent } from '../../shared/components/transcripts/transcripts.component';



@NgModule({
  declarations: [
    ControlboxComponent,
    SeekBarComponent,
    TimeControlsComponent,
    VideoInfoComponent,
    TranscriptsComponent
  ],
  imports: [
    CommonModule,
    VideoplayerRoutingModule
  ]
})
export class VideoplayerModule { }
