import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: any[] = [];
  constructor() {}

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    console.log(id);
    this.modals = this.modals.filter((x) => x.id === id);
  }

  open(id: string) {
    console.log(id);
    const modal = this.modals.find((x) => x.id === id);
    modal.open();
  }

  close(id: string) {
    const modal = this.modals.find((x) => x.id === id);
    modal.close();
  }
}
