import React from 'react';
import { FarmDocument } from '../interfaces';
import {
  getDate,
  getDay,
  eachDayOfInterval,
  endOfWeek,
  eachWeekOfInterval,
  startOfMonth,
  endOfMonth,
} from 'date-fns';

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
  const { author, title, contributions } = props;
  const calendar = getCalenderArray(new Date());
  console.log(new Date());

  return (
    <div>
      <h2>
        {author}さんの一言日記「{title}」
      </h2>
      <table>
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

                // getDay は曜日(0 ~ 6)、getDate は日付を取得
                return isContributeDay ? (
                  <td key={getDay(date)} className="contributeDay">{getDate(date)}</td>
                ) : (
                  <td key={getDay(date)}>{getDate(date)}</td>
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
