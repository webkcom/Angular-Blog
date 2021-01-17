import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from './routes';

import { LayoutModule } from '../layout/layout.module';
// import { PageNotFoundComponent } from '../share/page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        RouterModule.forRoot(Routes, { useHash: true }), // 这个定义在子模块中，但是是根路由，我们使用forRoot
    ],
    declarations: []
})
export class RoutesModule { }
