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
    nombre: new FormControl('' , [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/)]), 
    apellidos: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/)]), 
    dni: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]{8}|[XYZ][0-9]{7})[A-Za-z]$/)]), //3-own pattern
    tel: new FormControl<string>('', [Validators.required, Validators.pattern(/^(\+34)?[67][0-9]{8}$/)]), //4-own pattern

    // Bloque 2: Datos de la cuenta
    nombreUsuario: new FormControl<string>('', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[A-Za-z][A-Za-z0-9_]*$/)]), 
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    contrasena: new FormControl<string>('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/)]), 

    // Bloque 3: Preferencias de uso
    cursoInteres: new FormControl<'Tecnología' | 'Diseño' | 'Programación' | ''>('', [Validators.required]), 
    horasSemanalesDisponibles: new FormControl<number | null>(null, [Validators.required, Validators.min(2), Validators.max(40)]),
    codigoPostal: new FormControl<string>('', [Validators.required, Validators.pattern(/^(0[1-9]|[1-4][0-9]|5[0-2])[0-9]{3}$/)])  });

  isInvalidField(field: string) {
    return this.profileForm.get(field)?.invalid && (this.profileForm.get(field)?.dirty || this.profileForm.get(field)?.touched);
  }

  hasError(field: string, error: string): boolean {
    const control = this.profileForm.get(field);
    return !!(control && control.hasError(error));
  }
}
