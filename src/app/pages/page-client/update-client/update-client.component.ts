import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClientService) { }
    id! :string;
    client!:Client;
  ngOnInit(): void {
    this.client = new Client();
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id)
    .subscribe(data => {
      console.log(data)
      this.client = data;
    }, error => console.log(error));
}

public onUpdateClient() {
  this.clientService.updateClient(this.id,this.client).subscribe(data=>{
    this.client = data;
    this.gotoList();
  }
    ,
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

gotoList() {
  this.router.navigate(['/clients']);
}
  }


