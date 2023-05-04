import { LitElement, html, css } from 'lit';



 export class SuggestedPlan extends LitElement {
  static get properties() {
    return {
    header: { type: String },
    weekNum: { type: String },
    timeFrame: { type: Number },
    info: { type: String }
  };
}

  static get styles() {
    return css`
    :host {
      display: block;
      font-size: 15px;
    }
    .course {
      display: flex;
    }
    .week {
      width: 25%;
    }
   
    .description {
      width: 75%;
      border-bottom: 1px inset;
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
  
    `;
  }
}
customElements.define('suggested-plan', SuggestedPlan);