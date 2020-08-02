import { Component } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { AppState } from "src/shared/state/app/app.state";
import { ToggleSidenav } from "src/shared/state/app/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @Select(AppState.sideNavOpened)
  public opened$: Observable<boolean>;

  constructor(private store: Store) {}

  public toggleSideNav() {
    this.store.dispatch(new ToggleSidenav());
  }
}
