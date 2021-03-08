module.exports = function repeater(str, options) {
    let {
        repeatTimes,
        separator = '+',
        addition,
        additionRepeatTimes,
        additionSeparator = '|'
    } = options;
    if(typeof (addition)==="undefined"){
        addition=''
    }
    if (repeatTimes){
        parseInt(repeatTimes)
    }
    else{
        repeatTimes=1
    }
    if (additionRepeatTimes){
        parseInt(additionRepeatTimes)
    }
    else{
        additionRepeatTimes=1
    }
    let subStr = (addition + additionSeparator)
        .repeat(additionRepeatTimes)
        .split(additionSeparator)
        .slice(0, -1)
        .join(additionSeparator);
    return (str + subStr + separator)
        .repeat(repeatTimes)
        .split(separator)
        .slice(0, -1)
        .join(separator);
}