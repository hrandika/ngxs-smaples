import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector } from "@ngxs/store";
import { ToggleSidenav } from "./app.actions";

export class AppStateModel {
  sidenavOpened: boolean;
}

@Injectable()
@State<AppStateModel>({
  name: "app",
  defaults: { sidenavOpened: true },
})
export class AppState {
  @Selector()
  static sideNavOpened(state: AppStateModel) {
    return state.sidenavOpened;
  }

  @Action(ToggleSidenav)
  public toggleSidenav({ patchState, getState }: StateContext<AppStateModel>) {
    return patchState({ sidenavOpened: !getState().sidenavOpened });
  } //toggleSidenav()
}
