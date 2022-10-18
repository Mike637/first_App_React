import  "./Main.css";
import React from 'react';
/*
data.Valute.USD.Name
*/

class Main extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
       date:"",
       currencyRate:{},
  }
  this.currentList = ["USD","EURO","BYN"];

}
sepateDate = (string) =>
{
  const monthArray = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
  let stringSplitArr = string.split("-");
  let resultString = `${stringSplitArr[2].slice(0,2)}
  ${monthArray[Number(stringSplitArr[1])-1]}
   ${stringSplitArr[0]} года`;
return resultString;
}
sepateRate = () =>
{
let array = {
  EURO:150,
  BYN:450,
  LLL:150,
  JSA:450,
  USD:12
}
}

componentDidMount()
{
  this.rateApi();
}

rateApi = () =>
  {
fetch('https://www.cbr-xml-daily.ru/daily_json.js').
then(data => data.json())
.then(data =>
  {
  this.setState({
  date: this.sepateDate(data.Date),
  currencyRate:data.Valute,
})
})
this.sepateRate();
  }
  render()
  {
return (
  <main className="main">
  <div className="main__container _container">
  <div className="main__rate">
    <div className="main__rate-title">
      Курс валют на {this.state.date}
    </div>
    <div className="main__rate-exchange">
      <div className="main__rate-container main__rate-container_first">
        <p>USD</p>
        <p>1500 Kr</p>
        <p>1200 Kr</p>
      </div>
      <div className="main__rate-container main__rate-container_second">
        <p>USD</p>
        <p>1500 Kr</p>
        <p>1200 Kr</p>
      </div>
      <div className="main__rate-container main__rate-container_third">
        <p>USD</p>
        <p>1500 Kr</p>
        <p>1200 Kr</p>
      </div>
    </div>
  </div>
  <div className="main__calculator">
    <div className="main__calculator-title">
Калькулятор обмена
    </div>
    <div className="main__calculator-container">
      <div className="main__form">
        <input type="text"/>
        <select name="rate_choise" id="rate_choise">
          <option value="usd">USD</option>
          <option value="usd">USD</option>
          <option value="usd">USD</option>
        </select>
        <input type="submit" value="Calculate"/>
        </div>
        <p>Результат</p>
        <p>0 EURO</p>
    </div>
  </div>
  </div>

  </main>
)
  }
}

export default Main;
