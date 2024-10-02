import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LearningComponent } from './app/components/learning/learning.component';

bootstrapApplication(LearningComponent, appConfig)
  .catch((err) => console.error(err));
