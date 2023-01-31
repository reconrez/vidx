import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoplayerService {

  constructor() { }

  videoData :any = {}

  fetchVideoPlayerData(data:any){
    console.log(data)
    this.videoData = data
    console.log(this.videoData)
  }

}
