import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //run jquery
    this.jquery()
  }
   

  jquery(){
    $('.menu ul li a').click(function(this:any){
      $(this).addClass('active_a').parent('li').siblings().children('a').removeClass('active_a')
      $(this).siblings('i').addClass('active_icon').parent('li').siblings().children('i').removeClass('active_icon')
    })
  }
}
