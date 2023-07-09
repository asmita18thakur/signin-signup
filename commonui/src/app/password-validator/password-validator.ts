import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    // Password pattern with minimum 8 characters, at least one uppercase letter, one lowercase letter, one special character, and one number
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,}$/;

  if (!passwordRegex.test(password)) {
    const errors: ValidationErrors = {};

    if (password.length < 8) {
      errors['invalidLength'] = true;
    }

    if (!/[a-z]/.test(password)) {
      errors['noLowercase'] = true;
    }

    if (!/[A-Z]/.test(password)) {
      errors['noUppercase'] = true;
    }

    if (!/\d/.test(password)) {
      errors['noNumber'] = true;
    }

    if (!/[!@#$%^&*()]/.test(password)) {
      errors['noSpecialCharacter'] = true;
    }

    return errors;
  }

  return null;
}

export function ConfirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password?.value !== confirmPassword?.value) {
    return { passwordMismatch: true };
  }
  if (confirmPassword?.errors && confirmPassword?.errors?.['invalidPassword']) {
    return { invalidConfirmPassword: true };
  }

  return null;
}