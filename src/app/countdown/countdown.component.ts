import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent implements OnInit {

  dataCasamento: Date = new Date(2021, 10, 14, 14);
  dias = 0;
  horas = 0;
  minutos = 0;
  segundos = 0;
  
  constructor(private zone: NgZone, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        let date = new Date();
        let diferenca = this.dataCasamento.getTime() - date.getTime();
        this.dias = Math.floor(diferenca / (1000 * 3600 * 24));
        diferenca = diferenca % (1000 * 3600 * 24);
        this.horas = Math.floor(diferenca / ( 1000 * 3600 ));
        diferenca = diferenca % (1000 * 3600);
        this.minutos = Math.floor(diferenca / ( 60000 ));
        diferenca = diferenca % 60000;
        this.segundos = Math.floor(diferenca / 1000);
        this.changeDetectorRef.detectChanges();
      }, 1000);
    })
  }

  zeroPad(num, quantZeros) {
    return String(num).padStart(quantZeros, '0')
  }

}
