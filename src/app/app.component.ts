import { Component } from '@angular/core';
import { CategoryServiceService } from './Services/category-service.service';
import { Observable } from 'rxjs';
import { Category } from './Models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: CategoryServiceService) {
  }
  category: Observable<Category>;
  title = 'StoreClientApp';
  data: any;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.service.getCategories().subscribe((data: any[]) => {
      this.data = data;
      console.log(data);
    });
  }
}
