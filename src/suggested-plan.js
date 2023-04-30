import { LitElement, html, css } from 'lit';



 export class SuggestedPlan extends LitElement {
  static properties = {
    header: { type: String },
    weekNum: { type: String },
    timeFrame: { type: String },
    header: { type: String },
    info: { type: String }
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.weekNum = '1';
    this.timeFrame= '3 Hours';
    this.header = 'Misconceptions about happiness';
    this.info =
      'In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.';
  
  }

  render() {
    return html`
    <div class="wrapper">
    <div class="weekly-syllabus">
      <div class="week">
        <p>Week</p>
        ${this.weekNum}
      </div>
      <div class="week-info">
        ${this.timeFrame}
        <p>${this.header}</p>
        <p>${this.info}</p>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define('suggested-plan', SuggestedPlan);