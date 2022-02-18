import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {

  constructor(public activeModal: NgbActiveModal,
    private router: Router) {}

  save(){
    console.log("Modal guardado");
    this.activeModal.close('Close click');
    this.router.navigate( ['/personal'] );
  }



}
