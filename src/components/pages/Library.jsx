import React from 'react';
import book1 from '../../images/book1.png';
import book2 from '../../images/book2.png';
import book3 from '../../images/book3.png';
import book4 from '../../images/book4.png';
import book5 from '../../images/book5.png';
import book6 from '../../images/book6.png';

const Library = () => {
  return (
    <div>
      
      <div className="library">
        <div className="container">
          <div className="library__chapter">Библиотека</div>
          <div className="library__wrapper">
            <div className="library__book">
              <img className="library__img" src={book1} alt="book1" />
              <p className="library__desc">
                Рассмотрены особенности возникновения, развития, строения и функционирования
                биосферы ..
              </p>
              <p className="library__more">Подробнее..</p>

              <a
                className="library__download"
                href="https://drive.google.com/file/d/1t_3tx29kiL8kgl5RJDJXynEjN-W0JQ_W/view?usp=drive_link"
                download>
                {' '}
                Скачать
              </a>
            </div>
            <div className="library__book">
              <img className="library__img" src={book2} alt="book2" />
              <p className="library__desc">
                Столяров, Мельникова: История и философия науки. Учебник для аспирантов высших
                учебных заведений физической культуры...
              </p>
              <p className="library__more">Подробнее..</p>

              <a
                className="library__download"
                href="https://drive.google.com/file/d/1t_3tx29kiL8kgl5RJDJXynEjN-W0JQ_W/view?usp=drive_link"
                download>
                {' '}
                Скачать
              </a>
            </div>
            <div className="library__book">
              <img className="library__img" src={book3} alt="book3" />
              <p className="library__desc">
                Величайший представитель культуры Возрождения Леонардо да Винчи (1452–1519)
                прославился как живописец..
              </p>
              <p className="library__more">Подробнее..</p>

              <a
                className="library__download"
                href="https://drive.google.com/file/d/1t_3tx29kiL8kgl5RJDJXynEjN-W0JQ_W/view?usp=drive_link"
                download>
                {' '}
                Скачать
              </a>
            </div>
            <div className="library__book">
              <img className="library__img" src={book4} alt="book4" />
              <p className="library__desc">
                Сто тысяч лет назад Homo sapiens был одним из как минимум шести видов человека,
                живших на этой планете..
              </p>
              <p className="library__more">Подробнее..</p>

              <a
                className="library__download"
                href="https://drive.google.com/file/d/1t_3tx29kiL8kgl5RJDJXynEjN-W0JQ_W/view?usp=drive_link"
                download>
                {' '}
                Скачать
              </a>
            </div>
            <div className="library__book">
              <img className="library__img" src={book5} alt="book5" />
              <p className="library__desc">
                "Краткая история времени" Стивена Хокинга - один из столпов современной
                научно-популярной литературы..
              </p>
              <p className="library__more">Подробнее..</p>

              <a
                className="library__download"
                href="https://drive.google.com/file/d/1t_3tx29kiL8kgl5RJDJXynEjN-W0JQ_W/view?usp=drive_link"
                download>
                {' '}
                Скачать
              </a>
            </div>
            <div className="library__book">
              <img className="library__img" src={book6} alt="book6" />
              <p className="library__desc">
                Известный физик Митио Каку исследует кажущиеся сегодня неправдоподобными технологии,
                явления или приборы с точки зрения возможности их воплощения в будущем..
              </p>
              <p className="library__more">Подробнее..</p>

              <a
                className="library__download"
                href="https://drive.google.com/file/d/1t_3tx29kiL8kgl5RJDJXynEjN-W0JQ_W/view?usp=drive_link"
                download>
                {' '}
                Скачать
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
