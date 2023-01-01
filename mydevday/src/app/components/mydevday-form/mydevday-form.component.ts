import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mydevday-form',
  templateUrl: './mydevday-form.component.html',
  styleUrls: ['./mydevday-form.component.css']
})
export class MydevdayFormComponent {
  @Input() btnText!: string

  mydevdayForm!: FormGroup

  ngOnInit(): void {
    this.mydevdayForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.mydevdayForm.get('title')!;
  }

  get text() {
    return this.mydevdayForm.get('text')!;
  }

  submit() {
    if (this.mydevdayForm.invalid) {
      return;
    }

    console.log("Enviado");
  }

}
