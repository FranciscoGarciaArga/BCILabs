import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SelectModel} from '../models/select.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private urlRegion = 'https://apis.digital.gob.cl/dpa/regiones';
  private urlComunas = 'https://apis.digital.gob.cl/dpa/comunas';  

  constructor(private http: HttpClient) { }

  getRegions() {
    return this.http.get(`${ this.urlRegion }`)
            .pipe(
              map( this.createArray ),
              delay(0)
            );
  }

  getComunas() {
    return this.http.get(`${ this.urlComunas }`)
            .pipe(
              map( this.createArray ),
              delay(0)
            );
  }

  getComunasByRegion(region:string) {
    return this.http.get(`${this.urlRegion}/${region}/comunas`)
            .pipe(
              map( this.createArray ),
              delay(0)
            );
  }  

  private createArray( selectObj: object ) {

    const options: SelectModel[] = [];
    Object.keys( selectObj ).forEach( key => {

      const option: SelectModel = selectObj[key];

      options.push( option );
    });


    return options;

  }
}
