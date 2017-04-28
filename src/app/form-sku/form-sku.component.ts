import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {

  skuFormGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.skuFormGroup = formBuilder.group({
      'sku': ['', Validators.required],
      'name': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any, event: Event): void {
    console.log('submitted:');
    console.log(form);
  }
}
