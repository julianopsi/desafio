import { TarefaDetailsComponent } from './tarefa-details/tarefa-details.component';
import { CreateEmployeeComponent } from './create-tarefa/create-tarefa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaListComponent } from './tarefa-list/tarefa-list.component';
import { UpdateTarefaComponent } from './update-tarefa/update-tarefa.component';

const routes: Routes = [
  { path: '', redirectTo: 'tarefa', pathMatch: 'full' },
  { path: 'tarefas', component: TarefaListComponent },
  { path: 'add', component: CreateTarefaComponent },
  { path: 'update/:id', component: UpdateTarefaComponent },
  { path: 'details/:id', component: TarefaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }