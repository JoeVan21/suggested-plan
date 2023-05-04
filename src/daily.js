import { LitElement, html, css } from 'lit';
import './suggested-plan.js';

export class Daily extends LitElement {
  static get tag() {
    return 'daily';
  }

  static get properties() {
    return {
      dailys: { type: Array },
    };
  }

  constructor() {
    super();
    this.dailys = [];
    this.updateDaily();
  }

  updateDaily() {
    const address = new URL('../api/daily.js', import.meta.url).href;
    fetch(address)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then(data => {
        this.dailys = data;
      });
  }

  static get style() {
    return css``;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.dailys.map(
          daily => html`
            <div class="item">
              <plan-template
                weekNum="${daily.weekNum}"
                timeFrame="${daily.timeFrame}"
                header="${daily.header}"
                info="${daily.info}"
              >
              </plan-template>
              <div></div>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define(Daily.tag, Daily);