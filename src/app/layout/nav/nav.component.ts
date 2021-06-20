import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/shard/interfaces/story';
import { StoriesService } from 'src/app/shard/services/stories.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  stories:any=[]
  constructor(private story_ser:StoriesService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.story_ser.getAll().subscribe(
      res=>{
        console.log(res);
        this.stories=res
    })
  }
}
