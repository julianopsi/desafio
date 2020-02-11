import { EmployeeDetailsComponent } from '../tarefa-details/tarefa-details.component';
import { Observable } from "rxjs";
import { TarefaService } from "../tarefa.service";
import { Tarefa } from "../tarefa";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-tarefa-list",
  templateUrl: "./tarefa-list.component.html",
  styleUrls: ["./tarefa-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  tarefas: Observable<Tarefa[]>;

  constructor(private tarefaService: TarefaService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tarefas = this.tarefaService.getTarefasList();
  }

  deleteTarefa(id: number) {
    this.tarefaService.deleteTarefa(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
