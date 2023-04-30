import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

const importAndExport = [
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...importAndExport],
  exports: [...importAndExport],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class SharedModule {}
