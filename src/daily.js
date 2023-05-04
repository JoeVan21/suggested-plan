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
    const address = '../api/daily.js';
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
    return css`
    .wrapper {
      border: 2px solid overscroll-behavior-block;
    }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.dailys.map(
          daily => html`
            <div class="item">
              <suggested-plan
                weekNum="${daily.weekNum}"
                timeFrame="${daily.timeFrame}"
                header="${daily.header}"
                info="${daily.info}"
                summary="${daily.summary}"
              >
              </suggested-plan>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define(Daily.tag, Daily);