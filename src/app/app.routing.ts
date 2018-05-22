import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CalcComponentComponent } from './calc-component/calc-component.component';
import { WordComponent } from './word/word.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const AppRoutes: Routes = [
    { path: '',component:HomeComponent},
    { path: 'calc', component: CalcComponentComponent },
    { path: 'word',component:WordComponent },
    { path: 'signup',component: SignUpComponent},
    { path: 'getData',component:GetDataComponent},
    { path: '**',component: NotfoundComponent}
    
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);