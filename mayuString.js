/*
Examples:

    "Kata" -> [0]
    "kaTa" -> [0,2]
    "KATA" -> [0,1,2,3]
*/

function whereUpperCaseChar(char){
    if(char.length > 0){
        if(char[0] == char[0].toUpperCase()){
            return [0];
        }
    }
    if(char.length > 1){
        if(char[1] == char[1].toUpperCase()){
            return [1];
        }
    }
    if(char.length > 2){
        if(char[2] == char[2].toUpperCase()){
            return [2];
        }
    }
    if(char.length > 1){
        if(char[3] == char[3].toUpperCase() || char[2] == char[2].toUpperCase()){
            return [2, 3];
        }
    }
    return [];
}



module.exports = { whereUpperCaseChar };