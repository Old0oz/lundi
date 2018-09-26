import { Component, OnInit } from '@angular/core';
import { RecetteInterface } from '../../shared/interfaces/recette-interface';
import { RecettesService } from '../../shared/services/recettes.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  private recetteToAdd: RecetteInterface;
  public recetteForm: FormGroup;
  public type: number;

  constructor(
    private recettesService: RecettesService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder) {

    this.recetteToAdd = {
    titre: '',
    instructions: '',
    temps_preparation: null,
    temps_cuisson: null,
    nb_personnes: null,
    utilisateurs_id: 1111,
    types_id: null
    };

  }

  ngOnInit() {
    this.recetteForm = this.formBuilder.group(
      {
        titre: [this.recetteToAdd.titre, /* [Validators.required, Validators.minLength(5)] */],
        instructions: [this.recetteToAdd.instructions],
        temps_preparation: [this.recetteToAdd.temps_preparation],
        temps_cuisson: [this.recetteToAdd.temps_cuisson],
        nb_personnes: [this.recetteToAdd.nb_personnes],
        utilisateurs_id: [this.recetteToAdd.utilisateurs_id],
        types_id: [this.recetteToAdd.types_id],
      },
/*       {
        validator: Validators.compose([
          DateValidators.dateLessThan('begin', 'end', { 'begin': true })
        ])
      } */
    );
  }

  public gotIt(type: number): void {
    this.type = type;
  }

  /**
 * Emet le nouveau todo
 */
  public addRecette(): void {
    const _recette: RecetteInterface = this.recetteForm.value;
    _recette.types_id = this.type;
    // On doit tenir compte d'une recette existante
    console.log('recette a ajouter : ' + JSON.stringify(_recette));
    if (this.recetteToAdd.hasOwnProperty('titre')) {
      // _recette.titre = this.recetteToAdd.titre;
      this.recettesService.addRecette(_recette);
    }
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
