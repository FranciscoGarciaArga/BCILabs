import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { SolutionsComponent } from '../../modals/solutions/solutions.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() userName:string = "";

  //constructor(private modalService: NgbModal) { }
  constructor() { }

  ngOnInit(): void {
  }

  open() {    
    //const modalRef = this.modalService.open(SolutionsComponent);
  }  

}
