import { nanoid } from '@reduxjs/toolkit';

const characteristicsData = [
  {
    id: nanoid(),
    name: 'Трансмиссия',
    data: 'Роботизированная',
  },
  {
    id: nanoid(),
    name: 'Мощность двигателя, л.с.',
    data: '249',
  },
  {
    id: nanoid(),
    name: 'Тип двигателя',
    data: 'Бензиновый',
  },
  {
    id: nanoid(),
    name: 'Привод',
    data: 'Полный',
  },
  {
    id: nanoid(),
    name: 'Объем двигателя, л',
    data: '2.4',
  },
  {
    id: nanoid(),
    name: 'Макс. крутящий момент',
    data: '370/4500',
  },
  {
    id: nanoid(),
    name: 'Количество цилиндров',
    data: '4',
  },
];

export {
  characteristicsData
};
