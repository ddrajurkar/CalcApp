import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CalcComponentComponent } from './calc-component/calc-component.component';
import { WordComponent } from './word/word.component';
import { GetDataComponent } from './get-data/get-data.component';

export const AppRoutes: Routes = [
    { path: 'calc', component: CalcComponentComponent },
    { path: 'word',component:WordComponent },
    { path: 'getData',component:GetDataComponent}
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);