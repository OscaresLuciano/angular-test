import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './list.component.scss',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() numberParam?: number;
  @Input() arrayStringParam?: Array<string>;
  @Input() objectParam: any;

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['arrayStringParam']) {
      this.arrayStringParam = this.reverseArray(this.arrayStringParam);
      this.objectParam = this.filterArray(this.arrayStringParam);
    }
  }

  reverseArray(arrayStringParam?: Array<string>): Array<string> {
    const newArray = new Array<string>();
    this.arrayStringParam?.forEach((item) => {
      newArray.unshift(item);
    });
    return newArray;
  }

  filterArray(arrayStringParam?: Array<string>): Array<string> {
    const newArray = new Array<string>();
    this.arrayStringParam?.forEach((item) => {
      if (item !== '5') {
        newArray.push(item);
      }
    });
    return newArray;
  }
}
