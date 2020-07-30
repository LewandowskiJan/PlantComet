import { Directive } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appIsNumeric]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IsNumericDirective, multi: true }]
})
export class IsNumericDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const isValid = this.isNumeric(control.value);
    if (isValid) {
      return null;
    }
    return { accountNumber: true };
  }

  isNumeric(val: any): boolean {
    return !(val instanceof Array) && (val - parseFloat(val) + 1) >= 0 && val > 0;
  }
}
