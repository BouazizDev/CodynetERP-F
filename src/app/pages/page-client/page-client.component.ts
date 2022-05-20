import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.css']
})
export class PageClientComponent implements OnInit {
  public clients!:Client[];
  constructor(private clientService: ClientService,private router: Router) { }
  public getClients():void{
    this.clientService.getClients().subscribe(
      (response: any)=>{
        this.clients = response ;
        console.log(this.clients)
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }
  public  onDeleteClient(clientId: string): void {
      this.clientService.deleteClient(clientId).subscribe(
        (response: void) => {
          console.log(response);
          this.getClients();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
  ngOnInit(): void {
    this.getClients();
    
  }
  clientUpdate(id: string){
    this.router.navigate(['updateClient', id]);
  }
  

  
}
