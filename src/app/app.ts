import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Ui } from 'ui';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, Ui],
  template: `
    <h3>Angular Material</h3>
    <button matButton="filled" id="matbtn">Filled button</button>

    <h3>Minimal local library (same mechanism, no Material)</h3>
    <lib-ui />
  `,
  styles: `
    :host {
      display: block;
      font-family: system-ui, sans-serif;
      padding: 16px;
    }
    h3 {
      font-size: 13px;
      font-weight: 600;
      color: #666;
      margin: 20px 0 8px;
    }
  `,
})
export class App {}
