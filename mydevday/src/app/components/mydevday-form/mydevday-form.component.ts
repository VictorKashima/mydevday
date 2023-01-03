import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mydevday } from 'src/app/Mydevday';

@Component({
  selector: 'app-mydevday-form',
  templateUrl: './mydevday-form.component.html',
  styleUrls: ['./mydevday-form.component.css']
})
export class MydevdayFormComponent {
  @Output() onSubmit = new EventEmitter<Mydevday>()
  @Input() btnText!: string
  @Input() mydevdayData: Mydevday | null = null;

  mydevdayForm!: FormGroup

  ngOnInit(): void {
    this.mydevdayForm = new FormGroup({
      id: new FormControl(this.mydevdayData ? this.mydevdayData.id: ''),
      title: new FormControl(this.mydevdayData ? this.mydevdayData.title: '', [Validators.required]),
      text: new FormControl(this.mydevdayData ? this.mydevdayData.text: '', [Validators.required]),
      image: new FormControl(this.mydevdayData ? this.mydevdayData.image: ''),
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

    console.log(this.mydevdayForm.value);
    this.onSubmit.emit(this.mydevdayForm.value);

  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0]

    this.mydevdayForm.patchValue({image: file})

  }

}
