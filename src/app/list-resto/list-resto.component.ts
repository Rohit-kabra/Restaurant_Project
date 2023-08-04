import { Component,OnInit } from '@angular/core';
import { RestoService } from '../service/resto.service'
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent {
constructor(private resto:RestoService){}

collection:any=[];
ngOnInit():void{
  this.resto.getlist().subscribe((result:any): void=>{
    
    console.warn(result); 
    this.collection=result; 
  })

}
deleteResto(item: any): void{
 console.warn(this.collection)
this.collection.splice(item-1,1)
this.resto.deleteResto(item).subscribe((result)=>{
console.warn(result)

})
}
}
