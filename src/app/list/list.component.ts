import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, FilterPipe],
  styleUrl: './list.component.scss',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() numberParam?: number;
  @Input() arrayNumbersParam?: Array<number>;
  // @Input() objectParam: any;

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['numberParam'] &&
      this.arrayNumbersParam &&
      this.numberParam 
    ) {
      // this.arrayNumbersParam.reverse()
      // this.arrayNumbersParam = this.filterArray(
      //   this.arrayNumbersParam,
      //   this.numberParam
      // );
    }
  }

  // reverseArray(arrayNumbersParam: Array<number>): Array<number> {
  //   const newArray = new Array<number>();
  //   this.arrayNumbersParam?.forEach((item) => {
  //     newArray.unshift(item);
  //   });
  //   return newArray;
  // }

  filterArray(arrayNumbersParam: Array<number>, filter: number): Array<number> {
    const newArray = new Array<number>();
    this.arrayNumbersParam?.forEach((item) => {
      if (item > filter) {
        newArray.push(item);
      }
    });
    return newArray;
  }
}
