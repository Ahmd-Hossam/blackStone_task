import { Component, OnInit } from '@angular/core';
import { SuggestService } from 'src/app/shard/services/suggest.service';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss']
})
export class RightBarComponent implements OnInit {
  suggests:any=[]
  constructor(private suggest_ser:SuggestService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.suggest_ser.getAll().subscribe(
      res=>{
        this.suggests=res
      }
    )
  }

}
