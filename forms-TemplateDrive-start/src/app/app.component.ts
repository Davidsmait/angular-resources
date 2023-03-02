import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('f') ngFormReference: NgForm;
  // defaultQuestion = 'pet'
  // answer
  // genders= ['male', 'female']
  //
  //
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //
  //   this.ngFormReference.setValue({
  //     userData: {
  //       username: 'PP',
  //       email: 'pp@pp.com'
  //     },
  //     secret: 'teacher',
  //     questionAnswer: 'text field test',
  //     gender: 'male'
  //   })
  //
  // }

  planOption = 'advanced'

  onSubmit(formRef: NgForm){
    console.log(formRef)
  }

}
