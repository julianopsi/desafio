import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-update-tarefa',
  templateUrl: './update-tarefa.component.html',
  styleUrls: ['./update-tarefa.component.css']
})
export class UpdateTarefaComponent implements OnInit {

  id: number;
  tarefa: Tarefa;

  constructor(private route: ActivatedRoute,private router: Router,
    private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefa = new Tarefa();

    this.id = this.route.snapshot.params['id'];
    
    this.tarefaService.getTarefa(this.id)
      .subscribe(data => {
        console.log(data)
        this.tarefa = data;
      }, error => console.log(error));
  }

  updateTarefa() {
    this.tarefaService.updateTarefa(this.id, this.tarefa)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tarefa = new Tarefa();
    this.gotoList();
  }

  onSubmit() {
    this.updateTarefa();    
  }

  gotoList() {
    this.router.navigate(['/tarefas']);
  }
}