import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creat-compte',
  templateUrl: './creat-compte.component.html',
  styleUrls: ['./creat-compte.component.css']
})
export class CreatCompteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const name= form.value["name"];
    const mail= form.value["mail"];

    console.log(name);


  }

}
