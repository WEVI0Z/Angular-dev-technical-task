import { Inject, Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({providedIn: "root"})
export class AdditionalValidators {
    passwordMatch(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const password = control.get("password");
            const passwordRepeat = control.get("passwordRepeat");

            if(password?.value !== passwordRepeat?.value) {
                return {"passwordMismatch": true};
            } else {
                return null;
            }
        }
    }
}