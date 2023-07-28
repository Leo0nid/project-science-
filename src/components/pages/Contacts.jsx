import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Contacts = () => {
  return (
    <div>
      <div className="contacts">
        <div className="container">
          <h2 className="contacts__chapter">Контакты</h2>
          <div className="contacts__wrapper">
            <div className="contacts__map">
              <p className="contacts__here">Мы находимся:</p>
              <YMaps>
                <Map defaultState={{ center: [62.061538, 129.744566], zoom: 10 }}>
                  <Placemark geometry={[62.061538, 129.744566]} />
                </Map>
              </YMaps>
            </div>
            <ul className="contacts__wrapper-link">
              <li className="contacts__link">
              Якутск, ул. Труда 1, биотехнологическая лаборатория Технопарк Якутия Государственное
              автономное учреждение «Технопарк Якутия» Адрес: Труда 1 
              Номер телефона: +79241688855
              
              </li>
              <li className="contacts__link">Адрес: Труда 1</li>
              <li className="contacts__link">Номер телефона: +79241688855</li>
              <li className="contacts__link">
                <a
                  href="Tzeentch1993@mail.ru
">
                  {' '}
                  Tzeentch1993@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;