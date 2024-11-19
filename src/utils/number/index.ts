/**
 * 천 단위로 ,찍는 함수
 * @example
 * console.log(nuberWithCommas(100000)); // result: 100,000
 */
export const numberWithCommas = (x: number) => {
  return x.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
