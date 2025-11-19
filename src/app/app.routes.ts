import { Routes } from '@angular/router';
import { Home } from './component/shared/home/home';
import { PlistBlog } from './component/shared/feature/blog/plist/plist';
import { ViewBlog } from './component/shared/feature/blog/view/view';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: PlistBlog },
  { path: 'blog/view/:id', component: ViewBlog },
];
