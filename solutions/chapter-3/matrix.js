const matrix = [
    [1, 2, 3], 
    [0, 2, 6], 
    [7, 4, 1], 
    [2, 7, 0]
];

const transposeMatrix = (matrix) => {
    const result = [];

    matrix.forEach((item, index) => {
        for (let i = 0; i < item.length; i++) {
            if (!result[i]) {
                result[i] = [];
            }
            
            result[i][index] = item[i];
        }
    });

    return result;
};

console.log(transposeMatrix(matrix));