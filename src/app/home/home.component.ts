import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service'; // new

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
        ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})

export class HomeComponent implements OnInit {
  
  btnTxt: string = 'Add Text';
  itemCount: number;
  goalTxt: string;
  goals=[];

  constructor( private _data : DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals=res);
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addGoal(){
    console.log(this.goalTxt);
    if(this.goalTxt.length > 0 && this.goals.indexOf(this.goalTxt) == -1) {
        this.goals.push(this.goalTxt);
        this.goalTxt='';
        this.itemCount=this.goals.length;
        this._data.changeGoal(this.goals);
      }else{
        window.alert('Item is already present in list & please enter the text');
      }
  }

  removeItem(i){
    this.goals.splice(i,1);
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }
}
