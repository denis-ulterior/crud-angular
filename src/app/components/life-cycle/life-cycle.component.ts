import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy,AfterViewInit {

  @Input() number = 10
  
  constructor() {
    console.log('contrutor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges')
  }
  ngOnInit(): void {
    console.log('onInit')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('afterContentInit')
  }
  ngAfterViewChecked(): void {
    console.log('afterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('afterViewtInit')
  }
  ngDoCheck(): void {
    console.log('doCheck')
  }
  ngOnDestroy(): void {
    console.log('onDestroy')
  }
}
