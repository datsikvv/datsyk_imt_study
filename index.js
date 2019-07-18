// var a = "Hello world!";

// console.log(a); 


// console.time('start');

// for (var i = 0; i >= 1000; i++) {

// 	}

// console.timeEnd('start');


// if (true) {
// 	var a = "Hello world!";
// }



// const a = "Hello world!";
// a ="test";

// console.log(a);

// const	arr = [1, 2, 3];
// arr.push = '55';

// console.log(arr);



// let user = {
// 	id: 1,
//     name: "Adam"
// };

// user.name = "Ewa";
// user.code = "HY47";

// console.log(user);


// const	fs = require('fs');

// const data = fs.readFileSync('data.txt', 'utf-8');

// console.log(data);


// const fs = require('fs'); 

// fs.readFile('//data.txt', 'utf-8',  function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });



const fs = require('fs'); 
let data = 'Hello world';

fs.writeFile('data.txt', data, function(err) {
  //if (err) throw err;
  //console.log('The file has been saved!');
  fs.readFile('data.txt', 'utf-8',  function(err, data) {
    if (err) throw err;
    console.log(data);
});
  });












































