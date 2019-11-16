import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public item;
  public options;
  public type;
  constructor( public http: HttpClient ) {
    
  }

  ngOnInit() {
    this.http.get('assets/json/results.json').subscribe(
        data => {
          this.item = data['data'][0];
          // TO FIX: this is not correct if I have more destinations in the json, for now can be this way
          this.options = data['data'][0].transportation_options;
          this.type = data['data'][0].transportation_options.map(function(e) {
            return e.legs.map(function(i) {
              return i.transportation_type;
            });
          });
          //console.log(this.item, this.options);
          console.log(this.type);
        }
    );
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
