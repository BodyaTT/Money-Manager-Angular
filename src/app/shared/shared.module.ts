import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatCardModule } from '@angular/material';

const MODULES = [HttpClientModule, FormsModule, ReactiveFormsModule];
const MATERIAL_MODULES = [MatButtonModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatCardModule];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES,
    ...MATERIAL_MODULES
  ],
  declarations: [],
  exports: [...MODULES, ...MATERIAL_MODULES]
})
export class SharedModule { }
