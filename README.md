# async/await with forEach | Используем async/await с forEach

## About | Что это
Это функция для асинхронного перебора массивов

Весь код представлен ниже. Можете его просто скопировать в свое приложение.
Или можете установить с npm
```js
async function awaitForEach(array, asyncCallback) {
  for (let index = 0; index < array.length; index++) {
    await asyncCallback(array[index], index, array)
  }
}
```

## Install | Установка
#### npm
``` npm install --save await-foreach ```
#### yarn
``` yarn add await-foreach ```

<a name="awaitForEach"></a>

## awaitForEach(array, asyncCallback) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Массив элементы которого подлежат перебору |
| asyncCallback | <code>function</code> | Асинхронная функция. Передаются параметры как в методе Array.forEach Функция должна всегда возвращать Promise |

**Example**  
```js
// with async/await
const awaitForEach = require('await-foreach')

...

await awaitForEach([1, 2, 3], async (item, index, arr) => {
  await Promise.resolve()
})
console.log('end')
```
**Example**  
```js
// with promise
const awaitForEach = require('await-foreach')

...

awaitForEach([1, 2, 3], (item, index, arr) => {
  // Должна возвращать Promise
  return Promise.resolve()
}).then(() => {
  console.log('end')
})
```
