import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http:HttpClient) { }

  get_following(){
    return this.http.get('../../../assets/mock api/content_data/following.json')
  }

  
  get_newest(){
    return this.http.get('../../../assets/mock api/content_data/newest.json')
  }


  get_popular(){
    return this.http.get('../../../assets/mock api/content_data/popular.json')
  }


}
