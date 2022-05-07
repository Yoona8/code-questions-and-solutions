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