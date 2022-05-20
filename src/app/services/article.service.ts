import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl =environment.apiUrl;
  constructor(private http : HttpClient){ }
  public getArticles(): Observable<Article[]>{
    return this.http.get<any[]>(`${this.apiUrl}/articles`);
  }
  public  addArticle(article : Article): Observable<Article>{
    return this.http.post<any>(`${this.apiUrl}/article/add`,article);
  }
  public deleteArticle(id : number): Observable<Article>{
    return this.http.delete<Article>(`${this.apiUrl}/article/${id}`);
  }
}
