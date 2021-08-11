import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if(!this.id) {
      console.error("Não existe modal com esse ID!");
      return;
    }

    document.body.appendChild(this.element);

    this.modalService.add(this);
  }

  ngOnDestroy() {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open() {
    this.element.style.display = 'block';
    document.body.classList.add("app-modal-open");
  }

  close() {
    this.element.style.display = "none";
    document.body.classList.remove("app-modal-open");
  }

}
