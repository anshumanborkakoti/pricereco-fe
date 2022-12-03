import { PlannerComponent } from './planner/planner.component';
import { KpiComponent } from './kpi/kpi.component';
import { OptimizerComponent } from './optimizer/optimizer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'optimize',
    component: OptimizerComponent
  },
  {
    path: 'kpi',
    component: KpiComponent
  },
  {
    path: 'planner',
    component: PlannerComponent
  },
  {
    path: '**',
    redirectTo: '/optimize'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
