// match-fields-validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchFieldsValidator(
  field1: string,
  field2: string,
  errorKey: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control1 = formGroup.get(field1);
    const control2 = formGroup.get(field2);

    if (!control1 || !control2) return null;

    if (control1.value !== control2.value) {
      control2.setErrors({ [errorKey]: true });
      return { [errorKey]: true };
    } else {
      if (control2.hasError(errorKey)) {
        delete control2.errors?.[errorKey];
        if (Object.keys(control2.errors || {}).length === 0) {
          control2.setErrors(null);
        }
      }
      return null;
    }
  };
}
