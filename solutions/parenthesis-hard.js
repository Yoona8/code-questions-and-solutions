const openingParenthesisToClosingParenthesis = {
    '(': ')',
    '[': ']'
};

const openingParenthesis = new Set(Object.keys(openingParenthesisToClosingParenthesis));
const closingParenthesis = new Set(Object.values(openingParenthesisToClosingParenthesis));

const validateParenthesis = (text) => {
    const stack = [];

    for (let i = 0; i < text.length; i++) {
        const current = text[i];
  
        if (openingParenthesis.has(current)) {
            stack.push(current);
        }
  
        if (closingParenthesis.has(current)) {
            if (!stack.length) {
                return false;
            }

            const currentOpening = stack.pop();

            if (current !== openingParenthesisToClosingParenthesis[currentOpening]) {
                return false;
            }
        }
    }
  
    return !stack.length;
};

test(validateParenthesis('((((()))(())))()'), true);
test(validateParenthesis('((())'), false);
test(validateParenthesis(')('), false);
test(validateParenthesis('[])('), false);
test(validateParenthesis('[()]'), true);
test(validateParenthesis('[(])'), false);
test(validateParenthesis(']['), false);