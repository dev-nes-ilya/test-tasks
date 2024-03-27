import React, { useState } from "react";
import { getSchedule } from "../../api/api";

import styles from "./Schedule.css";

// История
// Хитрый бекендер поменял формат возвращаемых данных из API getSchedule
// И все сломалось :)
// Вчера он попытался починить компонент Schedule, но стало только хуже

// Задача
// Починить компонент Schedule :) и вывести список дней возвращаемых из getSchedule
// В списке должны остаться только уникальные дни с понедельника по пятницу. 
// В списке должны быть записи, состоящие только из первого слова
// "Понедельник"
// "Вторник"
// Массив с данными нужно преобразовать таким образом, чтобы callback для list.map() отобразил список. 

// Условие
// getSchedule возвращает Promise
// Структуру объявления функции getSchedule менять нельзя
// Строки кода, находящиеся после return менять нельзя. 

export default function Schedule() {
  const [list, setList] = useState<any>([]);
  const excludedDays = ["Суббота","Воскресение"]

  getSchedule((data: any) => {
    setList(data);
  });

// код ниже не должен меняться
  return (
    <div>
      <div className={styles.Header}>Дни недели</div>

      <ul>
        {list.map(({ item, id }: any) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
