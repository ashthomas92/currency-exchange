import React from 'react';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      base: 'GBP',
      to: 'USD',
      rate: 0
    }

    this.updateBase = this.updateBase.bind(this);
    this.updateTo = this.updateTo.bind(this);
    this.doApiCall = this.doApiCall.bind(this);

  }

  componentDidMount(){
    this.doApiCall();
  }

  doApiCall(){
    let request = `https://api.exchangeratesapi.io/latest?base=${this.state.base}&symbols=${this.state.to}`;
    const that = this;
    fetch(request).then((response) => response.json())
          .then(function(data) {
            that.setState({
              rate: data.rates[Object.keys(data.rates)[0]].toFixed(2)
            })
          })
          .catch((error) => console.log(error));
  }

  updateBase(e){
    this.setState({
      base: e.target.value
    }, function(){
      this.doApiCall();
    });
  }

  updateTo(e){
    this.setState({
      to: e.target.value
    }, function(){
      this.doApiCall();
    });
  }

  render(){
    return (
      <div className="App">
          <h1>Exchange Rate Finder</h1>
          <div className="currencySelector">
            <select name="base" value={this.state.base} onChange={this.updateBase}>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BGN">BGN</option>
              <option value="NZD">NZD</option>
              <option value="ILS">ILS</option>
              <option value="RUB">RUB</option>
              <option value="CAD">CAD</option>
              <option value="PHP">PHP</option>
              <option value="CHF">CHF</option>
              <option value="AUD">AUD</option>
              <option value="JPY">JPY</option>
              <option value="TRY">TRY</option>
              <option value="HKD">HKD</option>
              <option value="MYR">MYR</option>
              <option value="HRK">HRK</option>
              <option value="CZK">CZK</option>
              <option value="IDR">IDR</option>
              <option value="DKK">DKK</option>
              <option value="NOK">NOK</option>
              <option value="HUF">HUF</option>
              <option value="MXN">MXN</option>
              <option value="THB">THB</option>
              <option value="ISK">ISK</option>
              <option value="ZAR">ZAR</option>
              <option value="BRL">BRL</option>
              <option value="SGD">SGD</option>
              <option value="PLN">PLN</option>
              <option value="INR">INR</option>
              <option value="KRW">KRW</option>
              <option value="RON">RON</option>
              <option value="CNY">CNY</option>
              <option value="SEK">SEK</option>
            </select>
            to
            <select name="to" value={this.state.to} onChange={this.updateTo}>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="BGN">BGN</option>
              <option value="NZD">NZD</option>
              <option value="ILS">ILS</option>
              <option value="RUB">RUB</option>
              <option value="CAD">CAD</option>
              <option value="PHP">PHP</option>
              <option value="CHF">CHF</option>
              <option value="AUD">AUD</option>
              <option value="JPY">JPY</option>
              <option value="TRY">TRY</option>
              <option value="HKD">HKD</option>
              <option value="MYR">MYR</option>
              <option value="HRK">HRK</option>
              <option value="CZK">CZK</option>
              <option value="IDR">IDR</option>
              <option value="DKK">DKK</option>
              <option value="NOK">NOK</option>
              <option value="HUF">HUF</option>
              <option value="MXN">MXN</option>
              <option value="THB">THB</option>
              <option value="ISK">ISK</option>
              <option value="ZAR">ZAR</option>
              <option value="BRL">BRL</option>
              <option value="SGD">SGD</option>
              <option value="PLN">PLN</option>
              <option value="INR">INR</option>
              <option value="KRW">KRW</option>
              <option value="RON">RON</option>
              <option value="CNY">CNY</option>
              <option value="SEK">SEK</option>
            </select>
          </div>
          <p className="exchangeRate">1 {this.state.base} = {this.state.rate} {this.state.to}</p>
      </div>
    );
  }
}

export default App;
