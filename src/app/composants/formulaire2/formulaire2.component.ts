import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulaire2',
  templateUrl: './formulaire2.component.html',
  styleUrls: ['./formulaire2.component.css']
})
export class Formulaire2Component implements OnInit {

  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg', /* recette */ });
  }
}
