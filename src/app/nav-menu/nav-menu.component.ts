import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  public toggle : boolean = false;
              
//define your method
  clickEvent(){
    //if you just want to toggle the class; change toggle variable.
    this.toggle = !this.toggle;       
  }
}
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav")
const burger = document.getElementById("burger-menu")

if(burger!= null && ul != null){
  burger.addEventListener("click",() =>{
    ul.classList.add("show")

})}