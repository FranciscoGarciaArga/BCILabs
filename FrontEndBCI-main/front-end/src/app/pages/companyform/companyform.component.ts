import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {CompanyModel} from '../../models/company.model';
import {SelectModel} from '../../models/select.model';
import Swal from 'sweetalert2';
import { CommonService } from '../../services/common.service';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { MatListOption } from '@angular/material/list/selection-list';

@Component({
  selector: 'app-companyform',
  templateUrl: './companyform.component.html',
  styleUrls: ['./companyform.component.css']
})
export class CompanyformComponent implements OnInit {
  regiones: SelectModel[] = [];
  comunas: SelectModel[] = [];
  profiles: SelectModel[] = [];
  sales: SelectModel[] = [];
  loading = false;
  company: CompanyModel = new CompanyModel();
  selected = null;
  confirmSendInfo = false;
  products:number[] = [];
  otherProduct:string = "";
  selectedProducts: string[];

  constructor(private router: Router,
              private commonService: CommonService,
              private requestService: RequestService,
              private backEndService: BackendService) { }

  ngOnInit(): void {
    this.loading = true;
    this.commonService.getRegions()
      .subscribe( resp => {
        this.regiones = resp;
        this.loading = false;
      });      

        this.loading = true;
        this.backEndService.getProducts()
          .subscribe( resp => {
            this.profiles = resp;
            this.loading = false;
          });

          this.loading = true;
          this.backEndService.getSalesAmount()
            .subscribe( resp => {
              this.sales = resp;
              this.loading = false;
            });
  }

  previous(){
    this.router.navigate( ['/personal'] );
  }

  advance(){
    this.router.navigate( ['/confirm'] );
  }

  guardar( form: NgForm ) {
    if ( form.invalid ) {
      Swal.fire({
        icon: 'error',
        title: 'Campos obligatorios',
        text: 'Por favor ingrese todos los datos del formulario!'
      })
      return;
    }

    if (this.confirmSendInfo) {
      this.company.regionId = this.company.regionId.nombre;
      this.company.addProductValues(this.products, this.selectedProducts, this.otherProduct);
      this.requestService.addCompany(this.company);

      Swal.fire({
        title: 'Espere',
        text: 'Guardando información',
        allowOutsideClick: false
      });
      Swal.showLoading();
  
  
      let peticion: Observable<any>;
  
      peticion = this.requestService.postRequest();
  
      peticion.subscribe( resp => {
        console.log(resp);        
        Swal.fire({
          title: "OK",
          text: 'Se actualizó correctamente'
        });
  

        this.router.navigate( ['/confirm'] );
      });
               
    }

  }

  onChangeRegion(regionSelected){
    this.loading = true;
      this.commonService.getComunasByRegion(regionSelected.value.codigo)
        .subscribe( resp => {
          this.comunas = resp;
          this.loading = false;
        });
  }

  onGroupsChange(options: MatListOption[]) {
    this.selectedProducts = options.map(o => o._text.nativeElement.innerHTML);
  }

}
