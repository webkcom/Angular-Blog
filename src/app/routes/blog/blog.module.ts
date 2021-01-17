import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';

// 定义的路由
const routes: Routes = [
  { path: '', redirectTo: 'article-list' },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // 子模块注入路由要用forChild
    HttpClientModule,
    FormsModule,
  ],
  // 路由中使用了的component要在这里declaration
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ]
})
export class BlogModule { }
