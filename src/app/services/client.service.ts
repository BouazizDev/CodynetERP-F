import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from "../models/client";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl =environment.apiUrl;

  constructor(private http: HttpClient) { 
  
  }
  public getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}/clients`);
  }
  public  addClient(client : Client): Observable<Client>{
    return this.http.post<Client>(`${this.apiUrl}/client/add`,client);
  }
  public  updateClient(clientId : string,client : Client): Observable<Client>{
    return this.http.patch<Client>(`${this.apiUrl}/client/update/${clientId}`,client);
  }
  public  deleteClient(clientId : string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/client/${clientId}`);
  }
  public getClientById(clientId : string): Observable<Client>{
    return this.http.get<Client>(`${this.apiUrl}/client/${clientId}`)
  }
}
