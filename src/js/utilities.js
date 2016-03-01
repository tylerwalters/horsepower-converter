/**
 *
 * @param num
 * @returns {*}
 */
export function formatNumber(num) {
  if (num > 1) {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return num;
  }
}