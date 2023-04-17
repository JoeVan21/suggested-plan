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
    <div class="outline">
    <div class="weekly-syllabus">
      <div class="week">Week ${this.week}</div>
      <div class="week-info">${this.compTime}</div>
    </div>
  </div>
    `;
  }
}

customElements.define('suggested-plan', SuggestedPlan);