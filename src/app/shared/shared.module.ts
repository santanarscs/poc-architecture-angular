import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  exports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
})
export class SharedModule {}
