import React from 'react';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props)

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
              <Options />
            </select>
            to
            <select name="to" value={this.state.to} onChange={this.updateTo}>
              <Options />
            </select>
          </div>
          <p className="exchangeRate">1 {this.state.base} = {this.state.rate} {this.state.to}</p>
      </div>
    );
  }
}

class Options extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currencies: [
        'GBP',
        'USD',
        'EUR',
        'CAD',
        'AUD',
        'BGN',
        'NZD',
        'ILS',
        'RUB',
        'PHP',
        'CHF',
        'JPY',
        'TRY',
        'HKD',
        'MYR',
        'HRK',
        'CZK',
        'IDR',
        'DKK',
        'NOK',
        'HUF',
        'MXN',
        'THB',
        'ISK',
        'ZAR',
        'BRL',
        'SGD',
        'PLN',
        'INR',
        'KRW',
        'RON',
        'CNY',
        'SEK'
      ]
    }
  }

  render(){
    return(
      <>
        {this.state.currencies.map((c) => {
          return <option value={c}>{c}</option>
        })}
      </>
    )
  }
}
export default App;
