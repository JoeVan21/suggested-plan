import { LitElement, html, css } from 'lit';



 export class SuggestedPlan extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.week = '1';
  }

  render() {
    return html`

    `;
  }
}

customElements.define('suggested-plan', SuggestedPlan);