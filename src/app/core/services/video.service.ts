import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http : HttpClient) { }

  getVideoList(){
    return this.http.get<any>("https://vidx.mocklab.io/vidlist");
  }

}
