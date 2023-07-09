import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  IsLogin:string='';
  constructor(
    private route: ActivatedRoute

  ){
    let obj:any = this.route;
    let arr = obj['_routerState']['snapshot'].url.split('/;')
    let pagename=arr[0].split('/')[1]
    console.log(pagename);
    this.IsLogin=pagename
  }

  ngOnInit(){
    
  }
  
  handleChildData(data: any) {
    console.log(data)
    this.IsLogin = data;
  }
}
