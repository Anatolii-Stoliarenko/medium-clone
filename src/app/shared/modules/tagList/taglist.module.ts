import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagListComponent } from './components/taglist.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TagListComponent],
  exports: [TagListComponent],
})
export class TagListModule {}
