/**
 * @function awaitForEach
 * @description
 * Функция предназначена для асинхронного перебора массивов
 * Очень удобно использовать с async/await
 *
 * @param {Array} array Массив элементы которого подлежат перебору
 * @param {Function} asyncCallback Асинхронная функция. Передаются параметры как в методе Array.forEach
 *
 * @return {Promise}
 *
 * @example
 * // with async/await
 * const awaitForEach = require('promise-foreach')
 *
 * ...
 *
 * await awaitForEach([1, 2, 3], async (item, index, arr) => await Promise.resolve())
 * console.log('end')
 *
 * @example
 * // with promise
 * const awaitForEach = require('promise-foreach')
 *
 * ...
 *
 * awaitForEach([1, 2, 3], (item, index, arr) => Promise.resolve()).then(() => {
 *   console.log('end')
 * })
 */
async function awaitForEach(array, asyncCallback) {
  for (let index = 0; index < array.length; index++) {
    await asyncCallback(array[index], index, array)
  }
}

module.exports = awaitForEach
