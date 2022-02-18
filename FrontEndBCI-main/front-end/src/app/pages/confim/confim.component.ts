import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestModel } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';
import { PollComponent } from '.././../modals/poll/poll.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-confim',
  templateUrl: './confim.component.html',
  styleUrls: ['./confim.component.css']
})
export class ConfimComponent implements OnInit {

  products: string = "";
  company: string = "";
  requestDate: string = "";

  constructor(private router: Router, private modalService: NgbModal, private request: RequestService, private datePipe: DatePipe) { }

  ngOnInit(): void {

    let request = this.request.getRequest();
    this.products = request.company.selectedProducts.join(", ");
    this.company = request.client.companyName;
    this.requestDate = this.datePipe.transform(Date.now(), "dd MMM yyyy");

    setTimeout(() => {
      this.modalService.open(PollComponent);
    }, 3000)
  }

  previous(){
    this.router.navigate( ['/company'] );
  }

  homePage(){
    this.router.navigate( ['/home'] );
  }

  open() {
    const modalRef = this.modalService.open(PollComponent);
  } 

}
