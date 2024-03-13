function raw (model, year){

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const list = [];

     //test case - year can't be a word **
     if(isNaN(year)){
        return "Year can't be a word";
    }

    //test case - yeaer can't be a negative **
    if(year < 0){
        return "Year can't be negative";
    }

/////////////////////////////////////////////////////////////////////////

    //test case 1 - no model or year
    if (!model || !year) {
        return 'Model and year are required';
    }
 
    //test case 2 - car year can't be before 1886
    if(year < 1886){
        return "Car Year can't be before 1886, when first car was invented";
    }

     //test case 3 - car year can't be after 2025
    if(year > 2025){
        return "Car Year can't be after 2025";
    }

    //test case 4 - year must be a whole number
    if (year % 1 !== 0) {
        return "Invalid Year, must be a whole number";
    }
 

    for(let i = 0; i < model.length; i++){
        const letter = model[i].toLowerCase();
        const index = alphabet.indexOf(letter) + 1;
        list.push(index);
    }

    let sum = 0;

    for(let i = 0; i < list.length; i++){
        sum += list[i]
    };

    totalSum = (sum * 100) + year;

    return totalSum;
}

module.exports = raw;