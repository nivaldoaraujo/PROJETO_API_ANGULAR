import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos/alunos.component';
//importar servicosService(provider) e HttpClientModule(imports, providers)
import { HttpClientModule } from '@angular/common/http';
import { ServicosService } from './service/servicos.service';
//importar nos imports
import { FormsModule } from '@angular/forms';
ServicosService

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
