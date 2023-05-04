import { LitElement, html, css } from 'lit';



 export class SuggestedPlan extends LitElement {
  static properties = {
    header: { type: String },
    weekNum: { type: String },
    timeFrame: { type: Number },
    header: { type: String },
    info: { type: String }
  }

  static get styles() {
    return css`
    .week {
      width: 25%;
    }
   
    .description {
      width: 75%;
    }

    @media screen and (min-width: 300px) and (max-width: 800px) {
      .course {
        font-size: 14px;
      }
  `;
  }

  constructor() {
    super();
    this.weekNum = '1';
    this.timeFrame= '2';
    this.header = 'MHeader';
    this.info =
      'Filler';
  
  }

  render() {
    return html`
    <div class="wrapper">
    <div class="course">
      <div class="week">
        <p>Week</p>
        ${this.weekNum}
      </div>
      <div class="description">
        ${this.timeFrame} hours to complete
        <p>${this.header}</p>
        <p>${this.info}</p>
      </div>
    </div>
  </div>
    `;
  }
}
customElements.define('suggested-plan', SuggestedPlan);