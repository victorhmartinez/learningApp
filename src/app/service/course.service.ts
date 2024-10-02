import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { courseData } from '../data/course.data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
private course: Course=courseData;
  constructor() { }
getCourse():Course{
  return this.course;
}
}
