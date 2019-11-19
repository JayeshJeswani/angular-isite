import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { AccessibilityStatementComponent } from './accessibility-statement/accessibility-statement.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectPlanComponent } from './project-plan/project-plan.component';
import { ProjectPhotosComponent } from './project-photos/project-photos.component';
import { ProjectDprComponent } from './project-dpr/project-dpr.component';
import { ProjectMaterialInwardComponent } from './project-material-inward/project-material-inward.component';
import { ProjectFilesComponent } from './project-files/project-files.component';
import { ProjectTeamsComponent } from './project-teams/project-teams.component';
import { ProjectBgDetailsComponent } from './project-bg-details/project-bg-details.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'index', component: HomePageComponent },
  { path: 'project', component: ProjectComponent, children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: ProjectDetailsComponent },
      { path: 'plan', component: ProjectPlanComponent },
      { path: 'photos', component: ProjectPhotosComponent },
      { path: 'dpr', component: ProjectDprComponent },
      { path: 'material-inward', component: ProjectMaterialInwardComponent },
      { path: 'files', component: ProjectFilesComponent },
      { path: 'teams', component: ProjectTeamsComponent },
      { path: 'bg-details', component: ProjectBgDetailsComponent }
    ]
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'accessibility', component: AccessibilityStatementComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
