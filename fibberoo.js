/**
 * Created by gviloria on 9/20/16.
 */

function fib(){
  let a = 0;
  let b = 0;
  let c = 1;
  for(let i = 1; i <= 100; i++){
    a = b;
    b = c;
    c = a + b;
    console.log(a+"");
  }
}

console.log(fib());