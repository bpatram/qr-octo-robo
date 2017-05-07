// @flow

import React, { Component } from 'react';
import QrCode from './QrCode';

import './App.css';

class App extends Component {
  state = {
    qrCodes: [],
    addQrCodeValue: '',
  };

  handleAddQrCode = (evt) => {
    evt.preventDefault();

    const { qrCodes, addQrCodeValue } = this.state;

    if (addQrCodeValue !== '') {
      this.setState({
        addQrCodeValue: '',
        qrCodes: qrCodes.concat([ addQrCodeValue ]),
      });
    }
  }

  renderHeader() {
    return (
      <nav className="navbar navbar-inverse sticky-top bg-primary">
        <div className="container">
          <span className="navbar-brand">QR Octo Robo</span>
          <span className="navbar-text">a library of your QR codes</span>
        </div>
      </nav>
    );
  }

  renderBody() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            {this.renderAddQrCodeForm()}
          </div>
        </div>

        <div className="row">
          {this.state.qrCodes.map((qrCode, index) => this.renderQrCode(qrCode, index))}
        </div>
      </div>
    );
  }

  renderFooter() {
    return (
      <footer className="footer bg-faded text-muted text-center mt-4 py-4">
        Made with &#x2764; by <a className="text-muted" href="https://twitter.com/ktornwall">@ktornwall</a>
        <strong className="mx-2">&middot;</strong>
        Thanks to <a className="text-muted" href="https://github.com/neocotic/qrious">QRious</a> for QR code generation
        <strong className="mx-2">&middot;</strong>
        <a className="text-muted" href="https://github.com/ktornwall/qr-octo-robo">Get source code</a>
      </footer>
    )
  }

  renderAddQrCodeForm() {
    return (
      <form onSubmit={this.handleAddQrCode}>
        <div className="input-group">
          <input
            value={this.state.addQrCodeValue}
            onChange={(evt) => this.setState({ addQrCodeValue: evt.target.value })}
            className="form-control"
            type="text"
            placeholder="Add a new QR code"
          />
          <span className="input-group-btn">
            <button className="btn btn-outline-success" type="submit">+</button>
          </span>
        </div>
      </form>
    );
  }

  renderQrCode = (qrCode, index) => {
    return (
      <div key={index} className="col-sm-6 col-md-4 col-lg-3">
        <div className="qr-code-card">
          <div className="qr-code-card__label" title={qrCode}>
            {qrCode}
          </div>
          <QrCode
            value={qrCode}
            size={150}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    )
  }
}

export default App;
