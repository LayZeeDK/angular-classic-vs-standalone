import { NgModule } from '@angular/core';
import { ChildModule } from './child.module';
import { ParentComponent } from './parent.component';

@NgModule({
  declarations: [ParentComponent],
  exports: [ParentComponent],
  imports: [ChildModule],
})
export class ParentModule {}
