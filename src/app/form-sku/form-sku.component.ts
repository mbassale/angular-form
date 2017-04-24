import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {

  skuFormGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.skuFormGroup = formBuilder.group({
      'sku': ['ACB123'],
      'name': ['Product Name']
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any, event: Event): void {
    event.preventDefault();
    console.log('submitted:');
    console.log(form);
  }
}
