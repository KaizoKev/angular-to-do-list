import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  template: `
  <div>
    <div class="d-flex justify-content-center m-3">
      <form (submit)="addTask()">
        <input [(ngModel)]="newTask" name="newTask" placeholder="Ajouter une tâche">
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>
      </div>
      <ul>
        <li *ngFor="let task of tasks; let i = index"  class="p-2">
          {{ task }}
          <button class="btn btn-danger" (click)="deleteTask(i)">Supprimer</button>
          <button class="btn btn-info" (click)="editTask(i)">Modifier</button>
        </li>
      </ul>
    </div>
  `
})
export class TodoComponent {
  tasks :string[]= [];
  newTask :string = '';

  addTask() {
    console.log(this.newTask)
    this.tasks.push(this.newTask);
    this.newTask = '';
  }
  editTask(i: number) {
    const newValue = prompt('Entrez la nouvelle tâche:', this.tasks[i]);
    if (newValue !== null) {
      this.tasks[i] = newValue;
    }
  }
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
