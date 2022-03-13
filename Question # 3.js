 console.log(1 + "2" + "2"); /*part a */

// Reason:

//  Here we are adding integer (1) to string (2 in double-quotes) and adding with string (2 in double-quotes).
//  Javascript does concatenation. It combines all so it's simply print 122.
 
 console.log(1 + + "1" + "2"); /*part b */

// Reason:

// After 1 it has + + "2". In addition, JS has left to right associativity. We know that concatenation will be
// performed when integer adds with string. In this case, also first concatenation will be done then we have
// second + and 2 will be its treats like integer so the addition will be performed so 1+2 =3 and 2 print as it is.
// so the output is 32.


console.log(1 + -"2" + "2"); /*part c */

// Reason:

// After 1 it has + - "1". In addition and subtraction also JS has left to right associativity. We know that
// concatenation will be performed when integer adds with string. In this case, also first concatenation will be
// done on + then we have - and 1 will be its treats like integer so the addition will be performed so 1-1 =0
// and 2 print as it is. so the output is 02.

 console.log( "A" - "B" + "2"); /*part d */

// Reason:

// Here we are trying to subtract 2 strings. We know the result of this operation is will Not A Number. So JS
// prints NaN than it prints 2 as a string. (Note: between strings + will be treats as concatenation and - will be
// general subtraction).

console.log( "A" - "B" + 2); /*part e */

// Reason:

// Here also we are trying to subtract 2 strings. But here we are taking 2 as an integer so it will not be printed.
// So it gives just NaN.
