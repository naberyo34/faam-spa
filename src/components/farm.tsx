import React from 'react';
import {
  getDate,
  getDay,
  eachDayOfInterval,
  endOfWeek,
  eachWeekOfInterval,
  startOfMonth,
  endOfMonth,
} from 'date-fns';
import { FarmDocument } from '../interfaces';

// TODO: コンポーネントの切り分けは後でやります

/**
 * 引数にとったDateから1ヶ月ぶんのカレンダーを作成して返す
 * see: http://yucatio.hatenablog.com/entry/2019/12/23/172547
 * @param date new Date()を渡すと今月が返る
 */
const getCalenderArray = (date: Date) => {
  // eachWeekOfInterval は 指定範囲の週(日曜日)の配列を返す
  // ここでdateを含む月の全ての日曜日を取得
  const weeks = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });

  // eachDayOfInterval は指定範囲の日を返す
  // ここで全ての日曜日 ~ 週末 = 1ヶ月ぶん毎日を取得
  const calender = weeks.map((sunday) =>
    eachDayOfInterval({
      start: sunday,
      end: endOfWeek(sunday),
    })
  );

  return calender;
};

const Farm: React.FC<FarmDocument> = (props) => {
  const { title, contributions } = props;
  const calendar = getCalenderArray(new Date());

  return (
    <div className="farm">
      <h2 className="farm__title">{title}</h2>
      <table className="farm__calender">
        <thead>
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((date) => {
                // 対象日がコントリビュートされているか確認
                const isContributeDay = contributions.find(
                  (contribution) =>
                    getDate(new Date(contribution.date)) === getDate(date)
                );

                return (
                  // getDay は曜日(0 ~ 6)、getDate は日付を取得
                  <td
                    key={getDay(date)}
                    className={isContributeDay ? 'farm__contributeDay' : ''}
                  >
                    {getDate(date)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Farm;
