import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly TOP_BUTTON_CONFIGS = {
    '/ranking' : {
      label: 'Changer le classement !',
      url: 'versus',
    },
    '/versus' : {
      label: 'Voir le classement !',
      url: 'ranking',
    },
  };

  constructor(private readonly router: Router) {}

  /**
   * Get the top button config
   * depends on current url
   */
  get topButtonConfig(): { label: string; url: string } {
    const CURRENT_URL = this.router.url;
    return this.TOP_BUTTON_CONFIGS[CURRENT_URL];
  }

  /**
   * Navigate to the configured url
   */
  navigate(): void {
    this.router.navigate([this.topButtonConfig.url]);
  }
}
