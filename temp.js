const multiCondiNotEmptyRegExp = new RegExp('_\\(condi,([0-9]+),([0-9]+),([0-9a-zA-Z -,/\'\.]+)\\)');
/*
 * handles _(condi,start,end,showStr)
 */
function multiCondiNotEmptyFormatter(questions, answers, questionOffset, templateString) {
    let result = templateString;
    console.log("multiCondiNotEmptyFormatter start ===========================\n");
    console.log("result: " + result + "\n");

    while (multiCondiNotEmptyRegExp,test(result)) {
        const [matchedStr, index1, index2, showStr] = multiCondiNotEmptyRegExp.exec(result);
        const start = parseInt(index1, 10) - questionOffset; // 不確定是否為整數型態，先轉換型態。
        const end = parseInt(index2, 10) - questionOffset; // 不確定是否為整數型態，先轉換型態。

        console.log("matchedStr: " + matchedStr + "\n");
        console.log("index1: " + index1 + "\n");
        console.log("index2: " + index2 + "\n");
        console.log("showStr: " + showStr + "\n");
        console.log("start: " + start + "\n");
        console.log("end: " + end + "\n");

        // 思考構想 我想要非連續數的判斷 我不要2-10這種 我要 2,4,6,5
        const answerStart = answers[start];
        console.log('answer: ' + answerStart + '\n');
        console.log(typeof(answerStart));
        console.log(answerStart);
        console.log(answerStart.length);
        // ===========================================
        let numArray = []
        switch (answerStart) {
            for (let i in numArray) {
                case numArray[i]:
                    if (numArray[i].length > 0) {
                        insertTarget = showStr;
                    };
                    break;
            };
        };
        result = _.replace(result, foundLiteral, insertTarget);
    };

    console.log('\n->\n');
    console.log('result: ' + result);
    console.log('\nnotEmptyFormatter end ===========================');
    return result;
}

function locationOrientationFormatter(answers, locationIndex, templateString) {
    console.log(answers);
    console.log("+++++++++++++++++++++++++++++++++++++");
    const locations = answers[locationIndex];
    console.log(locations);
    // assume orientation is the next one
    const orientations = answers[locationIndex + 1];
    console.log(orientations);
    // assume distances is the next one
    const distances = answers[locationIndex + 2];
    console.log(distances);
    // * assume locations and orientations have same length
    
    const result = _.zip(orientations, locations, distances)
        .map(locationSet => `${locationSet[0]} ${locationSet[1]} ${locationSet[2]} cm`);
    return _.replace(templateString, '_(location,orientation)', '<i data-focus="loca">' + grammars.joinWordArray(result) + '</i>');
}
