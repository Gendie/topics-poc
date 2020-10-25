import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

  public footerHeight = 50;
  public limit = 10;
  public count: number;

  public rows = new Array(50).fill(undefined).map((e, i) => {
    const data = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' }
    ]
    return Object.assign({}, data[i%3])
  })
  public columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  ngOnInit() {
    this.count = this.rows.length;
  }

  public addNewRow() {
    this.rows.push({ name: 'Molly', gender: 'Female', company: 'Burger King' });
    this.rows = [...this.rows];
    this.count = this.rows.length;
  }

  public onActivate(activationDetails) {
    console.log(activationDetails);
  }

}
