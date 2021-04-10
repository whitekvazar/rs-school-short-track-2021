/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const resultObject = {};
  domains.forEach((domainString) => {
    const arrayOfDomains = domainString.split('.').reverse();
    let lastKey = '';
    for (let i = 0; i < arrayOfDomains.length; i++) {
      const key = `${lastKey}.${arrayOfDomains[i]}`;
      if (key in resultObject) {
        resultObject[key]++;
      } else {
        resultObject[key] = 1;
      }
      lastKey = key;
    }
  });
  return resultObject;
}

module.exports = getDNSStats;
