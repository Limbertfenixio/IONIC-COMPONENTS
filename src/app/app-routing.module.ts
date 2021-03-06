import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo:'inicio', pathMatch: 'full'
  },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'buttons', loadChildren: './pages/buttons/buttons.module#ButtonsPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'checkbox', loadChildren: './pages/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'date-time', loadChildren: './pages/date-time/date-time.module#DateTimePageModule' },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'stepper', loadChildren: './pages/stepper/stepper.module#StepperPageModule' },
  { path: 'infinite-scroll', loadChildren: './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'datatables', loadChildren: './pages/datatables/datatables.module#DatatablesPageModule' },
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'reorder', loadChildren: './pages/reorder/reorder.module#ReorderPageModule' },
  { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
  { path: 'progressbar-range', loadChildren: './pages/progressbar-range/progressbar-range.module#ProgressbarRangePageModule' },
  { path: 'refresher', loadChildren: './pages/refresher/refresher.module#RefresherPageModule' },
  { path: 'searchbar', loadChildren: './pages/searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'segment', loadChildren: './pages/segment/segment.module#SegmentPageModule' },
  { path: 'skeleton', loadChildren: './pages/skeleton/skeleton.module#SkeletonPageModule' },
  { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'toast', loadChildren: './pages/toast/toast.module#ToastPageModule' },
  { path: 'toggle', loadChildren: './pages/toggle/toggle.module#TogglePageModule' },
  { path: 'autocomplete', loadChildren: './pages/autocomplete/autocomplete.module#AutocompletePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
