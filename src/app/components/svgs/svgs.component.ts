import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svgs',
  templateUrl: './svgs.component.html',
  styleUrls: ['./svgs.component.scss']
})
export class SvgsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  svgId!: string;

}
