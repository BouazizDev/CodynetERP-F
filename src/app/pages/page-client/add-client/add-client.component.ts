import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  alert: boolean=false;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }
  public onAddClient(addForm: NgForm): void {
    this.clientService.addClient(addForm.value).subscribe(
      (response: Client) => {
        addForm.reset();
        this.alert = true;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


}
