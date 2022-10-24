import  "./Main.css";
import React from 'react';

class Main extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
       date:"",
       currencyRate:{},
       result:0,
       error:"",
  }
  this.currentList = ["USD","EUR","CZK"];
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
sepateRate = (array) =>
{
let res = {};
try
{
  this.currentList.forEach((element) => {
  res[element] = array[element];
  if (!array[element])
  {
    delete res[element];
    console.error(`Value of key '${element}' is not defined!`)
  }
    });
}
catch(e)
{
  throw new TypeError(`Error! It is not possible to apply method 'forEach'.
  Check type of property 'this.currentList'.`,e)
}

if (Object.keys(res).length == 0)
{
  throw new Error("Error! Object 'res' is empty");
}
return res;
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
    console.log(data.Valute)
    this.setState({
  date: this.sepateDate(data.Date),
  currencyRate:this.sepateRate(data.Valute),
})
})
  }
calc = (e) =>
{
e.preventDefault();
let currentRateName = e.target.elements["rate_choise"].value;
let currentRateValue = this.state.currencyRate[currentRateName].Value;
let currentRateNominal = this.state.currencyRate[currentRateName].Nominal;
let value = e.target.elements["text"].value;
let result = currentRateValue/currentRateNominal*value;
this.setState({result:result.toFixed(2),
error:""});

if (isNaN(result) || result < 0)
{
this.setState({error:"Ошибка! Вы ввели некорректное значение"});
}
}
  render()
  {
  let rateObject = this.state.currencyRate;
return (
  <main className="main">
  <div className="main__container _container">
  <div className="main__rate">
    <div className="main__rate-title">
      Курс валют на {this.state.date}
    </div>
    <div className="main__rate-exchange">
    {Object.keys(rateObject).map((element,index) =>
      <div className= {`main__rate-container main__rate-container ${index+1}`} key = {rateObject[element].ID}>
        <p>{element}</p>
<p>{rateObject[element].Value.toFixed(2)}</p>

        <p>{rateObject[element].Nominal} {rateObject[element].Name}</p>
      </div>)}


    </div>
  </div>
  <div className="main__calculator">
    <div className="main__calculator-title">
Калькулятор обмена
    </div>
    <div className="main__calculator-container">
      <div className="main__form">
      <form onSubmit={this.calc}>
        <input type="text" name="text"/>
        <select name="rate_choise" id="rate_choise">
        {Object.keys(rateObject).map(element =>
          <option value = {element} key = {rateObject[element].ID}>{element}</option>)}
        </select>
        <input type="submit" name="calculate" defaltvalue="Calculate"/>
        </form>
        </div>
        <p>Результат</p>
        {this.state.error === ""? <p>{this.state.result} RUB</p>: <p>{this.state.error}</p>}
    </div>
  </div>
  </div>
  </main>
)
  }
}

export default Main;
