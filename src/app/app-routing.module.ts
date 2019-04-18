import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './Info/Info.component';
import { renderComponent } from '@angular/core/src/render3';
import { PDFRenderComponent } from './PDF-Render/PDF-Render.component';

const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'render', component: PDFRenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
