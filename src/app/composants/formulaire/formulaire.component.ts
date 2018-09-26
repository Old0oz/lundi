import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
