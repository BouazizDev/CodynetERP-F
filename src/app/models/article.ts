import { Categorie } from "./categorie";
import { Taxe } from "./taxe";

export class Article {
    description!: string;
    id!: number;
    image!: string;
    nom!: string;
    prixUnitaireHT!: number;
    quantite!: number;
    reference!: string;
    taxes! : Taxe[];
    categorie! : Categorie;
}
