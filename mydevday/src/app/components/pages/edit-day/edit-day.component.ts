import { Component, OnInit } from '@angular/core';
import { Mydevday } from 'src/app/Mydevday';
import { MydevdayService } from 'src/app/services/mydevday.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-day',
  templateUrl: './edit-day.component.html',
  styleUrls: ['./edit-day.component.css']
})

export class EditDayComponent {
  mydevday!: Mydevday;
  btnText: string = "Editar";

  constructor(
    private mddService: MydevdayService, 
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.mddService.getDay(id).subscribe((item) => {
      this.mydevday = item.data;
    })
  }

  async editHandler(mydevdayData: Mydevday) {
    const id = this.mydevday.id

    const formData = new FormData()

    formData.append('title', mydevdayData.title)
    formData.append('text', mydevdayData.text)

    if (mydevdayData.image) {
      formData.append('image', mydevdayData.image);
    }

    await this.mddService.updateDay(id!, formData).subscribe();

    this.messagesService.add(`Dia com id ${id} atualizado com sucesso!`);

    this.router.navigate(['/']);

  }

}
