import { VideoplayerService } from './../shared/services/videoplayer.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  constructor(public vidPlayer: VideoplayerService) { }

  vidJsonData = {}
  displayErrorMessage : boolean = false

  ngOnInit(): void {

    this.vidJsonData = this.vidPlayer.videoData
    let localStorageData = localStorage.getItem("videoData")

    if(Object.keys(this.vidJsonData).length === 0){
      let localStorageData = localStorage.getItem("videoData")
      if(localStorageData == null){
        this.displayErrorMessage = true
        console.log(localStorageData)
        console.log(this.vidJsonData)
        console.log(this.displayErrorMessage)
      }else{
        this.vidJsonData = JSON.parse(localStorageData)
        console.log(localStorageData)
        console.log(this.vidJsonData)
        console.log(this.displayErrorMessage)
      }
    }else{
      localStorage.setItem('videoData', JSON.stringify(this.vidJsonData))
      console.log(localStorageData)
      console.log(this.vidJsonData)
      console.log(this.displayErrorMessage)

    }

  }

}
