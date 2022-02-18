import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { PollModel } from 'src/app/models/poll.model';
import { RequestService } from 'src/app/services/request.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  faFile = faFileAlt;
  faStar = faStar;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  opinion:string = "";

  constructor(public activeModal: NgbActiveModal,
              private router: Router,
              private request: RequestService,
              private backEndService: BackendService) { }

  ngOnInit(): void {        
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

  save(){

    let pollModel: PollModel = new PollModel(this.selectedValue, this.opinion, this.request.getRequestId());

    this.backEndService.postPoll(pollModel).subscribe(resp => {
      let timerInterval
      Swal.fire({
          title: 'Buen trabajo!',
          html: 'Gracias por tu opinión',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
      }).then((result) => {
        this.activeModal.close('Close click');
        //this.router.navigate( ['/home'] );
      })
      console.log(resp)

    });    

    
  }

  close(){
    this.activeModal.close('Close click');
  }

}
