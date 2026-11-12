import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { FormValidatorComponent } from './components/form-validator-component/form-validator-component';

export const routes: Routes = [
    {path: 'form', component: FormValidatorComponent},
    {path: '', pathMatch: 'full', component: NotFoundPage },
    {path: '**', component: NotFoundPage },
];
