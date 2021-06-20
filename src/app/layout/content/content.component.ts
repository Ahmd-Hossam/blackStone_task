import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shard/services/content.service';
declare var $:any
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  liks_number:number=10;
  isToggled: boolean = false;

  following:any=[]
  newest:any=[]
  popular:any=[]
  constructor(private content_ser:ContentService) { }

  ngOnInit(): void {
     this.jquery()
     this.get_active_deactive()
     this.get_incr_decr();

     //run gettir
     this.get_following()
     this.get_newest()
     this.get_popular()
  }
   
/*********************  start get data  ****************/
    get_following(){
      this.content_ser.get_following().subscribe(
        res=>{
            this.following=res
        }
      )
    }

    get_newest(){
      this.content_ser.get_newest().subscribe(
        res=>{
            this.newest=res
        }
      )
    }

    get_popular(){
      this.content_ser.get_popular().subscribe(
        res=>{
            this.popular=res
        }
      )
    }
  /***************  end get data ***************/




/* start likes code */
  //for likes 
  toggleButton() {
    if(!this.isToggled){
     this.increment();
    }else{
      this.decrement();
    }
    this.isToggled = !this.isToggled;
    this.get_active_deactive()
    this. get_incr_decr()
  }

  increment(){
    localStorage.setItem('incr_decr',       JSON.stringify(this.liks_number+=1))
    localStorage.setItem('active_deactive', JSON.stringify(this.isToggled!=true))
  }
  
  decrement(){
    localStorage.setItem('incr_decr',       JSON.stringify(this.liks_number-=1))
    localStorage.setItem('active_deactive', JSON.stringify(this.isToggled=false))
  }

  get_incr_decr(){
    this.liks_number = JSON.parse(localStorage.getItem('incr_decr')!);
  }

  get_active_deactive(){
    this.isToggled = JSON.parse(localStorage.getItem('active_deactive')!);
  }
/* end  likes code */



  //some jquery lines 
  jquery(){
    $(function(){
      $('.links ul li a').on('click', function(this:any){
        $(this).addClass('active_tab').parent('li').siblings().children('a').removeClass('active_tab')
        $('.body .item').css('display','none');
        $($(this).data('filter')).fadeIn(800)
      })
    })
  }
 
}


