import { VideoplayerService } from './../shared/services/videoplayer.service';
import { Router } from '@angular/router';
import { VideoService } from './../core/services/video.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {

  constructor(
    private http: HttpClient,
    private router: Router,
    public vidlist : VideoService,
    public vidplayer: VideoplayerService
    ){}

  vidListData : any = [];

  ngOnInit(): void {

    this.fetchVideoList()
    localStorage.clear();

  }

  openVideoPlayer(item:any){
    console.log("works")
    this.router.navigate(
      ['/videoplayer']
    );
    console.log(item)
    this.vidplayer.fetchVideoPlayerData(item);

  }

  fetchVideoList(){
    this.vidlist.getVideoList().subscribe((data) =>{
      this.vidListData = data;
      console.log(data)
      console.log(this.vidListData)
      console.log(typeof this.vidListData)
    })
  }

}
