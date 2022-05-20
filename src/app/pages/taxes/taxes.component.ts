import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Taxe } from 'src/app/models/taxe';
import { TaxeService } from 'src/app/services/taxe.service';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent implements OnInit {
  taxes! : Observable<Taxe[]>;
  taxe : Taxe = new Taxe();

  closeResult = '';

  constructor(private modalService: NgbModal,private route: ActivatedRoute,private router: Router,
    private taxeService: TaxeService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.taxes = this.taxeService.getTaxes();
  }
  deleteTaxe(id: number) {
    this.taxeService.deleteTaxe(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  
  public onAddTaxe(addForm: NgForm): void {
    this.taxeService.addTaxe(addForm.value).subscribe(
      (response: Taxe) => {
        addForm.reset();
        this.gotoList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }









  gotoList() {
    this.reloadData();

    this.router.navigate(['/taxes']);
  }






  //modal
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
