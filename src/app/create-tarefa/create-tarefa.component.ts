import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-tarefa',
  templateUrl: './create-tarefa.component.html',
  styleUrls: ['./create-tarefa.component.css']
})
export class CreateTarefaComponent implements OnInit {

  tarefa: Tarefa = new Tarefa();
  submitted = false;

  constructor(private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit() {
  }

  newTarefa(): void {
    this.submitted = false;
    this.tarefa = new Tarefa();
  }

  save() {
    this.tarefaService.createTarefa(this.tarefa)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tarefa = new Tarefa();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/tarefas']);
  }
}


