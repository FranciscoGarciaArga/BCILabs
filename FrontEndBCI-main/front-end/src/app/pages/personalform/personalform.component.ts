import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, NgForm, Validators } from '@angular/forms';
import {ClientModel} from '../../models/client.model';
import Swal from 'sweetalert2';
import { RequestService } from '../../services/request.service';
import { rutValidate, RutValidator } from 'ng9-rut';

@Component({
  selector: 'app-personalform',
  templateUrl: './personalform.component.html',
  styleUrls: ['./personalform.component.css']
})
export class PersonalformComponent implements OnInit {

  client: ClientModel = new ClientModel();  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router,
              private route: ActivatedRoute,
              private requestService: RequestService              
              ) {
   }

  ngOnInit(): void {

  }

  previous(){    
    this.router.navigate( ['/home'] );
  }

  advance(){    
    this.router.navigate( ['/company'] );
  }

  guardar( form: NgForm ) {    
    if ( form.invalid ) {
      //console.log('Formulario no válido');

      Swal.fire({
        icon: 'error',
        title: 'Campos obligatorios',
        text: 'Por favor ingrese todos los datos del formulario!'        
      });

      return;
    }

    this.requestService.addPersonal(this.client);

    this.router.navigate( ['/company'] );

  }

  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}
