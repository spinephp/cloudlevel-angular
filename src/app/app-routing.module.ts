import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SupportComponent } from './support/support.component';
import { HomeResolveService } from './home/home-resolve.service';
import { SupportResolveService } from './support/support-resolve.service';
import { DeviceComponent } from './device/device.component';
import { UserAgreementComponent } from './user-agreement/user-agreement.component';
import { UserAgreementResolveService } from './user-agreement/user-agreement-resolve.service';
import { AnalysisAgreementResolveService } from './analysis-agreement/analysis-agreement-resolve.service';
import { AnalysisAgreementComponent } from './analysis-agreement/analysis-agreement.component';
import { PrivacyPolicyResolveService } from './privacy-policy/privacy-policy-resolve.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: {data: HomeResolveService}},
  // { path: 'news', component: NewsComponent, resolve: {data: NewsResolveService} },
  // { path: 'products', loadChildren: './goods/goods.module#GoodsModule'},
  // { path: 'member', loadChildren: './member/member.module#MemberModule'},
  { path: 'device', component: DeviceComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, resolve: {data: PrivacyPolicyResolveService }},
  { path: 'privacy-policy/:languageid', component: PrivacyPolicyComponent, resolve: {data: PrivacyPolicyResolveService }},
  { path: 'user-agreement', component: UserAgreementComponent, resolve: {data: UserAgreementResolveService}},
  { path: 'user-agreement/:languageid', component: UserAgreementComponent, resolve: {data: UserAgreementResolveService}},
  { path: 'analysis-agreement', component: AnalysisAgreementComponent, resolve: {data: AnalysisAgreementResolveService}},
  { path: 'analysis-agreement/:languageid', component: AnalysisAgreementComponent, resolve: {data: AnalysisAgreementResolveService}},
  { path: 'support', component: SupportComponent, resolve: {data: SupportResolveService}},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
