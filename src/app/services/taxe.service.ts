import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Taxe } from '../models/taxe';

@Injectable({
  providedIn: 'root'
})
export class TaxeService {
  private apiUrl =environment.apiUrl;

  constructor(private http : HttpClient) { }
  public getTaxes(): Observable<Taxe[]>{
    return this.http.get<Taxe[]>(`${this.apiUrl}/taxes`);
  }
  public  addTaxe(taxe : Taxe): Observable<Taxe>{
    return this.http.post<Taxe>(`${this.apiUrl}/taxe/add`,taxe);
  }
  public  deleteTaxe(id : number): Observable<Taxe>{
    return this.http.delete<Taxe>(`${this.apiUrl}/taxe/${id}`);
  }
  
}
