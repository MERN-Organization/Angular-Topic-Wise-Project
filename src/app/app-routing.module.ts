import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryModule as UserEntryModule } from './User/entry/entry.module';
import { EntryModule as AdminEntryModule } from './Admin/entry/entry.module';
import { EntryModule as PracticeEntryModule } from './Practice/entry/entry.module';

const routes: Routes = [
  { path: '', loadChildren: () => UserEntryModule },
  { path: 'admin', loadChildren: () => AdminEntryModule },
  { path: 'practice', loadChildren: () => PracticeEntryModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
