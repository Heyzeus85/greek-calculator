# greek-calculator
A calculator that expresses numbers in their Ancient Greek notation equivalent

This app is coded in HTML, CSS, and Vanilla JavaScript

I coded this as a twist on a standard calculator app. As a Greek-American I saw this as a great opportunity to include my heritage in my projects, and to code something that would serve an educational purpose.

Instructions:

1. This calculator takes in two (2) numbers as input only. That is, it can only handle problems like 'a' plus/minus/times/over 'b' = 'c'.
2. When you enter a number, if you hit the Greek button it will rewrite that number with ancient Greek number notation.
3. If you enter an expression for a calculation involving two numbers, you can hit the Greek button to rewrite both numbers with ancient Greek number notation.
4. The calculator cannot convert negative numbers (but it will calculate with them) and it will only convert numbers between 0.01 and 10,000 (the ancient Greeks had problems with these numbers as well).

Reflections:

Working on this app definitely solidified my skills in HTML, CSS and JavaScript. It was also great practice with refactoring, since adding the layer of converting our number symbols into Ancient Greek ones required several additional functions. What's more, because Ancient Greek numbering didn't allow for decimals, the translation had to be split into cases depending on whether the inputs or outputs were whole numbers or decimals.

A feature I hope to implement in the future is overcoming the limitation noted in Instruction (1) above. Currently the calculator cannot handle a chain of calculations, such as ((3+4)*5 - 1)/2.
