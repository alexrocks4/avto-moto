import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './secondary-info.module.scss';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import ButtonTab from '../button-tab/button-tab';
import Characteristics from '../characteristics/characteristics';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

const Tab = {
  CHARACTERISTICS: 'characteristics',
  REVIEWS: 'reviews',
  CONTACTS: 'contacts',
};

function SecondaryInfo({ className }) {
  const [ activeTab, setActiveTab ] = useState(Tab.CHARACTERISTICS);

  const tab = {
    [Tab.CHARACTERISTICS]: <Characteristics />,
    [Tab.REVIEWS]: <Reviews />,
    [Tab.CONTACTS]: <Contacts />,
  };

  const handleButtonTabClick = (tabName, evt) => {
    evt.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <section className={classNames(className, styles['secondary-info'])}>
      <h2 className="visually-hidden">Дополнительная информация</h2>
      <WrapperFluid>
        <div>
          <ButtonTab
            isActive={activeTab === Tab.CHARACTERISTICS}
            onClick={handleButtonTabClick.bind(null, Tab.CHARACTERISTICS)}
          >
            Характеристики
          </ButtonTab>
          <ButtonTab
            isActive={activeTab === Tab.REVIEWS}
            onClick={handleButtonTabClick.bind(null, Tab.REVIEWS)}
          >
            Отзывы
          </ButtonTab>
          <ButtonTab
            isActive={activeTab === Tab.CONTACTS}
            onClick={handleButtonTabClick.bind(null, Tab.CONTACTS)}
          >
            Контакты
          </ButtonTab>
        </div>
        {tab[activeTab]}
      </WrapperFluid>
    </section>
  );
}

SecondaryInfo.propTypes = {
  className: PropTypes.string.isRequired,
};

SecondaryInfo.defaultProps = {
  className: '',
};

export default SecondaryInfo;
