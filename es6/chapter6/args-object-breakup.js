function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript"
};

const ret = getSentence(o); //"I love JavaScript"
console.log(ret);