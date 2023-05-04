import { LitElement, html, css } from 'lit';



 export class SuggestedPlan extends LitElement {
  static get properties() {
    return {
    header: { type: String },
    weekNum: { type: String },
    timeFrame: { type: Number },
    info: { type: String },
    summary: { type: String}
  };
}

  static get styles() {
    return css`
    :host {
      display: block;
      font-size: 15px;
    }
    .course {
      margin: 20px;
      display: flex;
    }
    .week {
      width: 25%;
      text-alight: center;
      font-size: 25px;
    }
   
    .description {
      width: 75%;
      border-bottom: 1px inset #000000;
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
    this.header = 'Header';
    this.info =
      'Filler';
      this.summary = '9 Videos (20 minutes total) 5 Readings'
  
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
        <p> ${this.summary}</p>
      </div>
    </div>
  
    `;
  }
}
customElements.define('suggested-plan', SuggestedPlan);