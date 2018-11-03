import { Component, OnInit } from '@angular/core';
import { News } from '../shared/models/News';
import { NewsService } from '../news/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
    
  news: Array<News>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // this.getNews();
    }

    //TODO finish news && BE
    // getNews(){
    //   this.newsService.getNewsList().subscribe(data =>{
    //     this.news = data;
    //     console.log('news service: ' + this.news);        
    //   })
    // }

}
