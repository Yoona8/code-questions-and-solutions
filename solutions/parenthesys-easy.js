/*
-- HOW IT WORKS --
Create a stack, add to stack if the parenthesis opens, remove if closes.
If there is not enough opening parenthesis - return false, otherwise true.

-- CORRECTNESS --
The algorithm adds only the opening parenthesis to the stack and
removes when meets the closing one at the same level.

So even if the closing comes first, the algorithm returns false.

-- TIME COMPLEXITY --
In worst case scenario the algorithm iterates over all values,
so it takes O(n) time.

-- MEMORY CONSUMPTION --
Additional memory is used to create a stack - O(n).
*/
const validateParenthesis = (text) => {
    const stack = [];

    for (let i = 0; i < text.length; i++) {
        const current = text[i];
  
        if (current === '(') {
            stack.push(current);
        }
  
        if (current === ')') {
            if (!stack.length) {
                return false;
            }
        
            stack.pop();
        }
    }
  
    return !stack.length;
};

test(validateParenthesis('((((()))(())))()'), true);
test(validateParenthesis('((())'), false);
test(validateParenthesis(')('), false);