import { SearchComponent } from './views/search/search.component';
import { CardInfoComponent } from './views/card-info/card-info.component';
import { ListComponent } from './views/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "cards/:id",
    component: CardInfoComponent
  },
  {
    path: "search",
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
