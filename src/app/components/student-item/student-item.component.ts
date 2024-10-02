import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'tr[student-item]',
  standalone: true,
  imports: [],
  templateUrl: './student-item.component.html',
})
export class StudentItemComponent {
@Input() student!:Student
}
