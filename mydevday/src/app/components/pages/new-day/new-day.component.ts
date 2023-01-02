import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Mydevday } from 'src/app/Mydevday';

import { MydevdayService } from 'src/app/services/mydevday.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-day',
  templateUrl: './new-day.component.html',
  styleUrls: ['./new-day.component.css']
})
export class NewDayComponent {

  btnText = "Compartilhar"

  constructor (
    private mydevdayService: MydevdayService,
    private messageService: MessagesService,
    private router: Router,
    ) {}

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
    this.messageService.add("Dia adicionado com sucesso!")


    // Redirect
    this.router.navigate(['/']);

  }

}
