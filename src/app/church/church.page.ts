import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import * as firebase from 'firebase';

@Component({
  selector: 'app-church',
  templateUrl: './church.page.html',
  styleUrls: ['./church.page.scss'],
})

export class ChurchPage implements OnInit {

  churchForm: FormGroup;

  constructor(
    private router : Router,
    public fb : FormBuilder
  ) { 
    var nowdate = new Date();
    this.churchForm = this.fb.group({
      name:[''],
      kind:[''],
      pastor:[''],
      phone:[''],
      address:[''],
      url:[''],
      date:[nowdate]
    })    
  }
  
  ngOnInit() {

  }

  formSubmit(){
      console.log("Click Submit");
      console.log(this.churchForm.value.name);

      if (this.churchForm.value.name == "") alert ("교회명을 입력하세요.");
      else if (this.churchForm.value.kind == "") alert ("교단명을 입력하세요.");
      else if (this.churchForm.value.pastor == "") alert ("담임목사님 성함을 입력하세요.");
      else if (this.churchForm.value.phone == "") alert ("연락처를 입력하세요.");
      else if (this.churchForm.value.address == "") alert ("주소를 입력하세요.");
      else {
        var id = Date.now();
        var updates ={};
        updates['/church/'+id] = this.churchForm.value;
        firebase.database().ref().update(updates)
          .then( () => {
            alert("참여교회 신청이 완료되었습니다."); 
            this.churchForm.reset();
            this.router.navigate(['/home']);    
          }).catch(function(error){
            console.log(error);
          });  
      }
  }

}
