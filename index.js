/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from './libs/test.js';

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from 'lodash';
const source = $t.source(1);
$t.answer(1, async () => {
  // modification array object with reducer to have new object
  const targetData = source.reduce(
    (acc, obj) => {
      acc.income += obj.type === 'income' ? obj.amount : 0;
      acc.expenses += obj.type === 'expense' ? obj.amount : 0;
      acc.balance = acc.income - acc.expenses;
      acc.byCategories.Restaurants -=
        obj.category === 'Restaurants' ? obj.amount : 0;
      acc.byCategories.Income = acc.income;
      acc.byCategories.Groceries -=
        obj.category === 'Groceries' ? obj.amount : 0;
      acc.byCategories.Rent -= obj.category === 'Rent' ? obj.amount : 0;
      return acc;
    },
    {
      balance: 0,
      income: 0,
      expenses: 0,
      byCategories: {
        Restaurants: 0,
        Income: 0,
        Groceries: 0,
        Rent: 0,
      },
    }
  );

  return targetData;
});

/*
2. Asynchronous programming: 
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.
    
*/
const $source = $t.source(2);
$t.answer(2, async () => {
  // Get ids
  const ids = await $source.getIds();
  // i send the id through the parameter and it returns a list of texts
  let arrayText = await Promise.all(
    ids.map(async (id) => await $source.getText(id))
  );

  return arrayText;
});
