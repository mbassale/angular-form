import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {

  skuFormGroup: FormGroup;
  productDescription: string;

  constructor(formBuilder: FormBuilder) {
    this.skuFormGroup = formBuilder.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])],
      'name': ['', Validators.required],
      'description': ['', Validators.nullValidator]
    });

    this.skuFormGroup.controls['sku'].valueChanges.subscribe((value: string) => {
      console.log('SKU changed: ' + value);
    });

    this.skuFormGroup.controls['name'].valueChanges.subscribe((value: string) => {
      console.log('Name changed:  ' + value);
    });

    this.skuFormGroup.valueChanges.subscribe((form: any) => {
      console.log('Form changed: ', form);
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any, event: Event): void {
    console.log('submitted:');
    console.log(form);
  }

  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^[A-Za-z0-9\-_]+$/)) {
      return { invalidSku: true };
    } else {
      return null;
    }
  }
}
