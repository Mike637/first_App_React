import  "./Main.css";
import React from 'react';


class Main extends React.Component
{
  render()
  {
return (
  <main className="main">
  <div className="main__container _container">
  <div className="main__rate">
    <div className="main__rate-title">
      Курс валют на 30 ноября 2019 года
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
