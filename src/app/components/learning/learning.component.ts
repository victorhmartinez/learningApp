import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { CourseService } from '../../service/course.service';
import { CourseInfoComponent } from "../course-info/course-info.component";
import { StudentDataComponent } from "../student-data/student-data.component";

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CourseInfoComponent, StudentDataComponent],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent implements OnInit {
course!:Course;
constructor(private service: CourseService){}
ngOnInit():void{
  this.course=this.service.getCourse();
}
}
