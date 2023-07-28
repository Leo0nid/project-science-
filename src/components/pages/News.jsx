
import news1 from '../../images/news1.jpg';
import news2 from '../../images/news2.jpg';
import news3 from '../../images/news3.jpg';
import news4 from '../../images/news4.jpg';
import news5 from '../../images/news5.jpg';
import news6 from '../../images/news6.jpg';
const News = () => {
  return (
    <div>
        <div className='news'>
            <div className="container">
            <h2 className="news__chapter">Новости</h2>
                <div className="news__wrapper">
                  <div className="news__blog">
                  <div className="news__img">
                    <img src={news1} alt="news1" />
                    </div>
                    <p className='news__desc'>
                    «Размотать клубок загадок нашего генома»: как нейросети ищут мутации в ДНК человека
                    </p>
                    <p className='news__more'>
                      Подробнее..
                    </p>
                  </div>
                  <div className="news__blog">
                  <div className="news__img">
                    <img src={news2} alt="news2" />
                    </div>
                    <p className='news__desc'>
                    Врачи создали способ стерилизовать домашнюю кошку без операции с помощью гормонов
                    </p>
                    <p className='news__more'>
                      Подробнее..
                    </p>
                  </div>
                  <div className="news__blog">
                  <div className="news__img">
                    <img src={news3} alt="news3" />
                    </div>
                    <p className='news__desc'>
                    Отечественные вузы станут первой ступенью научной карьеры для молодых ученых
                    </p>
                    <p className='news__more'>
                      Подробнее..
                    </p>
                  </div>
                  <div className="news__blog">
                  <div className="news__img">
                    <img src={news4} alt="news4" />
                    </div>
                    <p className='news__desc'>
                    Бумага, вата, корм для животных: ученые нашли оригинальное применение водорослям
                    </p>
                    <p className='news__more'>
                      Подробнее..
                    </p>
                  </div>
                  <div className="news__blog">
                  <div className="news__img">
                    <img src={news5} alt="news5" />
                    </div>
                    <p className='news__desc'>
                    ЕКА планирует разработать космический корабль для отправки людей на Луну
                    </p>
                    <p className='news__more'>
                      Подробнее..
                    </p>
                  </div>
                  <div className="news__blog">
                    <div className="news__img">
                    <img src={news6} alt="news6" />
                    </div>
                    <p className='news__desc'>
                    Air-gen превращает воздух, которым мы дышим, в электричество
                    </p>
                    <p className='news__more'>
                      Подробнее..
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News

