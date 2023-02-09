import { VideoplayerService } from './../shared/services/videoplayer.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  constructor(public vidPlayer: VideoplayerService) { }

  vidJsonData : any = {}
  displayErrorMessage : boolean = false
  vidEl : any


  ngOnInit(): void {

    this.vidEl = document.getElementById('videoEl')
    this.vidJsonData = this.vidPlayer.videoData
    let localStorageData = localStorage.getItem("videoData")
    this.videoDataBootstrap()

  }

  videoDataBootstrap(){


    if(Object.keys(this.vidJsonData).length === 0){
      let localStorageData = localStorage.getItem("videoData")
      if(localStorageData == null){
        this.displayErrorMessage = true
      }else{
        this.vidJsonData = JSON.parse(localStorageData)
      }
    }else{
      localStorage.setItem('videoData', JSON.stringify(this.vidJsonData))
    }
  }

}
