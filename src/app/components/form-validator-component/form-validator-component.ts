import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-validator-component',
  styleUrl: './form-validator-component.css',
  templateUrl: './form-validator-component.html',
})
export class FormValidatorComponent {
  // Bloque 1: Datos personales
   profileForm = new FormGroup({
    nombre: new FormControl('' , [Validators.required, Validators.minLength(2), Validators.maxLength(30)]), //falta al pattern
    apellidos: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]), //mismo pattern que en name
    dni: new FormControl('', [Validators.required]), //own pattern
    tel: new FormControl<number>(0, [Validators.required]), //own pattern

    // Bloque 2: Datos de la cuenta
    nombreUsuario: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]), //own pattern
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    contrasena: new FormControl<string>('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),

    // Bloque 3: Preferencias de uso
    cursoInteres: new FormControl<'Tecnología' | 'Diseño' | 'Programación' | ''>(''), //cont
    horasSemanalesDisponibles: new FormControl<number>(0),
    codigoPostal: new FormControl<string>('')
  });

  isInvalidField(field: string) {
    return this.profileForm.get(field)?.invalid && (this.profileForm.get(field)?.dirty || this.profileForm.get(field)?.touched);
  }

}
