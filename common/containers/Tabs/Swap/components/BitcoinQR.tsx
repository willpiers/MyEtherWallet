import QRCode from 'qrcode.react';
import React, { Component } from 'react';

interface Props {
  paymentAddress: string | null;
  amount: number | null;
}

export default class BitcoinQR extends Component<Props, {}> {
  public render() {
    const { paymentAddress, amount } = this.props;
    return (
      <div>
        <section className="row block swap-address text-center">
          <label> Your Address </label>
          <div className="qr-code">
            <QRCode value={`bitcoin:${paymentAddress}amount=${amount}`} />
          </div>
          <br />
          <p className="text-danger">
            Orders that take too long will have to be processed manually &amp;
            and may delay the amount of time it takes to receive your coins.
            <br />
            <a
              href="https://shapeshift.io/#/btcfee"
              target="_blank"
              rel="noopener"
            >
              Please use the recommended TX fees seen here.
            </a>
          </p>
        </section>
      </div>
    );
  }
}
