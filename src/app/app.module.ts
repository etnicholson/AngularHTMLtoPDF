import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PDFRenderComponent } from './PDF-Render/PDF-Render.component';
import { InfoComponent } from './Info/Info.component';
import { DataService } from './_service/data.service';


@NgModule({
   declarations: [
      AppComponent,
      PDFRenderComponent,
      InfoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatFormFieldModule,
      MatButtonModule,
      FormsModule,
      MatInputModule
   ],
   providers: [DataService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
