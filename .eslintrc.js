module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4 //동현 tab->스페이스 4개
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "off", //동현 수정 error->off
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        //동현 추가 기본값:콘솔 사용안함 -> Off
        "no-console": "off",
    }
};