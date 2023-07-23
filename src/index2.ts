import { concat } from "lodash";
export function test1() {
  var array = [1];
  var other = concat(array, 2, [3], [4]);

  console.log(other);
}
