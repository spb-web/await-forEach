/**
 * @function awaitForEach
 *
 * @param {Array} array Массив элементы которого подлежат перебору
 * @param {Function} asyncCallback Асинхронная функция. Передаются параметры как в методе Array.forEach
 * Функция должна всегда возвращать Promise
 *
 * @return {Promise}
 *
 * @example
 * // with async/await
 * const awaitForEach = require('await-foreach')
 *
 * ...
 *
 * await awaitForEach([1, 2, 3], async (item, index, arr) => {
 *   await Promise.resolve()
 * })
 * console.log('end')
 *
 * @example
 * // with promise
 * const awaitForEach = require('await-foreach')
 *
 * ...
 *
 * awaitForEach([1, 2, 3], (item, index, arr) => {
 *   // Должна возвращать Promise
 *   return Promise.resolve()
 * }).then(() => {
 *   console.log('end')
 * })
 */
async function awaitForEach(array, asyncCallback) {
  for (let index = 0; index < array.length; index++) {
    await asyncCallback(array[index], index, array)
  }
}

// exports
Object.defineProperty(exports, '__esModule', {
  value: true
})

exports['default'] = awaitForEach

module.exports = exports['default']
