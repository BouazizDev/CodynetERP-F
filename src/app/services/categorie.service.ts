import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl =environment.apiUrl;
  constructor(private http : HttpClient) { }
  public getCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.apiUrl}/categories`);
  }
  public  addCategorie(categorie : Categorie): Observable<Categorie>{
    return this.http.post<Categorie>(`${this.apiUrl}/categorie/add`,categorie);
  }
  public  deleteCategorie(id : number): Observable<Categorie>{
    return this.http.delete<Categorie>(`${this.apiUrl}/categorie/${id}`);
  }

}
