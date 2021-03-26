import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    children:
      [
        {
          path: 'home',
          component: HomePageComponent
        },
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }
      ],
  },
  {
    path: 'auth',
    component: LoginPageComponent,
    // children: [
    //   {
    //     path: 'auth',
    //     component: LoginComponent,
    //   }
    // ]
    // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path : 'statistic',
    //     component : StatisticComponent
    //   },
    // ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
