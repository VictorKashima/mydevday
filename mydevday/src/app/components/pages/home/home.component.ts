import { Component, OnInit } from '@angular/core';
import { MydevdayService } from 'src/app/services/mydevday.service';
import { Mydevday } from 'src/app/Mydevday';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  allDays: Mydevday[] = [];
  days: Mydevday[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch
  searchTerm: string = ""

  constructor(private mydevdayService: MydevdayService) {}

  ngOnInit(): void {
    this.mydevdayService.getDays().subscribe((items) => {

      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.allDays = data
      this.days = data

    });
  }

  search(e: Event): void {

    const target = e.target as HTMLInputElement
    const value = target.value

    this.days = this.allDays.filter(day => {
      return day.title.toLowerCase().includes(value);
    });

  }

}
