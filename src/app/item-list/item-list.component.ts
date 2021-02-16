import { Component, OnInit } from '@angular/core';
import { ItemService } from "src/app/item.service";
import { Item } from "src/app/item.model";


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items:Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data.map(e =>{
        return {
          id: e.payload.doc.id,
          name:e.payload.doc.data()['name'],
          image:e.payload.doc.data()['image'],
          price:e.payload.doc.data()['price'],
        } as Item;
      })
    });
  }
  select(id: string){
    window.
  }

}
