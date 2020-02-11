import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CreateTarefaComponent } from './create-tarefa/create-tarefa.component';
import { TarefaDetailsComponent } from './tarefa-details/tarefa-details.component';
import { TarefaListComponent } from './tarefa-list/tarefa-list.component';
import { UpdateTarefaComponent } from './update-tarefa/update-tarefa.component';
import { DetailsTarefaComponent } from './details-tarefa/details-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTarefaComponent,
    TarefaDetailsComponent,
    TarefaListComponent,
    UpdateTarefaComponent,
    DetailsTarefaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
