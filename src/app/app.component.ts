import { Component } from '@angular/core';
import { RecettesService } from './shared/services/recettes.service';
import { RecetteInterface } from './shared/interfaces/recette-interface';
import {CompositionsInterface} from './shared/interfaces/compositions-interface';
import {IngredientsInterface} from './shared/interfaces/ingredients-interface';
import {ExpressionqtyInterface} from './shared/interfaces/expressionqty-interface';
import {UserInterface} from './shared/interfaces/user-interface';
import {UnitesmesureInterface} from './shared/interfaces/unitesmesure-interface';
import {TypesInterface} from './shared/interfaces/types-interface';
import {MenuInterface} from './shared/interfaces/menu-interface';
import {PlanningInterface} from './shared/interfaces/planning-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lundi';

  public recettes: RecetteInterface[];
  public menus: MenuInterface[];
  public users: UserInterface[];

  constructor(private recetteService: RecettesService) {}

  public getRecettes(): void {
    this.recetteService.getRecettes().subscribe((recettes) => {
      // Maintenant j'ai tes recettes...
      console.log(recettes.length + ' recettes récupérées');
      this.recettes = recettes;
    });
  }

  public getMenus(): void{
    this.recetteService.getMenus().subscribe((menus)=>{
      console.log(menus.length + 'menus récupérées');
      this.menus = menus;
    });
  }

  public getUsers():void{
    this.recetteService.getUsers().subscribe((users)=>{
      console.log(users.length +'users récupérés');
      this.users = users;
    });
  }
}
