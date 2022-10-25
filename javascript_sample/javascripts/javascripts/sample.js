let firstName = "Taro";

function greeting() {
  let familyName = "DIVE";
  console.log(familyName,firstName); //関数の外で定義された変数を呼び出す
}

greeting();
console.log(familyName);