import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';
import { StudentItemComponent } from "../student-item/student-item.component";

@Component({
  selector: 'student-data',
  standalone: true,
  imports: [StudentItemComponent],
  templateUrl: './student-data.component.html',
})
export class StudentDataComponent {
 @Input() students!:Student[]
}
