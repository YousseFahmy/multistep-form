import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrl: 'form.component.css',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class FormComponent {
  form = new FormArray([
    new FormGroup({ firstName: new FormControl("", { validators: [Validators.required] }) }),
    new FormGroup({ lastName: new FormControl("", { validators: [Validators.required] }) }),
  ]);
}
