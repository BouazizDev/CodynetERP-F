import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categorie';
import { Taxe } from 'src/app/models/taxe';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { TaxeService } from 'src/app/services/taxe.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {
  categories! : Observable<Categorie[]>;
  taxes! : Observable<Taxe[]>;
  articles! : Observable<Article[]>;
  article!: Article;

  constructor(private Fb : FormBuilder, private router: Router,private modalService: NgbModal,private categorieService: CategorieService,private taxeService : TaxeService,private articleService : ArticleService) { }
    closeResult = '';

  ngOnInit(): void {
    this.getData();
  

    

  }

  getData() {
    this.categories = this.categorieService.getCategories();
    this.taxes = this.taxeService.getTaxes();
    this.articles = this.articleService.getArticles();
  }
  
  public onAddArticle(addForm: NgForm): void {
    this.articleService.addArticle(addForm.value).subscribe(
      (response: Article) => {
        addForm.reset();
        this.gotoList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  deleteArticle(id: number) {
    this.articleService.deleteArticle(id)
      .subscribe(
        data => {
          console.log(data);
          this.getData();
        },
        error => console.log(error));
  }




  public gotoList(){
    this.getData();

    this.router.navigate(['/articles']);
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
