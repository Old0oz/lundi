import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RecettesService } from '../../shared/services/recettes.service';
import { Subscription } from '../../../../node_modules/rxjs';
import * as moment from 'moment';
import { MenuInterface } from '../../shared/interfaces/menu-interface';
@Component({
  selector: 'app-formulaire2',
  templateUrl: './formulaire2.component.html',
  styleUrls: ['./formulaire2.component.css']
})
export class Formulaire2Component implements OnInit {

  public selectMenuSubscription: Subscription;
  private retrievedMenus: MenuInterface[]=[];

  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private recettesService: RecettesService) { 
      //Objet type MenuInterface vide
     
  //Abonnement à une liste de menus
  this.selectMenuSubscription = this.recettesService
                      .getMenus()
                      .subscribe((desmenus) => {
                        this.retrievedMenus= desmenus;
console.log('Je viens de recevoir les menus: '+JSON.stringify(desmenus));
});
  }

  ngOnInit() {
    
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
