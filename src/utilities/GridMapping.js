export const gridMap = {
    0 : [0,0],
    1 : [0,1],
    2 : [0,2],

    3 : [1,0],
    4 : [1,1],
    5 : [1,2],

    6 : [2,0],
    7 : [2,1],
    8 : [2,2],
};

export function getGridToLinear(row,col){
    let total = (row*3) + col; 
    return total;
}

