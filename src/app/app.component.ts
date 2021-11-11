import { Component, OnInit, VERSION } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route: any) => route.outlet === "primary"),
        mergeMap((route: any) => route.data),
        map((data: any) => {
          if (data.title) {
            return data.title;
          } else {
            return "Default App Title";
          }
        })
      )
      .subscribe(pathString => this.titleService.setTitle(pathString));
  }
}
