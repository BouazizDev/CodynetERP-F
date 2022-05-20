import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories! : Observable<Categorie[]>;
  categorie : Categorie = new Categorie();
  constructor(private modalService: NgbModal,private route: ActivatedRoute,private router: Router,
    private categorieService: CategorieService) { }
  closeResult = '';
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.categories = this.categorieService.getCategories();
  }
  deleteCategorie(id: number) {
    this.categorieService.deleteCategorie(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  
  public onAddCategorie(addForm: NgForm): void {
    this.categorieService.addCategorie(addForm.value).subscribe(
      (response: Categorie) => {
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

    this.router.navigate(['/categories']);
  }
  //modal func
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
