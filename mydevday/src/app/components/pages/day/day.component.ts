import { Component, OnInit } from '@angular/core';
import { MydevdayService } from 'src/app/services/mydevday.service';
import { Mydevday } from 'src/app/Mydevday';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { Comment } from 'src/app/Comments';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

export class DayComponent implements OnInit{
  mydevday?: Mydevday;
  baseApiUrl = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!: FormGroup

  constructor(
    private mddService: MydevdayService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: CommentService,
    ) {}

  ngOnInit(): void {
    // id que está na URL
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.mddService.getDay(id).subscribe((item) => (this.mydevday = item.data));

    this.commentForm = new FormGroup ({
      user_comment: new FormControl("", [Validators.required]),
      user_name: new FormControl("", [Validators.required]),
    })

  }

  get user_comment() {
    return this.commentForm.get('user_comment')!;
  }

  get user_name() {
    return this.commentForm.get('user_name')!;
  }

  async removeHandler(id: number) {
    await this.mddService.removeDay(id).subscribe()

    this.messagesService.add("Dia excluído com sucesso");
    this.router.navigate(['/']);
  
  }

  async onSubmit(formDirective: FormGroupDirective) {

    if (this.commentForm.invalid) {
      return
    }

    const data: Comment = this.commentForm.value;

    data.mydevday_id = Number(this.mydevday!.id);

    await this.commentService
    .createComment(data)
    .subscribe((comment) => this.mydevday!.comments!.push(comment.data));

    this.messagesService.add("Comentário adicionado");

    // Reseta o formulário
    this.commentForm.reset();
    formDirective.resetForm();
  }

}
