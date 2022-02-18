import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TraceModel } from './models/trace.model';
import { BackendService } from '../app/services/backend.service';
import { Pages } from './models/pages';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progress: number = Pages.Home;
  title = 'front-end';
  currentRoute: string;  
  trace: TraceModel = new TraceModel();
  

  constructor(private router: Router, private backEnd: BackendService, private requestService: RequestService) { }

  ngOnInit() {
    //Configura Id de la solicitud
    this.trace.RequestId = this.requestService.getRequestId();    

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd)
      {
        console.log(event.url);

        switch (event.url) {
          case "/personal":            

            //Configura progress
            this.progress = Pages.Personal;
            //Configura trace
            this.trace.PageId = Pages.Personal;            

            break;
            case "/company":

              //Configura progress
              this.progress = Pages.Company;
              //Configura trace
              this.trace.PageId = Pages.Company;              

              break;
              case "/confirm":              

              //Configura progress
              this.progress = Pages.Confirm;
              //Configura trace
              this.trace.PageId = Pages.Confirm;              

              break;
        
          default:
            //Configura progress
            this.progress = Pages.Home;
            //Configura trace
            this.trace.PageId = Pages.Home;
            //Si esta en el home se genera nuevo requestId
            this.requestService.setNewRequestId();
            //Asigna requestId
            this.trace.RequestId = this.requestService.getRequestId();               
            break;
        }

        this.backEnd.postTrace(this.trace).subscribe(data => {
          console.log(data);
        });

      }
        
    });    
  }
    
}
