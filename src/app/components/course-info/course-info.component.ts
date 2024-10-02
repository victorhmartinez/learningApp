import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'course-info',
  standalone: true,
  imports: [],
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent {
@Input() course!:Course;
}
