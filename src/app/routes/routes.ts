import { LayoutComponent } from '../layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'blog',
                pathMatch: 'full'
            },
            {
                path: 'blog',
                loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
            }
        ]
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];
