import { Component, OnInit } from '@angular/core';
import { MydevdayService } from 'src/app/services/mydevday.service';
import { Mydevday } from 'src/app/Mydevday';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

export class DayComponent implements OnInit{
  mydevday?: Mydevday;

  constructor(
    private mddService: MydevdayService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    // id que está na URL
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.mddService.getDay(id).subscribe((item) => (this.mydevday = item.data));

  }

}
