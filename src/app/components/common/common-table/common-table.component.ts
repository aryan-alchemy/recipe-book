import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRecipes } from '../../../services/recipe.service';

@Component({
  selector: 'app-common-table',
  imports: [CommonModule],
  templateUrl: './common-table.component.html',
  styleUrl: './common-table.component.scss',
})
export class CommonTableComponent {
  @Input() data: IRecipes[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() view = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit(id: number): void {
    this.edit.emit(id);
  }

  onView(id: number): void {
    this.view.emit(id);
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }
}
