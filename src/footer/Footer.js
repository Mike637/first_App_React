import  "./Footer.css";
import React from 'react';


class Footer extends React.Component
{
  render()
  {
return (
  <footer className="footer">
  <div className="footer__container _container">
<div className="footer__reserved">
<p>2019 &copy; React Lite Level</p>
<p>All Rights Reserved</p>
</div>
<div className="footer__map">
<p>Карта сайта</p>
<p>Google site map</p>
</div>
<div className="footer__about_us">
<p>Контакты</p>
<p>Гарантии</p>
<p>О сервисе</p>
<p>Условие возврата</p>
<p>Соглашение о использовании сервиса</p>
</div>
</div>
</footer>
)
  }
}

export default Footer;
