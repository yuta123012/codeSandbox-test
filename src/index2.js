/**
 * const let
// */

// var val1 = "aaa";
// console.log(val1);

// // var変数は上書き可能

// val1 = "bbb";
// console.log(val1);

// var val1 = "ccc";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "aa";
// console.log(val2);

// let val2 = "as";

// const val3 = "不変";
// console.log(val3);

// val3 = "aaas";
// const val3 = "aaa";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "jき",
//   age : 14,
// }

//  val4.name = "aaa";
//  val4.age = 45;
// console.log(val4);

// const val5 = ['aaa' , 'bbb'];
// val5[0] = "bird";
// val5.push('monkey');
// console.log(val5);

// /**
//  * テンプレート文字列
//  */

// //  const name = "Asan";
// //  const age = 30;
// //  //名前と年齢を変数＋文字列でだす

// //  //従来
// //  const message = "私の名前は" + name + "です";
// //  console.log(message);

// //  const message2 = `私の名前は ${name}です。年齢は${age}です。`;
// //  console.log(message2);

// /**
//  * arrow関数
//  */
// //従来のやり方
// function func1(str) {
//   return str;
// }

// console.log(func1("huji"));

// //arrow
// const func2 = (str) => str;
// console.log(func2("huuh"));

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

/**
 * 分割代入
 */

//  const myProfile = {
//    name:"じゃけ",
//    age:30,
//  }

// const message = `名は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message);

// const {name , age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const myProfile = ["まる", 35];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [na,ag] = myProfile;
// const message4 = `名前は${na}で年齢は${ag}です。`;
// console.log(message4);

/**
 * デフォルとち
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);

// sayHello("jk");
