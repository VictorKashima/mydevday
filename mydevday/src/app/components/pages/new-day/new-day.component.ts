import { Component } from '@angular/core';

import { Mydevday } from 'src/app/Mydevday';

import { MydevdayService } from 'src/app/services/mydevday.service';

@Component({
  selector: 'app-new-day',
  templateUrl: './new-day.component.html',
  styleUrls: ['./new-day.component.css']
})
export class NewDayComponent {

  btnText = "Compartilhar"

  constructor(private mydevdayService: MydevdayService) {}

  async createHandler(mydevday: Mydevday) {

    const formData = new FormData()

    formData.append("title", mydevday.title)
    formData.append("text", mydevday.text)

    if (mydevday.image) {
      formData.append("image", mydevday.image);
    }

    // Enviar para o service
    await this.mydevdayService.createDay(formData).subscribe();

    // Exibir mensagem

    // Redirect

  }

}
