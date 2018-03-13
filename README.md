# Install
#### npm
``` npm install --save await-foreach ```
#### yarn
``` yarn add await-foreach ```
<a name="awaitForEach"></a>

## awaitForEach(array, asyncCallback) ⇒ <code>Promise</code>
Функция предназначена для асинхронного перебора массивов
Очень удобно использовать с async/await

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Массив элементы которого подлежат перебору |
| asyncCallback | <code>function</code> | Асинхронная функция. Передаются параметры как в методе Array.forEach |

**Example**  
```js
// with async/await
const awaitForEach = require('promise-foreach')

...

await awaitForEach([1, 2, 3], async (item, index, arr) => await Promise.resolve())
console.log('end')
```
**Example**  
```js
// with promise
const awaitForEach = require('promise-foreach')

...

awaitForEach([1, 2, 3], (item, index, arr) => Promise.resolve()).then(() => {
  console.log('end')
})
```
