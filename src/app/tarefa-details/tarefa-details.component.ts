import { Tarefa } from '../tarefa';
import { Component, OnInit, Input } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { TarefaListComponent } from '../tarefa-list/tarefa-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarefa-details',
  templateUrl: './tarefa-details.component.html',
  styleUrls: ['./tarefa-details.component.css']
})
export class TarefaDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['tarefas']);
  }
}