import { Component, OnInit } from '@angular/core';
import { RecetteInterface } from '../../shared/interfaces/recette-interface';
import { RecettesService } from '../../shared/services/recettes.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  private recetteSubscription: Subscription;
  private recette: RecetteInterface[];

  constructor(private recettesService: RecettesService) { }

  ngOnInit() {
        /* recupere les recettes*/
        this.recettesService.getRecettes().subscribe((recette) => {
          this.recette = recette;
          console.log('voici les recette dispos [[[[[[' + JSON.stringify(recette) + ']]]]]]]');
        /*
          this.dataSource.data = this.todos;
          this.dataSource.sort = this.sort; */
        });
  }

}
