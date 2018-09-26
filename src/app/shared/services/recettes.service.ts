import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Importer les modules d'observation
import {Observable, Subject} from 'rxjs';
import {Constants} from './../constants/constants';

// Importer toutes les interfaces nécessaires
import {RecetteInterface} from './../interfaces/recette-interface';
import {CompositionsInterface} from './../interfaces/compositions-interface';
import {IngredientsInterface} from './../interfaces/ingredients-interface';
import {ExpressionqtyInterface} from './../interfaces/expressionqty-interface';
import {UserInterface} from './../interfaces/user-interface';
import {UnitesmesureInterface} from './../interfaces/unitesmesure-interface';
import {TypesInterface} from './../interfaces/types-interface';
import {MenuInterface} from './../interfaces/menu-interface';
import {PlanningInterface} from './../interfaces/planning-interface';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {
  /**
   * Définition des sujets observables
   */
  private recetteSubject: Subject<RecetteInterface> = new Subject<RecetteInterface>();
  private compositionsSubject: Subject<CompositionsInterface> = new Subject<CompositionsInterface>();
  private ingredientsSubject: Subject<IngredientsInterface> = new Subject<IngredientsInterface>();
  private expressionqtySubject: Subject<ExpressionqtyInterface> = new Subject<ExpressionqtyInterface>();
  private userSubject: Subject<UserInterface> = new Subject<UserInterface>();
  private unitesmesureSubject: Subject<UnitesmesureInterface> = new Subject<UnitesmesureInterface>();
  private typeSubject: Subject<TypesInterface> = new Subject<TypesInterface>();
  private menuSubject: Subject<MenuInterface> = new Subject<MenuInterface>();
  private planningSubject: Subject<PlanningInterface> = new Subject<PlanningInterface>();

  /**
   * Injection de la dépendence HttpClient
   * @param _api: HttpCLient Transport vers le backend
   */
  constructor(private _api: HttpClient) { }

  /**
   * Méthode pour get une recette
   */
  public getRecettes(id: number = null): Observable<RecetteInterface[]> {
    if (id !== null) {
      return this._api.get<RecetteInterface[]>(
        // parametres de la methode
        Constants._API_RECETTE + '/' + id
      );
    } else {
      console.log('HTTP GET : ' + Constants._API_RECETTE);
      return this._api.get<RecetteInterface[]>(
        Constants._API_RECETTE
      );
    }
  }

  /**
   * Méthode pour get un menu
   */
  public getMenus(id: number = null): Observable<MenuInterface[]> {
    if (id !== null) {
      return this._api.get<MenuInterface[]>(
        // parametres de la methode
        Constants._API_MENU + '/' + id
      );
    } else {
      return this._api.get<MenuInterface[]>(
        Constants._API_MENU
      );
    }
  }

  /**
   * Méthode pour get un user
   */
  public getUsers(id: number = null): Observable<UserInterface[]> {
    if (id !== null) {
      return this._api.get<UserInterface[]>(
        // parametres de la methode
        Constants._API_USER + '/' + id
      );
    } else {
      return this._api.get<UserInterface[]>(
        Constants._API_USER
      );
    }
  }

  /**
   * Méthodes permettant aux autres classes de souscrire (observer/s'abonner) le sujet
   */
  public getRecette(): Observable<RecetteInterface> {
    return this.recetteSubject.asObservable();
  }

  public getMenu(): Observable<MenuInterface> {
    return this.menuSubject.asObservable();
  }

  public getCompo(): Observable<CompositionsInterface> {
    return this.compositionsSubject.asObservable();
  }

  public getIngredient(): Observable<IngredientsInterface> {
    return this.ingredientsSubject.asObservable();
  }

  public getUser(): Observable<UserInterface> {
    return this.userSubject.asObservable();
  }

  public getUnitMesur(): Observable<UnitesmesureInterface> {
    return this.unitesmesureSubject.asObservable();
  }

  public getType(): Observable<TypesInterface> {
    return this.typeSubject.asObservable();
  }

  public getPlan(): Observable<PlanningInterface> {
    return this.planningSubject.asObservable();
  }

  public getExpQty(): Observable<ExpressionqtyInterface> {
    return this.expressionqtySubject.asObservable();
  }

  /**
   * Diffuse le sujet vers les abonnés
   * @param recette RecetteInterface une recette captée qui sera diffusé
   */
  public sendRecette(recette: RecetteInterface) {
    this.recetteSubject.next(recette);
  }

  /**
   * Diffuse le sujet vers les abonnés
   * @param Menu MenuInterface un menu capté qui sera diffusé
   */
  public sendMenu(menu: MenuInterface) {
    this.menuSubject.next(menu);
  }

  /**
   * Diffuse le sujet vers les abonnés
   * @param User UserInterface un user capté qui sera diffusé
   */
  public sendUser(user: UserInterface) {
    this.userSubject.next(user);
  }

  /**
   * Insère une recette dans la liste des todos
   * et diffuse la nouvelle recette créée
   *  recette
   */
  public addRecette(recette: RecetteInterface) {
    this._api.post<RecetteInterface[]>(
      Constants._API_RECETTE,
      recette
    ).subscribe((result) => {
      this.sendRecette(recette);
    });
  }





}
