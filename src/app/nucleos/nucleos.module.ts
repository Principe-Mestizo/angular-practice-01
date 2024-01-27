import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleosRoutingModule } from './nucleos-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ComisionesComponent } from './components/comisiones/comisiones.component';
import { TestimonioComponent } from './components/testimonio/testimonio.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    MainComponent,
    ComisionesComponent,
    TestimonioComponent
  ],
  imports: [
    CommonModule,
    NucleosRoutingModule
  ]
})
export class NucleosModule { }
