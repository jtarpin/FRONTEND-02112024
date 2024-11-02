import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { LaunchpadComponent } from './pages/launchpad/launchpad.component';
import { GestionDeOrdenesComponent } from './pages/gestion-de-ordenes/gestion-de-ordenes.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthGuard } from './auth/services/auth-guard.service';

export const routes: Routes = [

    // {
    //     path: '',
    //     component: AppComponent
    // },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'launchpad',
        component: LaunchpadComponent
    },
    {
        path: 'launchpad/gestion-de-ordenes',
        component: GestionDeOrdenesComponent
    },

    {
        path: 'logout',
        component: LogoutComponent
   },

];
