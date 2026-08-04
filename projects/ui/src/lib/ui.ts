import { Component } from '@angular/core';

/**
 * A minimal third-party library component, themed the standard way: the consuming
 * application defines a token in its global stylesheet, and the library's component styles
 * reference it.
 *
 * The library is published with partial compilation and cannot know whether a consuming
 * application will enable CSS variable namespacing.
 */
@Component({
  selector: 'lib-ui',
  template: `<p id="lib">Library component, themed by the global <code>--brand</code> token</p>`,
  styles: `
    #lib {
      color: var(--brand);
      border: 2px solid var(--brand);
      border-radius: 6px;
      padding: 8px 12px;
      display: inline-block;
    }
  `,
})
export class Ui {}
