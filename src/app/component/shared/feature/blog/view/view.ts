import { Component } from '@angular/core';
import { BlogService } from '../../../../../service/blog';
import { IBlog } from '../../../../../model/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class ViewBlog {
  oBlog: IBlog | null = null;

  constructor(private oBlogService: BlogService, private route: ActivatedRoute) {
    // Obtener el ID del blog desde la ruta
    const idParam = this.route.snapshot.paramMap.get('id');
    const blogId = idParam ? Number(idParam) : NaN;
    if (isNaN(blogId)) {
      console.error('Invalid blog id:', idParam);
      return;
    }
    this.getBlog(blogId);
  }

  ngOnInit() {}

  getBlog(blogId:number) {    
    this.oBlogService.get(blogId).subscribe({
      next: (data) => {
        this.oBlog = data;
      },
      error: (error) => {
        console.error('Error fetching blog:', error);
      },
    });
  }
}
