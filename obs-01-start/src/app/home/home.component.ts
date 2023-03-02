import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firstObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const customIntervalObservable = new Observable<number>(observer => {
      let count:number = 0
      setInterval(()=>{
        if ( count === 29){
          observer.complete()
        }
        if (count === 30){
          observer.error(new Error('Count is equal to 3 >:('))
        }
        count++
        observer.next(count)
      }, 1000)
    })



    customIntervalObservable
      .pipe(filter((data: number) => {
          return !!(data % 2)
        }),
        map((data: number) => {
          return 'Round: ' + data;
        })
      ).subscribe(
      data => {
      console.log(data)
    },error => {
      alert(error.message)
    },() => {
        console.log('completed!')
      })
  }

}
