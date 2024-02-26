import { cross } from "d3-array";
import { CartesianProduct } from "js-combinatorics";

function find_combination(sq) {
  const required_amount = 200;
  let cartSet = cross(sq.slice(0, -2).split(""), ["", "+", "-"]);
  let result = {
    count: 0,
    variants: [],
  };
  const findCommonSet = () => {
    let counter = 0;
    let lst = [];
    let item = [];
    for (let i = 0; i < cartSet.length; i++) {
      item.push(cartSet[i][0] + cartSet[i][1]);
      counter++;
      if (counter % 3 === 0) {
        item;
        lst.push(item);
        item = [];
      }
    }
    return lst;
  };
  let combList = findCommonSet();
  combList.push([sq.slice(-2, -1)]);
  combList = new CartesianProduct(...combList);
  combList = [...combList];
  for (let i = 0; i < combList.length; i++) {
    if (eval(combList[i].join("")) === required_amount) {
      result["count"]++;
      result["variants"].push([combList[i].join("")]);
    }
  }
  return result;
}

console.log(find_combination("9876543210"));
