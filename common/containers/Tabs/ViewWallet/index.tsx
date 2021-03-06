import React, { Component } from 'react';
import translate from 'translations';
import App from 'containers/App';

export default class ViewWallet extends Component {
  public render() {
    return (
      <App>
        <section className="container">
          <div className="tab-content">
            <article className="tab-pane active">
              <article className="collapse-container">
                <div>
                  <h1>View Wallet Info</h1>
                </div>
                <div>
                  <p>{translate('VIEWWALLET_Subtitle')}</p>
                </div>
              </article>
            </article>
          </div>
        </section>
      </App>
    );
  }
}
