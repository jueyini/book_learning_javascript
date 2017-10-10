# [책] 러닝 자바스크립트
이 문서는 책의 모든 것을 다루기보다 개인적으로 새롭게 경험한 것들을 위주로 정리했습니다.


## 개발도구 설치
### 1.npm패키지관리
언더스코어 설치
```bash
$ npm installl under_score
underscore@1.8.3 node_modules\underscore
```
이를 진행하면 최신의 버전이 설치된다. 만약 특정 버전을 설치하고자 한다면 다음와 같이 버전 번호를 명시적으로 지정한다.
```bash
$ npm install underscore@1.8.0
underscore@1.8.3 node_modules\underscore
```
모듈이 설치된 위치는 프로젝트 루트를 보면 새 서브디렉터리인 **node_modules**가 생겨있다. 로컬 모듈은 이 디렉터리에 설치된다. 이번에는 **node_modules**를 삭제하자. 이 디렉터리는 이후에 곧 다시 만들 것이다.

개발을 하다보면 이 처럼 설치하는 모듈이 늘어날 것이다. 이러한 모듈을 의존성이라고 부른다. **npm**은 이러한 패키지를 관리하기 위해 **package.json** 파일을 통해 의존성을 관리한다.
**package.json**은 직접 만들 필요 없이 아래 처럼 명령을 내리고 몇가지 질문에 답하면 생성된다.

```bash
$ npm init
```

의존성은 **일반 의존성**과 **개발 의존성**으로 나뉜다. **개발 의존성**은 앱을 실행할 때는 필요 없지만, 프로젝트를 개발할 때 필요하거나 도움이 되는 패키지를 말한다. 

지금 부터는 로컬 패키지를 설치할때 **--save** 또는 **--save-dev** 플래그를 사용한다. 만약 이 플래그를 쓰지 않는 다면 **package.json**에는 등록되지 않는다.
**--save** 플래그를 써서 언더스코어를 다시 설치해보자.
```bash
$ npm install --save underscore
npm WARN package.json lj@1.0.0 No description
npm WARN package.json lj@1.0.0 No Repository field
underscore@1.8.3 node_modules\underscore
```
(※ 이 경고는 패키지 구성 요소가 빠져있다는 경고이지만 npm을 통해 패키지를 배포하려는 것이 아니면 책에서는 이 경고를 무시해도 된다고 한다.)

**언더스코어** 설치에 **--save** 플래그를 이용하여 설치했다. 이제 **package.json** 파일을 열어 보면 언더스코어가 추가된 것을 볼 수 있다.

의존성 관리가 가능한 것은, **package.json** 파일에서 패키지 이름과 버전 번호를 읽고 필요 패키지를 다시 내려받아 설치할 수 있기 때문이다. 그렇다면 **node_modules** 디렉터리를 다시 삭제하고 난뒤 다음의 명령으로 **package.json**에 정의된 내용을 가지고 필요한 패키지를 자동으로 설치하도록 해보자

```bash
$ npm install
```

다시 확인 해보면 프로젝트 루트에 **node_modules** 디렉터리가 생성된것을 확인할 수 있고 디렉터리를 열어보면 자동으로 설치된 패키지들을 확인할 수 있다.

### 2. 빌드 도구:: 걸프와 그런트
개발 과정에는 빌드를 자동으로 해줄 도구가 필요하다. 현재 자바스크립트에서 가장 널리 쓰이는 빌드 도구는 **그런트(Grunt)**(http://gruntjs.com/)와 **걸프(Gulp)**(http://gulpjs.com/)이다.
자바스크립트 개발을 시작하는 프로그래머들이 **걸프**를 선택하는 경우가 점점 늘어나고 있어 책에서는 **걸프**를 사용한다.

먼저 걸프를 전역으로 설치해보자.

```bash
$ npm install -g gulp
```

리눅스나 맥OS에서 **-g** npm 프래그를 사용하기 위해 관리자 권한이 필요할 수 도 있다. **sudo npm install -g gulp** 명령을 내리면, 슈퍼유저 비밀번호를 묻는 프롬프트가 나타날 수 있다.
걸프를 **-g** npm 플래그를 이용해 전역으로 설치하는 것은 개발에 사용할 컴퓨터에 한 번만 하면 된다고 한다.
걸프는 최종 사용자에게는 필요 없지만, 개발 과정에서 도움이 되는 개발 의존성에 속하므로 아래 명령 처럼 **--save-dev** 를 이용하여 설치한다.

```bash
$ npm install --save-dev gulp
```

### 3. 프로젝트 구조
걸프와 바벨을 써서 ES6 코드를 ES5 코드로 바꾸기 전에 코드를 어디에 저장할지 생각해야 한다. 자바스크립트 개발에서 프로젝트 레이아웃을 어떻게 구성하는지 정한 국제 표준은 없지만 많은 개발자들이 소스코드를 src나 js 디렉터리에 저장하는 경우가 많다.

이 책에서는 **서버 쪽 코드는 프로젝트 루트의 es6 디렉터리**에 저장하고 **브라우저 코드는 public/es6 디렉터리**에 저장한다. 그리고 다음 섹션에서는 **ES6 코드를 ES5 코드로 변환하는데** 이것은 distribution의 약자인 **dist 디렉터리**에 저장한다.

이 처럼 구성한 프로젝트 루트는 다음과 같은 모양이 될 것이다.

<img src="https://jueyini.github.io/assets/article_images/2017-08-16-es6-develop-tool/2-project-struct.png" alt="프로젝트구조">


(※ 빨간줄은 이 글을 작성하기 전에 실습하며 생긴 이후의 소스들이므로 무시해도 된다.)

### 4. 트랜스컴파일러
책이 쓰이던 시점에 가장 널리 쓰이는 트랜스컴파일러는 **바벨**와 **트레이서**이다. 이 책에서는 트랜스컴파일러로 바벨을 사용한다.  
바벨 버전 6부터는 ES5를 ES6으로 변환하려면 ES6 변환 프리셋을 설치하고 바벨이 해당 프리셋을 사용하게끔 설정 해야 한다.

**먼저 ES6 프리셋을 설치한다.**

```bash
npm install --save-dev babel-preset-es2015
```

**프로젝트 루트에 .babelrc 파일을 만든다.**
```
{"presets":["es2015"]}
```
이 파일이 있으면 프로젝트에서 바벨을 사용할 때 ES6를 사용한다는 것을 인식하게 된다.

### 5. 바벨을 걸프와 함께 사용하기
설명했듯이 걸프는 반복 작업을 자동화하는 빌드 도구이다. 이번에는 걸프에 바벨을 연결하여 es6와 public/es6 에 있는 ES6코드를 ES5로 변환하여 dist와 public/dist에 저장할 것이다.

우선 아래의 명령으로 **gulp-babel** 패키지를 설치한다.

`npm install --save-dev gulp-babel`

그리고 **gulpfile.js**를 다음과 같이 수정한다.

```js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('default',function(){
    //노드소스
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    
    //브라우저 소스
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
})
```

걸프는 파이프라인 개념으로 작업을 처리합니다. 먼저 변환할 피일을 src("es6/\*\*/*.js") 로 지정했다. *\**는 '서브디렉터리를 포함해 모든 디렉터리'를 뜻하는 와일카드이다. 따라서 이 소스 필터는 서브디렉터리 깊이에 관계없이 es6에 있는 모든 .js 파일을 선택한다. 이 소스파일을 바벨에 파이프로 연결하고 바벨은 ES6 코드를 ES5 코드로 변형한다. 마지막 단계에서는 컴파일된 ES5 코드를 dist 디렉터리에 저장한다. 

이제 ES6 샘플 파일을 만들고 걸프 설정이 제대로 동작하는지 확인해보자.
ES6의 새 기능을 사용하는 파일 **es6/test.js**을 만든다.

```js
'use strict';

const sentences = [
    {subject: 'JavScript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'large'}
];

function say({subject,verb,object}){
    console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentences){
    say(s);
}
```

그리고 이 파일을 **public/es6**에 복사하자. 이제 **gulp** 명령으로 빌드해보자.

`$ gulp`

작업이 끝나면 **dist**와 **public/dist** 디렉터리를 보면 바벨에 의해 트랜스컴파일되어 배포된 **test.js**가 있을 것이다. 이제 ES6 코드를 바로 실행해 보자.

`$ node es6/test.js`

```
JavScript is great
Elephants are large
```
이번에는 dist에 배포된 ES5로 트랜스컴파일 된 **test.js**를 실행해 보자.

`$ node dist/test.js`

```
JavScript is great
Elephants are large
```

### 6. 린트
린트 프로그램은 당신의 코드를 세심히 검토해서 자주 일어나는 실수를 알려준다. 책의 필자는 25년째 소프트웨어를 만들고 있지만, 아직도 실수를 저지르고 린트 프로그램이 찾아 준 다음에나 발견하곤 한다고 한다.(동현: 객기 부리지말기..)

책에서 필자는 니콜라스 자카스^NicholasZakas^의 **ESLint**를 추천하며 이를 설치하라 한다.

`$ npm install -g eslint`

**ESLint**를 사용하기 전에 프로젝트에 쓸 설정 파일 **.eslintrc**를 만들어야 한다. 프로젝트마다 다른 표준이나 규칙에 따라 작업해야 할 수도 있고, 그에 맞게 **.eslintrc** 파일을 만들어 **ESLint**의 린트 규칙을 적용할 수 있다.

프로젝트 루트에서 아래의 명령을 내리고 몇 가지 질문에 답하면 기본 **.eslintrc** 파일이 만들어 진다.(책에서의 답변을 참고하자.)

`$ eslint -init`

```
? How would you like to configure ESLint? Answer questions about yo
ur style
? Are you using ECMAScript 6 features? Yes
? Are you using ES6 modules? Yes
? Where will your code run? Node
? Do you use JSX? No
? What style of indentation do you use? Tabs
? What quotes do you use for strings? Double
? What line endings do you use? Windows
? Do you require semicolons? Yes
? What format do you want your config file to be in? JavaScript
Successfully created .eslintrc.js file in C:\node
```
ESlint를 사용하는 방법은 다음과 같다.
- eslint es6/test.js 처럼 직접 수행해도 되고
- 에디터에 통합하면 편리하지만 방법이 에디터와 운영체제마다 전부 다르다. 에디터에 통합하길 원한다면 에디터 이름 뒤에 eslint를 붙여 검색해보자
- 마지막으로 Gulpfile에 ESLint를 추가하는 방법이다. 다음을 보라.

먼저 다음 명령을 실행하자

`$ npm install --save-dev gulp-eslint`

그리고 **gulpfile.js**를 다음과 같이 수정한다.

```js
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default',function(){
    //ESLint를 실행합니다.
    gulp.src(["es6/**/*.js","public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
    
    //노드소스
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    
    //브라우저 소스
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
})
```

Gulpfile에 ESLint를 추가했으므로 걸프를 실행해 보자.

`$ gulp`

```
[00:22:26] Using gulpfile C:\node\gulpfile.js
[00:22:26] Starting 'default'...
[00:22:27] Finished 'default' after 127 ms
[00:22:33]
C:\node\es6\test.js
   1:1   error  Strings must use doublequote                      quotes
   4:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   4:15  error  Strings must use doublequote                      quotes
   4:34  error  Strings must use doublequote                      quotes
   4:48  error  Strings must use doublequote                      quotes
   5:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   5:15  error  Strings must use doublequote                      quotes
   5:34  error  Strings must use doublequote                      quotes
   5:49  error  Strings must use doublequote                      quotes
   9:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   9:5   error  Unexpected console statement                      no-console
  13:1   error  Expected indentation of 1 tab but found 4 spaces  indent

C:\node\public\es6\test.js
   1:1   error  Strings must use doublequote                      quotes
   4:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   4:15  error  Strings must use doublequote                      quotes
   4:34  error  Strings must use doublequote                      quotes
   4:48  error  Strings must use doublequote                      quotes
   5:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   5:15  error  Strings must use doublequote                      quotes
   5:34  error  Strings must use doublequote                      quotes
   5:49  error  Strings must use doublequote                      quotes
   9:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   9:5   error  Unexpected console statement                      no-console
  13:1   error  Expected indentation of 1 tab but found 4 spaces  indent

✖ 24 problems (24 errors, 0 warnings)
  22 errors, 0 warnings potentially fixable with the `--fix` option.
  ```
어이쿠... 눈이야.. 일단 공통되는 에러를 추려보면 다음과 같다.
- Strings must use doublequote 
- Expected indentation of 1 tab but found 4 spaces  indent
- Unexpected console statement

위에 에러는 다음과 같은 이유에 각각 매칭된다.

- 문자열에 쌍따옴표를 안써서
- 탭을 쓰지 않고 스페이스로 되어 있어서, 이를 설정하지 않을시 기본적으로 스페이스바 4개로 설정된다.
- 기본값으로 콘솔 사용시 에러가 발생하게 된다.

이러한 에러들은 **.eslintrc** 파일을 수정하여 설정을 바꾸거나 끌 수 있다. 다음은 **ESLint의 가이드**(http://eslint.org)를 참고하여 수정한 내용이다. 

**책에서도 이러한 규칙을 비활성화하는 부분을 우리들의 연습문제로 남겨 두었다. **ESLint**사이트의 가이드를 참고하여 설정을 수정해보자.**

```
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
```

참고:
- ESLint 설정 - [http://eslint.org/docs/user-guide/configuring](http://eslint.org/docs/user-guide/configuring)
- ESLint 규칙 - [http://eslint.org/docs/rules/ ](http://eslint.org/docs/rules/)

본인의 경우 VSCode를 사용하는데 탭 사용시 기본적으로 스페이스로 변환 된다..그래서 위의 설정에서 질문에서 답하여 설정한 탭이 아닌 스페이스 4개로 변경했다. 

이제 ES6 코드를 작성하고, ES5 코드로 트랜스컴파일하고, 린트로 개선할 수 있게 되었다. ES6을 본격적으로 배울 준비가 끝난 것이다.

**나는 책의 모든 내용을 다루진 않을 것이며, ES6으로 넘어 오면서 추가된 부분과 ES6 이전 에서는 경험하지 못한 것들 그리고 몇가지 기초를 되새김질 하게 될 것이다.**

## 리터럴과 변수, 상수, 데이터 타입

### 1. 변수와 상수 중 어떤것을 써야 하는가?

- 될 수 있으면 변수보다 상수를 써야한다.
- 상수를 사용하면 값을 바꾸지 말아야 할 데이터에서 실수로 값을 바꾸는 일이 줄어든다.
- 상수를 쓰면 안되고 항상 변수를 써야 하는 상황도 있다. 예를 들어 루프제어에는 변수를 써야 한다.
- 시간이 지나며서 값이 바뀌는 경우에도 변수를 써야 한다.
- 하지만 일단 상수를 쓰는 습관을 들이면, 변수가 꼭 필요한 상황이 생각보다 훨씬 적다는 걸 알고 놀라게 될 것이다.
- 이 책의 예제는 가능하면 항상 변수 대신 상수를 쓰도록 노력했다.

### 2. ES6에 템플릿 문자열이 도입됐다.

값을 문자열 안에 써야 하는 일이 아주 많다. 이때 문자열 병합을 통해 변수나 상수를 문자열 안에 쓸 수 있다.

```js
let currentTemp = 19.5;
//00b0는 온도를 나타내는 유니코드 코드 포인트입니다.
const message = "The current temperature is " + currentTemp + "\u00b0C";
console.log(message);
```

이 기능을 문자열 채우기라 부르기도 하며, 문자열 템플릿은 문자열의 정해진 위치에 값을 채워 넣는 간편한 방법이다. **문자열 템플릿에는 큰따옴표나 작은따옴표를 쓰지 않고 백틱을 사용 한다.** 다음의 예제는 문자열 템플릿을 사용하도록 하는 예제이다.

```js
let currentTemp = 19.5;
//00b0는 온도를 나타내는 유니코드 코드 포인트입니다.
const message = `The current temperature is ${currentTemp} \u00b0`;
console.log(message);
```

## 제어문

### 1. ES6에 for...of 문이 추가되었다.

for...of 문은 각 요소의 인덱스를 알 필요가 없을 때 알맞다.
```js
const hand = [randFace(),randFace(),randFace()];
for (let face of hand)
    console.log(`You rolled...${face}!`);
```

## 표현식과 연산자

### 1. 비교연산 일치, 동등함의 이해

비교 연산자는 이름처럼 두개의 값을 비교한다. 크게 말해 비교 연산자는 일치함(=\==), 동등함(==), 대소 관계의 세가지 타입으로 타뉜다.

- **일치(===)**, 두 값이 같은 객체를 가리키거나, 타입이 같고 값고 같은 경우 값을 일치한다고 하며 =\==의 반대인 !==를 쓸 수 있다.
- **동등(==)**, 두 값이 같은 객체를 가리키거나 같은 값을 갖도록 변환할 수 있다면 두 값을 동등하다고 한다. 예를 들어 문자열 "33"은 숫자 33으로 변환할 수 있으므로 이 둘은 동등하다 하며 == 연산자 또는 반대인 != 연산자를 사용할 수 있다.
- 관계 연산자는 너무도 잘 알기에 다루지 않겠다.

**다음은 일치 연산자와 동등 연산자의 예이다.**

```js
const n = 5;
const s= "5";

n === s;    //false -- 타입이 다릅니다.
n !== s;    //true
n === Number(s);    //true --문자열 "5"를 숫자 5로 변환했습니다.
n !== Number(s);    //false

n == s; //true; 권장하지 않습니다.
n != s; //false; 권장하지 않습니다.

const a = { name: "an object"};
const b = { name: "an object"};

a === b; //false; -- 객체는 항상 다릅니다.
a !== b; //true;

a == b; //false; 권장하지 않습니다.
a != b; //true; 권장하지 않습닏다.
```

### 2. 해체 할당

**ES6에서 새로 도입한 해체 할당은 매우 환영 받는 기능이다.** 이 기능은 객체나 배열을 변수로 '해체'할 수 있다. 다음의 예제를 보자.

객체를 해체할 때는 반드시 변수 이름과 객체의 프로퍼티 이름이 일치해야 한다.
```js
//객체 선언 
const obj = {b:2, c:3, d:4};

//해체 할당
const {a, b, c} = obj;
a;  //undefined: obj에는 "a"프로펕티가 없습니다.
b;  //2
c;  //3
d;  //ReferenceError: "d"는 정의되지 않았습니다.
```

배열을 해체할 때는 배열 요소에 대응할 변수 이름을 마음대로 쓸 수 있으며 이들은 배열 순서대로 대응한다.
```js
// 배열 선언
const arr = [1, 2, 3];

// 배열 해체 할당
let [x, y] = arr;
x;  //1
y;  //2
z; //ReferenceError: "z"는 정의되지 않았습니다.
```

6장에서 배울 **확산 연산자**를 사용하면 배열을 해채할 때 남는 요소를 새 배열에 할당할 수 있다.
```js
// 배열 선언
const arr = [1, 2, 3, 4, 5];

// 배열 해체 할당
let [x, y, ...rest] = arr;
x;  //1
y;  //2
rest;  //[3,4,5]
```

### if문을 단축 평가하는 OR 표현식으로 바꾸기

할당이 주 목적인 if 문은 단축 평가를 사용하는 OR 표현식을 써서 간결하게 줄일 수 있다.
``if(!options) options = {};``

앞의 코드는 다음과같이 쓸 수 있다.
``options = options || {};``

## 함수

### 1. 매개변수 해체

5장에서 해체할당에 관해 배웠듯, 함수의 매개변수도 해체할 수 있다. 다음의 예제를 보자.

**객체를 변수로 해체**

```js
function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript"
};

const ret = getSentence(o); //"I love JavaScript"
```

**배열을 해체**

```js
function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const arr = [ "I", "love", "JavaScript"];
const ret = getSentence(arr); //"I love JavaScript"
```

**확산 연산자(...)를 써서 매개변수를 이용할 수 있다.**

```js
function addPrefix(prefix, ...words) {
    // 나중에 더 좋은 방법을 배웁니다.
    const prefixedWords = [];
    for(let i=0; i<words.length; i++) {
        prefixed = prefix + words[i];
    }
    return prefixedWords;
}

const ret = getSentence(arr); // [converse","convex"]
```

ES5에서는 arguments를 사용했다. arguments는 실제 배열이 아니라 배열 비슷한 객체이므로 특별 취급하거나 일반적인 객체로 변환해야 했다.**ES6에서는 확산 매개변수를 사용해 이런 약점을 해결했다.**

### 2. 매개변수 기본값

**ES6에서는 매개변수에 기본값을 지정하는 기능이 추가 되었다.**

```js
function f(a,b = "default", c = 3){
    return `${a} - ${b} - ${c}`;
}

f(5,6,7);    //"5 - 6 - 7"
f(5,6);    //"5 - 6 - 3"
f(5);    //"5 - default - 3"
f();    //"undefined - default - 3"
```

### 3. 화살표기법

**화살표기법은 ES6에서 새로만든 것이다.** 화살표 함수는 함수형 프로그램밍을 자바스크립트에 도입하는 중요한 열쇠이다.

**화살표 함수에는 세가지 단축 문법이 있다.**

- function을 생략해도 됩니다.
- 함수에 매개변수가 단 하나 뿐이라면 괄호 (( ))도 생략할 수 있습니다.
- 함수 바디가 표현식 하나라면 중괄호와 return도 생략할 수 있습니다.

다음 예제를 보자
```js
const f1 = function() {return "hello";}
//또는
const f1 = () => "hello!";

const f2 = function(name) {return `hello, ${name}`;}
//또는
const f2 = name => "Hello, ${name}";

const f3 = function(a,b) {return a+b;}
//또는
const f3 = (a,b) => a + b;
```

(화살표 함수와 일반적인 함수에느 중요한 차이가 있다. 화살표 함수는 this가 다른 변수와 마찬가지로 정적으로 묵인다. greetBackwards 예제를 살펴보라.)

### 4. call과 apply, bind

자바스크립트에서는 일반적인 방법 외에도, 함수를 어디서, 어떻게 호출 했느냐와 관계없이 this가 무엇인지 지정할 수 있다. 먼저 call 메서드부터 시작하자.
call메서드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있다.


함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다. call의 첫번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달된다.

```js
const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
    return `Hello, I'm ${this.name}!`;    
}

greet();    // "Hello, I`m undefined!" - this는 어디에도 묶이지 않았습니다.
greet.call(bruce);  // "Hello, I`m Bruce!" - this는 bruce 입니다.
greet.call(madeline);  // "Hello, I`m Madeline!" this는 madeline입니다.
```

함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다. call의 첫번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달된다.

```js
function update(birthYear,occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
//bruce는 이제 { name: "Bruce", birthYear: 1949, 
//              Occupation:"singer"} 입니다.

update.call(madeline, 1942, 'actress');
//bruce는 이제 { name: "Madeline", birthYear: 1942, 
//              Occupation:"actress"} 입니다.
```

apply는 함수 매개변수를 처리하는 방법은 call과 완전히 같습니다.. call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만 apply 매개변수를 배열로 받습니다.

```js
update.apply(bruce, [1955, "actor"]);
//bruce 이제 {name: "Bruce", birthYear: 1955,
//          occupation: "actor"} 입니다.
update.apply(madeline, [1918, "writer"]);
//bruce 이제 {name: "Bruce", birthYear: 1955,
//          occupation: "writer"} 입니다.
```

ES6의 확산연산자를 사용해도 apply와 같은 결과를 얻을 수 있습니다.

```js
const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // apply(bruce, newBruce)와 같습니다.
Math.min(...arr);		// -5
Math.max(...arr);		// 15
```

this의 값을 바꿀 수 있는 마지막 함수는 bind입니다. bind를 사용하면 함수의 this 값을 영구히 바꿀 수 있습니다. update 메서드를 이리저리 옮기면서도 호출 할 때 this 값은 항상 bruce가 되게끔, call이나 apply, 다른 bind와 함께 호출하더라도 this 값이 bruce가 되도록 하려면 bind를 사용합니다.

```js
const updateBruce = update.bind(bruce);

updateBruce(1904,"actor");
//bruce 이제 {name: "Bruce", birthYear: 1955,
//          occupation: "actor"} 입니다.
updateBruce.call(madeline,1274,"king");
//bruce 이제 {name: "Bruce", birthYear: 1274,
//          occupation: "king"} 입니다.
//madeline은 변하지 않습니다.
```

bind에 매개변수를 넘기면 항상 그 매개변수를 받으면서 호출되는 새 함수를 만드는 효과가 있습니다. 예를 들어 bruce가 태어난 해를 항상 1949로 고정하지만, 직업은 자유롭게 바꿀 수 있는 업데이트 함수를 만들고 싶다면 다음과 같이 하면 됩니다.

```js
const updateBruce1949 = update.bind(bruce,1949);
updateBruce1949("singer, songwriter");
// bruce는 이제 {name: "Bruce", birthYear: 1949,
//          occupation: "singer, songwriter"} 입니다.
```

## 스코프

### 1. 즉시 호출하는 함수 표현식

함수 표현식을 사용하면 즉시 호출하는 함수 표현식(IIFE)이란 것을 만들 수 있스빈다. IIFE는 함수를 선언하고 즉시 실행합니다. IIFE는 다음과 같은 형태를 취합니다.

```
(function(){
	//IIFE 바디
})();
```
함수 표현식으로 익명 함수를 만들고 그 함수를 즉시 호출합니다. IIIFE의 장점은 내부에 있는 것들이 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로 그 스코프 밖으로 무언가를 내보낼 수 있다는 겁니다.

```js
const message = (function(){
    const secret = "I`m a secret";
    return `The secret is ${secret.lengh} character long.`;
})();
console.log(message);
```

### 2. 함수 스코프와 호이스팅

let으로 변수를 선언하면, 그 변수는 선언하기 전에는 존재하지 않습니다. var로 선언한 변수는 현재 스코프 안이라면 어디서든 사용할 수 있으며, 심지어 선언하기도 전에 사용할 수 있습니다.

let을 쓰면, 변수를 선언하기 전 사용하려 할 때 에러가 일어납니다.

```js
x; // ReferenceError: x는 정의되지 않았습니다.
let x = 3;	// 에러가 일어나서 실행이 멈췄으므로 여기에는 결코 도달할 수 없습니다.
```

반면 var로 변수를 선언하면 선언하기 전에도 사용할 수있습니다.

```js
x;	//u ndefined
var x = 3;
x;	// 3
```

var의 경우 선언한 변수는 끌어올린다는 뜻의 호이스팅이라는 매커니즘을 따릅니다. 자바스크립트는 함수나 전역 스코프 전체를 살펴보고 var로 선언한 변수를 맨 위로 끌어 올립니다. 여기서 중요한 것은 선언만 끌어 올려진다는 것이며, 할당은 끌어 올려지지 않는다는 겂니다. 자바스크립트는 위에 코드를 아래 처럼 해석합니다.

```js
var x;	//선언(할당은 아닌)이 끌어 올려집니다.	
x;	// undefined
var x = 3;
x;	// 3
```
### 3. 함수 호이스팅

함수 선언도 var 처럼 스코프 맨위로 끌어 올려집니다.따라서 함수를 선언하기 전에 호출할 수 있습니다.

```js
f();	// 'f'
function f() {
	console.log.('f');
}
```

잠깐! 그러나 아래처럼 변수에 할당한 함수 표현식은 끌어 올려지지 않습니다.
```
f();
let f = function() {
	console.log('f');
}
```

### 4. 사각지대

사각지대란, let으로 선언하는 변수는 선언하기 전까지 존재하지 않는다는 직관적 개념을 잘 나타내는 표현입니다. 스코프 안에서 변수의 사각지대는 변수가 선언되기 전의 코드 입니다.

typeof 연산자는 변수가 선언됐는지 알아볼 때 널리 쓰이고, 존재를 확인하는 안전한 방법으로 알려져 있다. 즉, let 키워드가 도입되기 전까지는 아래의 코드는 항상 안전하며 에러가 발생하지 않습니다.

```js
if(typeof x === "undefined"){
	console.log("x doesn't exist or is undefined");    
} else {

}
```

그러나 다음과 같은 경우는 let으로 변수를 선언하면 안전하지 않습니다. 
(아래의 코드에서는 **"ReferenceError: x is not defined"** 에러가 발생한다.)

```js
if(typeof x === "undefined"){
	console.log("x doesn't exist or is undefined");    
} else {

}
let x = 5;
```

ES6에서는 let로 인해 선언하지 않은 변수를 사용할 일이 적어지므로 typeof 연산자로 변수가 정의됐는지 확인할 필요가 없으므로 typeof가 문제를 일으킬 소지는 거의 없다.(이렇게 해석했다..)


### 5. 스트릭트 모드

ES5 문법에서는 암시적 전역 변수라는 것이 생길 수 있었습니다. 암시적 전역 변수는 여러가지 골치 아픈 에러를 일으키곤 했습니다. 간단히 말해 var로 변수를 선언하는 것을 잊으면 자바스크립트는 전역 변수를 참조하려 한다고 간주하고, 그런 전역 변수가 존재하지 않으면 스스로 만들었습니다. 

이런 이유로 자바스크립트에서는 스트릭트 모드를 도입했습니다. 스트릭트 모드에서는 암시적 전역 변수를 허용하지 않습니다. 스트릭트 모드를 사용하려면 "use strict" 하나만으로 이루어진 행을 코드 맨 앞에 쓰면 됩니다.

전역 스코프에서 "use strict"를 사용하면 스크립트 전체가 스트릭트 모드로 실행되고, 함수 안에서 "use strict"를 사용하면 해당 함수만 스트릭트 모드로 실행됩니다.

```js
(function(){
	'use strict';
    
    // 코드를 전부 이 안에 작성합니다.
    // 이 코드는 스트릭트 모드로 동작하지만,
    // 이 코드와 함께 동작하는 다른 스크립트는
    // 스트릭트 모드에 영향 받지 않습니다.
})();
```

## 배열과 배열처리

### 1. map와 filter

map과 filter는 배열 메서드 중 가장 유용한 메서드입니다.. 이들 메서드로할 수 있는 일은 정말 다양합니다.

map은 배열 요소를 변형한다. 일정한 형식의 배열을 다른 형식으로 바꿔야 한다면 map을 쓰라 한다. map와 filter는 모두 사본을 반환하며 원래 배열은 바뀌지 않습니다. 예제를 봅시다.

```js
const cart = [ 
    {name:"Widget", price: 9.95}, 
    {name:"Gadget", price: 22.95}
];
const names = cart.map(x => x.name);    // ["Widget","Gadget"]
const prices = cart.map(x => x.price);  // [9.95, 22,95]
const discountPrices = prices.map(x => x * 0.8);    // [7.96, 18.36]
```

위에서 보듯 콜백 함수는 각 요소에서 호출될 떄 요소 자체와 요소 인덱스, 배열 전체를 매개변수를 받으며 책에서는 배열 매개변수는 유용하지 않다 한다.

이번에는 다음 예제를 통해 두 배열에 따로 저장되어 있는 상품과 가격을 객체로 결합해 보자

```js
const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x,i) => ({ name: x, price: prices[i]}));
//cart:[{ name:"Widget", price: 9.95 }, {name:"Gadget", price: 22.95}]
```

여기서 map은 다른 배열에서 정보를 가져와서 문자열로 이루어진 배열을 객체 배열로 변형했습니다. filter는 이름이 암시하듯 배열에서 필요한 것들만 남길 목적으로 만들어졌으며, filter는 map과 마찬가지로 사본을 반환하며 새 배열에는 필요한 요소만 남습니다.

어떤 요소를 넘길지는 마음대로이며, 어떤 요소를 남길지는 이를 판단할 함수로 넘긴다. 
다음 예제를 보자.

```js
// 카드 덱을 만듭니다.
const cards = [];
for(let suit of ['H','C','D','S']) // 하트, 클로버, 다이아몬드, 스페이드
    for(let value=1; value<=13; value++)
        cards.push({suit, value});

// value가 2인 카드
cards.filter(c=> c.value === 2);
//[
//  {suit: 'H', value: 2},
//  {suit: 'C', value: 2},
//  {suit: 'D', value: 2},
//  {suit: 'S', value: 2}
//]

// 여기서 부터는 지면을 생각해서 반환된 배열의 길이만 적습니다.

// 다이아몬드
cards.filter(c=> c.suit === 'D');   // length: 13

// 킹, 퀸, 주니어
cards.filter(c=> c.value > 10);     // length: 12

// 하트의 킹, 퀸 주니어
cards.filter(c=> c.value > 10 && c.suit === 'H');   // length:3

function cardToString(c){
    const suits = {'H':'\u2665','C':'\u2663','D':'\u2666','S':'\u2660'}    
    const values = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'};
    // cardToString을 호출할 때마다 매번 값을 만드는 건 그리 효율적인 방법은 아닙니다.
    // 더 효율적인 방법은 독자의 연습문제로 남기겠습니다.
    for(let i=2; i<=10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
}

//value가 2인 카드
 cards.filter(c=>c.value===2)
    .map(cardToString); // ["2♥","2♣","2♦","2♠"]

//하트의 킹, 퀸, 주니어
cards.filter(c=>c.value > 10 && c.suit === 'H')
.map(cardToString); // [ 'J♥', 'Q♥', 'K♥' ]
```

### 2. 배열의 마법 reduce

map이 배열의 각 요소를 변형한다면 reduce는 배열 자체를 변형합니다. reduce라는 이름은 이 메서드가 보통 배열을 값 하나로 줄이는데 쓰이기 때문에 붙었습니다. 예를 들어 배열에 들어있는 숫자를 더하거나 평균을 구하는 것은 배열을 값 하나로 줄이는 동작입니다. 하지만 reduce가 반환하는 값 하나는 객체일 수도 있고, 다른 배열일 수도 있습니다. 사실 reduce는 map과 filter를 비롯해 여태까지 설명한 배열 메서드의 동작을 대부분 대신할 수 있습니다.

reduce는 map이나 filter와 마찬가지로 콜백 함수를 받습니다. reduce가 받는 첫번째 매개변수는 배열이 줄어드는 대상인 어큐뮬레이터 입니다. 두 번째 매개변수부터는 여태까지 설명한 콜백의 수서대로 현재 배열 요소, 현재 인덱스, 배열 자체 입니다.

reduce는 초깃값도 옵션으로 받을 수 있습니다. 배열의 숫자를 더하는 단순한 예제를 봅시다.

```js
const arr = [5, 7, 2, 4];
const sum = arr.reduce((a,x) => a +=x, 0)
```

이 코드가 동작하는 첫 부분만 설명하면 이렇다.

1. 첫번째 배열 요소 5에서 (익명) 함수를 호출합니다. a의 초깃값은 0이고 x의 값은 5입니다. 함수는 a와 x(5)의 합을 반환합니다. 이 값은 다음 단계에서 a의 값이 됩니다.
2. 두번째 요소 7에서 함수를 호출합니다. a의 초깃값 이전의 누적값 5이다.
3. 이러한 작업을 반복하며 배열의 마지막 요소인 4까지 모두 더한다. 이 값은 reduce의 값이고 sum에 할당되는 값이다. 이때 값은 18 이다.

만약 초깃값을 주지 않는다면?

```js
const arr = [5, 7, 2, 4];
const sum = arr.reduce((a,x) => a +=x)
```
초기값을 주지 않으면 a의 초깃값은 배열의 첫번째인 요소인 5로 시작하고 두번째 배열 요소 7에서 함수가 호출 됩니다. 이때 x의 값은 7이다. 결과는 초기값이 주어졌을때와 똑같이 18이다.

reduce의 유연성을 알아보기 위해 한 가지 예를 더 살펴보자. 예제 자체는 매우 조악하지만, 이번에는 문자열을 누적값으로 사용합니다.
(숙제하러 왔어요 겸사겸사..)
```js
const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark","Xylophone","November","Chocolate",
    "Papaya","Uniform","Joker","Clover","Bali"
];
const longWords = words.reduce((a,w) => w.length>6 ? a+" "+w : a,"").trim();
// longWords: "Beachball Aardvark Xylophone November Chocolate Uniform"
```

**책에서 내준 숙제 한가지를 더 해보자.**

위에 예제에서 reduce 대신 filter와 join을 써서 같은 결과를 얻어 보자.
```js
const words = ....축약...;
//reduce를 사용하는 라인만 아래의 코드로 교체해보자. 
const longWords = words.filter(c => c.length>6).join(" ");
```

**TODO::** p222에 배열을 다루는 메서드가 정리되어 있다. 표로 만들까 그림을 넣을까..

## 객체와 객체지향 프로그래밍

### 객체지향 프로그래밍

#### 1.클래스와 인스턴스 생성

**ES6에서는 클래스를 만드는 간편한 새 문법을 도입했다.**

```js
class Car {
	constructor(){   }
}
```

이 클래스에 대한 인스턴스를 생성해보자. 인스턴스를 만들때는 new 키워드를 사용한다.

```js
const car1 = new Car();
const car2 = new Car();
```

객체가 클래스의 인스턴스 인지 확인하려면 **instaceof** 연산자를 사용한다.

```js
car1 instanceof Car		//true
car1 instanceof Array	//false
```

이 예제에서 car1은 Car클래스의 인스턴스이지만 Array의 인스턴스는 아님을 알 수 있다.
이제 Car클래스를 조금더 흥미롭게 만들어보자. 제조사와 모델 데이터, 변속 기능을 추가할 것이다.

```js
class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
        this.userGears = ['P','N','R','D'];
        this.userGear = this.userGears[0];        
    }

    shift(gear) {
        if(this.userGears.indexOf(gear) <0 )
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;        
    }
}

const car1 = new Car("Tesla","Model 5");
const car2 = new Car("Mazda","31");
car1.shift('D');
car2.shift('R');

console.log(car1.userGear); //"D"
console.log(car2.userGear); //"R"
```

Car 클래스에 shift 메서드를 사용하면 잘못된 기어를 선택하는 실수를 방지할 수 있을 것 같지만 직접 car1.userGear = 'X' 라고 설정한다면 막을 수 없다. 그래도 Car 클래스를 다음과 같이 수정하면 실수로 기어 프로퍼티를 고치지 않도록 어느 정도 막을 수 있다.

**p229, 가짜 접근 제한**

```js
class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
        this._userGears = ['P','N','R','D'];
        this._userGear = this._userGears[0];        
    }

    get userGear(){ return this._userGear;}
    set userGear(value){
        if(this._userGears.indexOf(value) < 0)
            throw new Error(`Invalid gear: ${value}`);
        this._userGear = value;
    }

    shift(gear) { this.userGear = gear; }
}
```


그렇지만 여전히 car1._userGear = 'X' 처럼 _userGear를 직접바꿀 수 있다고 지적할 수 있다.  이 예제에서는 외부에서 접근하면 안 되는 프로퍼티 이름 앞에 밑줄을 붙이는 소위 '가짜 접근 제한'을 사용했습니다. 진정한 제한이라기 보다는 "아, 밑줄을 붙는 프로퍼티에 접근하려고 하네? 이건 실수로군." 하면서 빨리 찾을 수 있도록 하는 방편이라고 봐야 한다.


**p229, WeakMap 인스턴스**

프로퍼티를 꼭 보호해야 한다면 스코프를 이용해 보호하는 WeakMap 인스턴스를 사용할 수 있다. Car 클래스를 다음과 같이 고치면 기어 프로퍼티를 완벽하게 보호할 수 있다.

```js
const Car = (function(){

    const carProps = new WeakMap();

    class Car{
        constructor(make,model){
            this.make = make;
            this.model = model;
            this._userGears = ['P','N','R','D'];
            carProps.set(this, {userGear:this._userGears[0]});
        }

        get userGear(){ return carProps.get(this).userGear;}
        set userGear(value){
            if(this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear: ${value}`);
            carProps.get(this).userGear = value;
        }

        shift(gear) { this.userGear = gear; }
    }
    
    return Car;
})();
```

여기서 즉시 호출하는 함수 표현식을 써서 WeakMap을 클로저로 감싸고 바깥에서 접근할 수 없게 했습니다. WeakMap은 클래스 외부에서 접근하면 안 되는 프로퍼티를 안전하게 저장합니다.

프로퍼티 이름에 심볼을 쓰는 방법도 있습니다. 이렇게 해도 어느 정도는 보호할 수 있지만, 클래스에 들어있는 심볼 프로퍼티 역시 접근이 불가능한 것은 아니므로 이 방법에도 한계가 있다고 해야 합니다.

#### 2. 클래스는 함수다!

class 문법이 훨씬 더 직관적이고 단순하기 하지만, 사실 class는 단축 문법일 뿐이며 자바스크립트의 클래스 자체가 바뀐 것은 아닙니다. 따라서 자바스크립트의 클래스 자체를 이해하는 것이 중요합니다.


**클래스는 사실 함수일 뿐입니다!** 

ES5에서는 Car 클래스를 다음과 같이 만들었을 겁니다.
```js
function Car(make,model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P','N','R','D'];
    this._userGear = this.userGears[0];    
}
```

ES6에서도 똑같이 할 수 있습니다. 결과는 완전히 동일합니다.

```js
class Es6Car {}
function Es5Car{}
>typeof Es6Car		//function
>typeof Es5Car		//function
```

ES6에서 클래스가 바뀐것은 아니며, 단지 간편한 새 문법이 생겼을 뿐입니다.

#### 3.프로토타입

클래스의 인스턴스를 사용할 수 있는 메서드라고 하면 그건 프로토타입 메서드를 말하는 겁니다. 예를 들어 Car의 인스턴스에서 사용할 수 있는 shift 메서드는 프로토타입 메서드입니다. 프로토타입 메서드는 Car.prototype.shift 처럼 표기할 때가 많습니다.

**이제 프로토타입이 무엇인지, 자바스크립트가 프로토타입 체인을 통해 어떻게 동적 디스패치를 구현하는지 알아봅시다.**

함수의 prototype 프로퍼티가 중요해지는 시점은 new 키워드로 새 인스턴스를 만들었을 때 입니다. new 키워드로 만든 새 객체는 생성자의 prototype 프로퍼티에 접근할 수 있습니다. 객체 인스턴스는 생성자의 prototype 프로퍼티를 \_\_proto\_\_ 프로퍼티에 저장합니다.

인스턴스에서 메서드나 프로퍼티를 정의하면 프로토타입에 있는 것을 가리는 효과가 있습니다. 자바스크립트는 먼저 인스턴스를 체크하고 거기에 없으면 프로토타입을 체크하기 때문입니다. 예제를 봅시다.

```js
const car1 = new Car("Tesla","Model 5");
const car2 = new Car("Mazda","31");
car1.shift === Car.prototype.shift;         //true
car1.shift('D');

//여기서 에러가 발생한다. 이후의 코드를 실행하기 위해 주석체크해도 무방하다.
//car1.shift('d');                          //error 
car1.userGear;                              //'D'
car1.shift === car2.shift;                  //true

car1.shift = function(gear){this.userGear = gear.toUpperCase(); }
car1.shift === Car.prototype.shift;         //true
car1.shift === car2.shift;
car1.shift('d');
car1.userGear;                              //'D'
```

※ car1 객체에는 shift 메서드가 없지만 car1.shift('D')를 호출하면 자바스크립트는 car1의 프로토타입에서 그런 이름의 메서드를 검색합니다. car1에 shift 메서드를 추가하면 car1과 프로토타입에 같은 이름의 메서드가 존재하게 됩니다. 이제 car1.shift('d')를 호출하면 car1의 메서드가 호출되고 프로토타입의 메서드는 호출되지 않습니다.

프로토타입 체인과 동적 디스패치를 항상 숙지하고 있을 필요는 없지만, 가끔 문제가 발생할 때 세부사항을 알고 있으면 도움이 됩니다.

#### 4.정적 메서드

**메서드에는 인스턴스 메서드 외에도 정적 메서드가 있습니다.** 이 메서드는 특정 인스턴스에 적용되지 않습니다. 정적 메서드에서 this는 인스턴스가 아니라 클래스 자체에 묶입니다. **정적메서드는 this 대신 클래스 이름을 사용하는 것이 좋은 습관입니다.**


정적 메서드는 클래스에 관련되지만 인스턴스와는 관련이 없는 범용적인 작업에 사용됩니다. 예제로 자동차 식별번호(VIN)을 붙이는 메서드를 생각해 봅시다. 개별 자동차가 자신만의 VIN을 생성한다는 것은 불가능합니다. 다른 자동차에 같은 VIN이 이미 부여됐는지 자동차가 어떻게 알겠습니까? VIN을 할당한다는 것은 자동차 전체를 대상으로 하느 추상적인 개념이므로 정적 메서드로 사용하는게 어울립니다.

정적 메서드는 여러 인스턴스를 대상으로 하는 작업에도 종종 쓰입니다. 예를 들어 두 자동차의 제조사와 모델이 모두 같으면 true를 반환하는 **areSimilar 메서드**, 두 자동차의 VIN이 같으면 true를 반환하는 **areSame 메서드**를 만들어 봅시다.

```js
class Car{
    static getNextVin() {
        return Car.nextVin++;
    }
    constructor(make,model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }

    static areSimilar(car1,car2) {
        return car1.make === car2.make && car1.model === car2.modle;
    }

    static areSame(car1,car2) {
        return car1.vin === car2.vin;
    }
}

Car.nextVin = 0;

const car1 = new Car("Tesla","S");
const car2 = new Car("Mazda","3");
const car3 = new Car("Mazda","3");

car1.vin;   // 0
car2.vin;   // 1
car3.vin;   // 2

Car.areSimilar(car1, car2);     // false
Car.areSimilar(car2, car3);     // true
Car.areSame(car2, car3);     // false
Car.areSame(car2, car2);     // true
```

#### 5.상속

상속은 한 단계로 끝나지 않습니다. 객체의 프로토타입에서 메서드를 찾지 못하면 자바스크립트는 프로토타입의 프로토타입을 검색합니다. 프로토타입 체인은 이런 식으로 만들어 집니다. 자바스크립트는 조건에 맞는 프로토타입을 찾을 때까지 프로토타입 체인을 계속 거슬러 올라 갑니다. 조건에 맞는 프로토타입을 찾지 못하면 에러를 일으킵니다.

자동차는 운송 수단의 일종입니다. 예를 들어 자동차에는 deployAirBags이란 메서드가 있을 수 있습니다. 이 메서드를 운송 수단 클래스에 정의할 수도 있겠지만, 에어백이 달린 보트는 본적이 없겠죠? 반면 운송 수단은 대부분 승객을 태울 수 있으므로, addPassenger 메서드는 운송 수단 클래스에 적당합니다. 이런 시나리오를 자바스크립트로 만들어 봅시다.

```js
class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }

}

class Car extends Vehicle {
    constructor() {
        // 슈퍼클래스의 생성자를 호출하는 특별한 함수다. 
        // 서브클래스에서는 이 함수를 반드시 호출해야 합니다.
        super(); 
        console.log("Car created");        
    }
    deployAirbags() {
        console.log("BWOOSH!");
    }
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);  // ["Frank", "Judy"]

const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(c.passengers);  // ["Alice", "Cameron"]

v.deployAirbags();          // error
c.deployAirbags();          // "BWOOSH!""
```

#### 6.다형성

다형성이란 단어는 객체지향 언어에서 여러 슈퍼클래스의 멤버 인스턴스를 가리키는 말입니다. 대부분의 객체지향 언어에서 다형성은 특별한 경우에 속합니다. 자바스크립트는 느슨한 타입을 사용하고 어디서든 객체를 쓸 수 있으므로(정학한 결과가 보장되지 않지만), 어떤 면에서는 자바스크립트의 객체는 모두 다형성을 갖고 있다고 할 수 있습니다.
(자바스크립트의 모든 객체는 루트 클래스인 Object의 인스턴스 이기 때문에)

```js
class MotorCycle extends Vehicle{}
const c = new Car();
const m = MotorCycle();
c instanceof Car;			// true
c instanceof Vehicle;		// true
m instanceof Car;			// false
m instanceof Motorcycle;	// true
m instanceof Vehicle;		// true
```

### 다중 상속, 믹스인, 인터페이스

일부 객체지향 언어에서는 **다중 상속**이란 기능을 지원합니다. 이 기능은 클래스가 슈퍼클래스 두 개를 가지는 기능이며, 슈퍼클래스의 슈퍼클래스가 존재하는 일반적인 상속과는 다릅니다. 다중 상속에는 충둘의 위험이 있습니다. 예를 들어 어떤 클래스에 두 개의 슈퍼 클래스가 있고, 두 슈퍼클래스에 모두 greet 메서드가 있다면 서브클래스는 어느 쪽의 메서드를 상속해야 할까요? 다중 상속을 지원하지 않는 언어가 많은 이유는 이런 문제를 피하기 위해서 입니다.

하지만 현실 세계를 생각해 보면 다중 상속을 적용할 수 있는 문제가 많습니다. 예를 들어 자동차는 운송 수단인 동시에 '보험을 들 수 있는' 대상입니다. 다중 상속을 지원하지 않는 언어 중에는 인터페이스 개념을 도입해서 이런 상황에 대처하는 언어가 많습니다. Car 클래스의 슈퍼클래스 Vehicle 하나뿐이지만, Insurable,Container 등 여러 인터페이스를 가질 수 있습니다.

자바스크립트는 흥미로운 방식으로 이들을 절충했습니다. 자바스크립트는 프로토타입 체인에서 여러 부모를 검색하지는 않으므로 단일 상속 언어라고 해야 하지만, 어떤 면에서는 다중 상속이나 인터페이스보다 더 나은 방법을 제공합니다.

자바스크립트가 다중 상속이 필요한 문제에 대한 해답으로 내놓은 개념이 믹스인 입니다. 믹스인이란 기능을 필요한 만큼 섞어 놓은 것입니다. 자바스크립트는 느슨한 타입을 사용하고 대단히 관대한 언어이므로 그 어떤 기능이라도 언제든, 어떤 객체에든 추가할 수 있습니다.

그러면 자동차에 적용할 수 있는 보험 가입 믹스인을 만듭시다. 이 믹스인은 단순하게 만들 겁니다. 보험 가입 믹스인 외에도 InsurancePolicy 클래스를 만듭니다. 보험 가입 믹스인에는 addInsurancePolicy, getInsurancePolicy 메서드가 필요하며, 편의를 위해 isInsured 메서드도 추가하겠습니다.

**예제를 봅시다.**

```js
class Car{}
class InsurancePolicy { }
function makeInsurable(o) {
    o.addInsurancPolicy = function(p) { this.insurancePolicy = p; }
    o.getInsurancePolicy = function() { return this.insurancePolicy; }
    o.isInsured = function() { return !!this.insurancePolicy; }    
}
```
이제 보험가입 믹스인을 자동차에 적용해보자.

가장 먼저 아래와 같이 생각할 수 있다..

```js
makeInsurable(Car); 
```

하지만 그렇게 되지는 않는다.
```js
const car1 = new Car();
// error
car1.addInsurancePolicy(new InsurancePolicy()); 
```

자동차를 추상화한 개념을 보험에 가입할 수는 없다. 보험에 가입하는 것은 개별 자동차입니다. 그렇다면 이렇게 해봅시다.

```js
const car1 = new Car();
makeInsurable(car1)
car1.addInsurancPolicy(new InsurancePolicy());
```

이 방법은 동작하지만, 단점이 있다. 모든 자동차에 대해서 makeInsurable을 호출해야 한다는 것이다. 이에 대한 해결방법은 쉽다. 아래와 같이 해보자.

```js
makeInsurable(Car.prototype);
const car1 = new Car();
//works
car1.addInsurancPolicy(new InsurancePolicy());
```
추가로 책에서는 보험회사가 범용적인 메서드를 사용하게 되어 우연히 Car 클래스의 메서드와 충돌이 될까 걱정될 경우 심볼을 사용하는 예제를 소개하고 있다.

**TODO::** 자바스크립트에서 다른 방법으로 믹스인을 구현하는 방법에 대해 알아보자. (검색을 해보니 참으로 다양하다.)

## 이터레이터와 제너레이터
**ES6에서는 중요한 새로운 개념 이터레이터와 제너레이터를 도입했다.**

이터레이터는 '지금 어디 있는지' 파악할 수 있도록 돕는 다는 면에서 일종의 책갈피와 비슷한 개념이다. 배열은 이터러블 객체의 졸은 예이다. 책에 여러 페이지가 있는 것처럼 배열에는 여러 요소가 들어 있으므로, 책에 책갈피를 끼울 수 있듯 배열에는 이터레이터를 사용할 수 있습니다. 책과 책갈피의 비유를 계속 사용해 봅시다. book이란 배열이 있고, 이 배열의 각 요소는 책의 한 페이지를 나타내는 문자열이라고 합시다. 지면을 생각해서 루이스 캐럴의 <이상한 나라의 앨리스>에서 발췌한 '반짝 반짝 작은 박쥐' 원문을 사용하겠습니다. 한 페이지에 문장 하나씩만 들어 있는 어린이용 동화책을 상상해 보십시오.
```js
const book = [
    "Twinkle, twinkle,little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bt!",
    "How I wonder what you're at!"
];
```

**p260, Array.prototype.values()**

이제 book 배열의 values 메서드를 써서 이터레이터를 만들 수 있다. 이 메서드가 반환하는 객체에는 value 프로퍼티와 done 프로퍼티(마지막 페이지를 읽으면 true로 바뀌는)가 있다.

```js
const it = book.values();
```

이를 실행하면 "book.values is not a function" 가 떨어진다.. 책의 각주에 따르면 이 책이 번역되는 시점에서 노드 최신 버전은 6.10.0인데 아직 Array.prototype.values() 메서드를 지원하지 않고 있고 브라우저 호환성도 좋지 못하다 한다(https://goo.gl/cLuXnW). 

바벨에 polyfill 패키지를 추가하거나, 노드에 core-js 패키지를 추가하면 이 예제를 테스트해 볼 수 있습니다. 구글에서 bable array.prototype.values를 검색하면 나오는 스택오버플로우 페이지(https://goo.gl/waqlY4)에서 두 가지 방법을 모두 볼 수 있다.
역자가 선택하고 테스트해 본 노드의 core-js 패키지를 간추리면 다음과 같다.

`$npm i core-js --save	// core-js 패키지 설치`

패키지를 설치한 다음 코드 상단에 require를 추가한다.

`requie('core-js/fn/array/values');`

```js
it.next(); // {values:"Twinkle, twinkle,little bat!", done: false}
it.next(); // {values:"How I wonder what you're at!", done: false}
it.next(); // {values:"Up above the world you fly,", done: false}
it.next(); // {values:"Like a tea tray in the sky", done: false}
it.next(); // {values:"Twinkle, twinkle,little bat!", done: false}
it.next(); // {values:"How I wonder what you're at!", done: false}
it.next(); // {values:undefined, done: true}
it.next(); // {values:undefined, done: true}
it.next(); // {values:undefined, done: true}
```
예제를 보면 next에서 책의 마지막 페이지를 반환했다해서 끝난것이 아니다. 더 진행할 것이 없으면 value는 undefined가 되지만 next는 계속 호출할 수 있다. 

이 배열을 요소를 나열하기 위해 for 루프나 for..of 루프를 쓸 수있습니다.for...of는 이터레이터만 제공할 수 있다면 무엇이든 for...of 루프와 함께 쓸 수 있습니다. 책에는 우선적으로 while루프를 사용해서 for...of 루프를 흉내내어 본다.
```js
const it = book.values();
let current = it.next();
while(!current.done) {
    console.log(current.value);
    current = it.next();    
}
```

이터레이터는 모두 독립적입니다. 즉, 새 이터레이터를 만들 때마다 처음에서 시작합니다. 아래의 예제는 두 이터레이터가 서로 독립적이며 같은 배열에서 따로따로 움직일 수 있음을 보여줍니다.

```js
const it1 = book.values();
const it2 = book.values();
// 어느 이터레이터도 아직 시작하지 않았습니다.

// it1으로 두 페이지를 읽습니다.
it1.next(); // { value: "Twinkle, twinkle, little bat!", done: false }
it1.next(); // { value: "How I wonder what you're at!", done: false }

// it2으로 한 페이지를 읽습니다.
it2.next(); // { value: "Twinkle, twinkle, little bat!", done: false }

// it1으로 한 페이지를 읽습니다.
it1.next(); // { value: "Up above the world you fly", done: false }
```

### 이터레이션 프로토콜

이터레이션 프로토콜은 모든 객체를 이터러블 객체로 바꿀 수 있습니다. 메시지에 타임스탬프를 붙이는 로그 클래스가 필요하다고 생각해 봅시다. 내적으로 타입스탬프가 붙은 메시지는 배열에 저장합니다.

```js
class Log{
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push( { message, timestamp:Date.now() });
    }
}
```


이터레이션 프로토콜은 클래스에 심볼 메서드 Symbol.iterator가 있고 이 메서드가 이터레이터 처럼 동작하는 객체, 즉 value와 done 프로러티가 있는 객체를 반환하는 next 메서드를 가진 객체를 반환한다면 그 클래스의 인스턴스는 이터레이터 객체라는 뜻 입니다.

**Log 클래스에 Symbol.iterator 메서드를 추가합시다.**

```js
//꼭 추가하자!!
require('core-js/fn/array/values'); 

class Log{
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push( { message, timestamp:Date.now() });
    }

    [Symbol.iterator]() {
        return this.messages.values();
    }
}
```


**이제 Log 인스턴스를 배열처럼 순회할 수 있습니다.**

```js
const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

// 로그를 배열처럼 순회 합니다.
for(let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}
```

이 예제에서는 messages배열에서 이터레이터를 가져와 이터레이터 프로토콜을 구현했지만, 다음과 같이 직접 이터레이터를 만들 수도 있습니다.

```js
class Log{
	//...
	[Symbol.iterator]() {
        let i = 0;
        const messages = this.messages;
        return {
            next() {
                if ( i>= messages.length)
                    return { value:undefined, done: true };
                return { value: messages[i++], done: false};
            }
        }
    }
}
```
※ 이번에는 messages 배열의 values 메소드를 사용하여 이터레이터를 구하지 않고 직접 이터레이터 만들었으므로 코드에서 require('core-js/fn/array/values')가 필요 없다.

### 제너레이터

제너레이터란 이터레이터를 사용해 자신의 실행을 제어하는 함수입니다. 

**제너레이터는 두가지 예외를 제외하면 일반적인 함수와 같습니다.**
- 제너레이터는 언제든 호출자에게 제어권을 넘길 수 있습니다.
- 제너레이터는 호출한 즉시 실행되지는 않습니다. 대신 이터레이터를 반환하고, 이터레이터의 next 메서드를 호출함에 따라 실행됩니다.

제너레이터를 만들 때는 function 키워드 뒤에 애스터리스크(*)를 붙입니다. 이것을 제외하면 문법은 일반적인 함수와 같습니다. 제너레이터에서는 return 외에 yield 키워드를 쓸 수 있습니다.

```js
function * rainbow(){ // * 기호는 제너레이터 문법입니다.
    yield 'red';
    yield 'orange';    
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}
```

이 제너레이터는 아래와 같이 호출할 수 있다. 제너레이터를 호출하면 이터레이터를 얻습니다. 함수를 호출한 다음 이터레이터를 써서 단계별로 진행합니다.

```js
const it = rainbow();

it.next(); // { value: 'red', done: false}
it.next(); // { value: 'orange', done: false}
it.next(); // { value: 'yellow', done: false}
it.next(); // { value: 'green', done: false}
it.next(); // { value: 'blue', done: false}
it.next(); // { value: 'indogo', done: false}
it.next(); // { value: 'indogo', done: false}
it.next(); // { value: 'violet', done: false}
it.next(); // { value: undefined, done: true}
```

rainbow 제너레이터는 이터레이터를 반환하므로 **for...of 루프**에서 쓸 수 있습니다.

```js
for(let color of rainbow()) {
    console.log(color);
}
```

#### 1. yield 표현식와 양방향 통신

제너레이터와 호출자 사이에서 양방향 통신이 가능하다는 것은 이미 언급했습니다. 

통신은 yield 표현식을 통해 이뤄집니다. 표현식은 값으로 평가되고 yield는 표현식이므로 반드시 어떤 값으로 평가됩니다. yield 표현식의 값은 호출자가 제너레이터의 이터레이터에서 next를 호출할 때 제공하는 매개변수입니다. 

**대화를 이어가는 제너레이터를 만들어 봅시다.**

```js
function * interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}
```

이 제너레이터를 호출하면 이터레이터를 얻습니다. 그리고 제너레이터의 어떤 부분도 아직 실행하지 않은 상태입니다. next를 호출하면 제너레이터는 첫 번째 행을 실행하려 합니다. 하지만 그 행에는 yield 표현식이 들어 있으므로 제너레이터는 반드시 제어권을 호출자에게 넘겨야 합니다. 제너레이터의 첫 번째 행이 완료 되려면 호출자가 next를 다시 호출해야 합니다. 그러면 name은 next에서 전달하는 값을 받습니다.

**다음은 이 제너레이터를 끝까지 실행한 모습입니다.**

```js
const it = interrogate();
it.next();          // { value: "What is your name?", done: false}
it.next('Ethan');   // { value: "What is your favorite color?", done: false}
it.next('orange');  // { value: "Ehtan's favorite color is orange.", done: true}
```
#### 2. 제너레이터와 return

yield 문은, 설령 제너레이터의 마지막 문이더라도 제너레이터를 끝내지 않습니다. 제너레이터에서 **return 문을 사용하면** 그 위치와 관계없이 **done은 true**가 되고, **value 프로퍼티는 return이 반환하는 값이** 됩니다.

```js
function * abc(){
    yield 'a';
    yield 'b';    
    return 'c';
}

const it = abc();

it.next(); // { value: 'a', done: false}
it.next(); // { value: 'b', done: false}
it.next(); // { value: 'c', done: true}
```

그러나 이 제너레이터를 for...of에서 사용하면 C는 출력되지 않습니다.

**※ 제너레이터에서 중요한 값을 return으로 반환하려 하지 마십시오. 제너레이터 값을 사용하려 할 때는 yield를 써야하고, return은 제너레이터를 중간에 종료하는 목적으로만 사용해야 합니다. 따라서 제너레이터는 return을 쓸 때는 반환값을 쓰지 않는 습관을 들이길 권합니다.**

**'14장. 비동기적 프로그래밍'**에서 제너레이터를 통해 비동기적 실행을 개선하는 방법을 배울 것이다.

## 함수와 추상적 사고

### 1. 순수한 함수(함수로서의 함수)

수학을 좋아한담녀 함수를 일종의 관계로 생각할 수 있을 겁니다. 입력이 들어가면 결과가 나오는 관계 말입니다. 입력은 모두 어떤 결과와 관계되어 있습니다. 프로그래머들은 이렇게 하수의 수학적인 정의에 충실한 함수를 순수한 함수라고 부릅니다. 

우리가 여태까지 생각해 본 함수와 어떤 면에서 다를까요? 가장 중요한 차이는, 순수한 함수에서는 입력이 같으면 결과도 반드시 같다는 점입니다.

```js
function isCurrentYearLeapYear() {
	const year = new Date().getFullYear(); <--
    if(year%4 !== 0 ) return false;
    else if(year%100 !== 0 ) return false;
    else if(year%400 !== 0 ) return false;
    else return true;
}
```
책에서 소개하는 함수 isCurrentYearLeapYear는 언제 호출하느냐에 따라서 true를 반환하기도 하고 false를 반환하기도 하므로 순수한 함수라고 할 수없습니다. 둘째, 순수한 함수에는 부수효과가 없어야 합니다.  즉, 함수를 호출한다고 해서 프로그램의 상태가 바뀌어서는 안 된다는 뜻입니다.

**아래의 부수효과를 갖는 간단한 예를 봅시다.**

```js
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let colorIndex = -1;
function getNextRainbowColor() {
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
}
```

작성한 getNextRainbowColor 함수는 호출할 때마다 무지개의 일곱 가지 색깔을 하나씩 반환합니다. **이 함수는 순수한 함수의 두가지 정의를 모두 어깁니다.** 
입력이 같아도(매개변수가 없다는 점이 같습니다.) 결과가 항상 다르고, 변수 colorIndex를 바꾸는 **부수 효과**가 있습니다.

colorIndex 변수는 getNextRainbowColor 함수에 속하지 않는데도 함수를 호출하면 변수가 바뀝니다. 이것은 부수효과입니다.

잠시 윤년 문제로 돌아가서, 이를 순수한 함수로 바꾸는 것은 쉽다.

```js
function isLeapYear(year) {	
    if(year%4 !== 0 ) return false;
    else if(year%100 !== 0 ) return false;
    else if(year%400 !== 0 ) return false;
    else return true;
}
```

새로운 함수는 입력이 같으면 결과도 항상 같고, 다른 효과가 없으므로 순수한 함수라 볼 수 있습니다. 

getNextRainbowColor 함수를  순수한 함수로 고치는 건 손이 조금더 갑니다. 먼저 외부 먼저 외부 변수를 클로저로 감싸는 방법을 봅시다.

```js
const getNextRainbowColor = (function() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    
    return function(){
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    }
   
})();
```

아직은 입력이 같아도 결과가 다를 수 있으므로 순순한 함수라고 볼수 없습니다.  이 문제를 해결하려면 이 함수를 어떻게 사용할 것인지 주의 깊게 생각해야 합니다. 아마 이 함수는 반복적으로 호출할 겁니다. 

**예를 들어, 브라우저에서 어떤 요소의 색깔을 0.5초마다 바꾸고 싶다면 다음과 같은 코드를 쓰게 될 겁니다.**

```js
setInterval(function() {
    document.querySelector('.rainbow').style['background-color'] = getNextRainbowColor();
},500);
```
이 코드에는 별 문제가 없어 보이고, 의도도 분명히 드러납니다. 클래스가 rainbow인 HTML 요소의 색깔을 계속 바꾸는 거죠. 

문제는, 프로그램의 다른 부분에서 getNextRainbowColor()를 호출한다면 이 코드도 영향을 받는다는 겁니다. 이제 부수효과가 있는 다시 말해 외부에 영향을 주는 함수가 과연 좋은 것인지 생각해 볼 만한 시기 입니다. 

**여기서는 이터레이터를 사용하는 것이 더 나은 방법입니다.**

```js
function getRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    
    return {
        next(){
            if(++colorIndex >= colors.length) colorIndex = 0;

            return { value: colors[colorIndex], done: false };
        }
    };   
}
```

이제 getRainbowIterator는 순수한 함수입니다. 이 함수는 항상 같은 것(이터레이터)을 반환하며 외부에 영향을 주지 않습니다. 사용법이 바뀌긴 했지만, 훨씬 안전합니다.

```js
const rainbowIterator = getRainbowIterator();

setInterval(function() {
    document.querySelector('.rainbow').style['background-color'] = rainbowIterator.next().value;
    //console.log(rainbowIterator.next().value);
},500);
```

결국 next() 메서드는 매번 다른 값을 반환할테니, 문제를 뒤로 미뤘을 뿐 아니냐고 생각할 수도 있습니다. 틀린 말은 아니지만, next()는 함수가 아니라 메서드라는 점에 주목할 필요가 있습니다.

메서드는 자신이 속한 객체라는 컨텍스트 안에서 동작하므로 메서드의 동작은 그 객체에 의해 좌우됩니다. 프로그램의 다른 부분에서 getRainbowIterator를 호출하더라도 독립적인 이터레이터가 생성되므로 다른 이터레이터를 간섭하지 않습니다.

### 2. 그래서??

함수가 상황에 따라 다른 값을 반환하거나 부작용이 있다면 그 함수는 컨텍스트에 좌우되는 함수입니다. 어떤 함수가 정말 유용하더라도 부수효과가 있다면, 그리고 함수가 쓰이던 프로그램이 아닌 프로그램에서 사용하려 한다면 문제를 일으킬 수 있습니다.

99%는 제대로 동작하다가 1%의 상황에서 버그를 일으키는 상황은 더 심각합니다. 프로그래머라면 누구나 깨닫고 있겠지만, 가장 악질적인 버그는 숨어있는 버그입니다. 이런 버그는 오랫동나 발견되지 않기 때문에, 문제가 있다는 걸 알게 되더라도 찾기가 정말 어렵습니다.

필자가 순수한 함수를 권장하는 건지 궁금하다면, 답은 **'그렇다'** 입니다. 항상 순수한 함수를 습관을 들이는 편이 좋습니다. **'습관'**이라고 한 건, 가끔은 부수 효과가 있더라도 그냥 쓰는 편이 훨씬 쉬울 때가 있기 때문입니다. 

초보 프로그래머라면 그런 때가 더 많을 겁니다. 그러지 말라는 건 아닙니다. 단지, **잠시 멈추고 순수한 함수를 사용하는 방법이 있는지 생각해 보라는 말입니다.** 시간이 흐르면, 자연스럽게 순순한 함수를 더 많이 쓰게 될 겁니다.

### 3. IIFE와 비동기적 코드

6장에서 IIFE(즉시 호출하는 함수 표현식)에 대해 알아봤습니다. IIFE를 이용해서 클로저를 만들 수 있다는 것도 알았습니다. 이제 IIFE로 비동기적 코드를 처리하는 중요한 예제를 살펴봅시다. 이 예제는 14장(비동기적 프로그래밍)에서 다시 살펴보게 될 겁니다.

IIFE를 사용하는 사례 중 하나는 비동기적 코드가 정확히 동작할 수 있도록 새 변수를 새 스코프에 만드는 겁니다. 5초에서 시작하고 카운트다운이 끝나면 "go"를 표시하는 고전적 타이머 예제를 만들어 봅시다.

```js
var i;
for (i=5; i>=0; i--) {
    setTimeout(function(){
        console.log(i===0? "go!" : i);        
    }, (5-i)*1000);
}
```
이 코드를 실행하면 5,4,3,2,1, go!가 출력될거라 예상하지만, 그렇지 않다 -1이 여섯번 출력될 뿐이다. 어떻게 될걸까?? setTimeout에 전달된 함수가 루프 안에서 실행되지 않고 루프가 종료된 뒤에 실행됐기 때문입니다. 따라서 루프의 i는 5에서 시작해 -1로 끝납니다. 그리고 -1이 되기 전에는 콜백 함수는 전혀 호출되지 않습니다. 따라서 콜백 함수가 호출되는 시점에서 i의 값은 -1 입니다.

이는 let을 사용해 블록 수준 스코프를 만들면 문제를 해결되지만, 14장의 주제인 비동기적 실행을 이해하기 위해 이 예제를 정확히 이해해야 합니다.

블록 스코프 변수가 도입되기 저에는 이런 문제를 해결하기 위해 함수를 하나 더 썼습니다. 함수를 하나 더 쓰면 스코프가 새로 만들어지고 각 단계에서 i의 값이 클로저에 캡쳐됩니다. 이름 붙은 함수를 쓰는 예제를 먼저 봅시다.

```js
function loopBody(i) {
    setTimeout(function() {
        console.log(i===0 ? "go" : i);
    }, (5-i)*1000);
}

var i;
for (i=5; i>=0; i--) {
    loopBody(i);
}
```
루프의 각 단계에서 loopBody 함수가 호출됩니다. 자바스크립트는 매개변수를 값을 ㅗ넘깁니다. 따라서 루프의 각 단계에서 함수에 전달되는 것은 변수 i가 아니라 i의 값입니다. 처음에는 5가, 두 번째에는 4가 전달됩니다. 같은 변수 이름 i를 썻지만, 이게 중요한 건 아닙니다.

**중요한 것은** 스코프 일곱 개가 만들어졌고 변수도 일곱 개 만들어졌다는 겁니다.(하나는 외부 스코프, 나머지 여섯개는 loopBody를 호출할 때마다)

**하지만 루프에 한 번 쓰고 말 함수에 일일이 이름을 붙이는 건 성가신 일입니다. 익명 함수를 만들어 즉시 호출하는 IIFE를 사용하는게 더 낫습니다.** 

이전 예제를 IIFE를 써서 고쳐 쓰면 다음과 같습니다.

```js
var i;
for (i=5; i>=0; i--) {
    (function(i) {
        setTimeout(function(){
            console.log(i===0? "go!" : i);        
        }, (5-i)*1000);
    })(i);
}
```

(책에서 이 코드와 매개변수를 하나 받는 함수를 만들어서 루프의 각 단계에서 호출한 것과 똑같음을 알 수 있다고 소개한 아래 코드를 실행하면 **loopBody(...) is not a function** 에러가 발생한다.뭐지?) 

```js
var i;
for (i=5; i>=0; i--) {
    (loopBody(i))(i);
}
```

블록 스코프 변수를 사용하면 스코프 하나 때문에 함수를 새로 만드는 번거로운 일을 하지 않아도 됩니다. 블록 스코프 벼수를 사용하면 이 예제를 극도로 단순화할 수 있습니다.

```js
for (let i=5; i>=0; i--) {
    setTimeout(function() {
        console.log(i===0 ? "go" : i);
    }, (5-i)*1000);
}
```
이번에는 for 루프 안에서 let 키워드를 썼습니다. let 키워드를 for 루프 바깥에 썼다면 똑같은 문제가 발생했을 겁니다. let 키워드를 이런식으로 사용하면 자바스크립트는 루프의 단계마다 변수 i의 복사본을 새로 만듭니다. 따라서 setTimeout에 전달된 함수가 실행될 때는 독립 스코프에서 변수를 받습니다.

## 비동기적 프로그래밍

사용자의 행동은 전적으로 비동기적입니다. 사용자가 언제 클릭할지, 터치할지, 또는 타이핑할지 당신은 전혀 알 수 없습니다. 하지만 비동기적 실행이 입력 하나 때문에 필요한 건 아닙니다. 사실 자바스크립트의 본성 때문에 비동기적 프로그래밍이 필요합니다.

**자바스크립트 애플리케이션은 단일 스레드에서 동작합니다.** 즉, 자바스크립트는 한 번에 한 가지 일만 할 수 있습니다. 멀티코어를 장착한 대부분의 최신 컴퓨터는 여러 가지 일을 할 수 있고, 싱글코어 컴퓨터도 매우 빨라서 작업 A를 잠시하고, 작업 B를 잠시 하고, 작업 C를 잠시 하는 식으로 멀티태스킹을 흉내 낼 수 있습니다. 사용자가 보기에는 세 가지 작업이 동시에 일어나는 것처럼 보입니다. 실제로 멀티코어에서 동시에 수행하지 않더라도 말입니다.

자바스크립트가 싱글 스레드라는 애기를 듣고 할 수 있는 일이 제한된다고 느낄지도 모르지만, 사실 멀티스레드 프로그래밍에 겪어야 하는 정말 골치 아픈 문제를 신경 쓰지 않아도 된다는 장점도 있습니다. 물론 대가가 있습니다. 부드럽게 동작하는 소프트웨어를 만들기 위해서는 사용자의 입력뿐만 아니라 여러 문제를 비동기적 관점에서 생각해야 합니다. 비동기적 관점에서 생각하는 건 처음에는 어려울 수 있습니다. 특히, 일반적으로 동기적 실행을 하는 언어를 사용했었다면 더 어렵게 느껴질 수 있습니다.

**자바스크립트에는 매우 일찍 부터 비동기적 실행 메커니즘이 존재했지만,** 자바스크립트의 인기가 높아지고 자바스크립트로 만드는 소프트웨어가 점점 복잡해짐에 따라 비동기적 프로그래밍에 필요한 장치들이 추가되었습니다. 자바스크립트의 비동기적 프로그래밍에는 뚜렷이 구분되는 세가지 패러다임이 있습니다. 

처음에는 콜백이 있었고, 프라미스가 뒤를 이었으며, 마지막은 제너레이터입니다. 제너레이터가 콜백이나 프라미스보다 모든 면에서 더 좋다면 제너레이터에 대해서만 공부하고 나머지는 과거의 유산으로 치워 둘 수도 있겠지만, 그렇게 간단한 문제는 아닙니다. 제너레이터 자체는 비동기적 프로그래밍을 전혀 지원하지 않습니다. **제너레이터를 비동기적으로 사용하려면** 프라미스나 특수한 콜백과 함께 사용해야 합니다. 프라미스 역시 콜백에 의존합니다. **콜백은 제너레이터나 프라미스 외에도 이벤트 처리 등에 유용하게 쓸 수 있습니다.**

사용자가 입력 외에, 비동기적 테크닉을 사용해야 하는 경우는 크게 세 가지가 있습니다.

- Ajax 호출을 비롯한 네트워크 요청
- 파일을 읽고 쓰느 등의 파일시스템 작업
- 의도적으로 시간 지연을 사용하는 기능(알람 등)

### 1. 비유

필자는 콜백과 프라미스를 설명할 때, 예약하지 않고 분주한 음식점에 방문한 경우에 자주 비유 합니다. 

어떤 음식점은 당신이 줄을 서서 기다리지 않도록, 당신의 전화번호를 받아서 자리가 나면 전화를 해줍니다. **이런 음식점은 콜백과 비슷합니다.** 자리가 나면 당신이 알 수 있도록 하는 수단을 당신이 음식점 주인에게 넘겨줍니다. 음식점은 다른 손님을 대접하면 되고, 당신은 다른일을 하면 됩니다. 어느 쪽도 서로를 기다리지 않습니다.

다른 음식점은 자리가 났을 때 진동하는 호출기를 당신에게 넘겨 줍니다. 이런 음식점은 프라미스와 비슷합니다. 자리가 나면 당신이 알 수 있도록 하는 수단을 음식점에서 당신에게 넘겨줍니다.  **이런 음식점은 프라미스와 비슷합니다.** 자리가 나면 당신이 알 수 있도록 하는 수단을 음식점에서 당신에게 넘겨줍니다.

콜백과 프라미스에 대해 설명하는 동안 이 비유를 염두에 두십시오. 특히 비동기적 프로그래밍이 처음이라면 이 비유에 대해 잘 생각해 봐야 합니다.

### 2. 콜백

콜백은 자바스크립트에서 가장 오래된 비동기적 메커니즘 입니다. 우리는 사용자 입력과 타임아웃을 처리하면서 이미 콜백을 사용했습니다. 콜백은 간단히 말해 나중에 호출할 함수입니다. 콜백은 보통 익명 함수로 사용합니다.

#### 2.1 setTimeout

먼저 **setTimeout**을 사용하는 단순한 예제로 시작합니다. **setTimeout**은 콜백의 실행을 지정된 밀리초만큼 지연하는 내장 함수입니다.

```js
console.log("Before timeout: " + new Date());
function f() {
    console.log("After timeout: " + new Date());
}

setTimeout(f, 60*1000); // 1분
console.log("I happen after setTimeout!");
console.log("Me too!");
```

#### 2.2 setInterval과 clearInterval

setTimeout은 콜백 함수를 한 번만 실행하고 멈추지만, **setInterval은 콜백을 정해진 주기마다 호출하며 clearInterval을 사용할 때까지 멈추지 않습니다.**

**다음 예제는 분이 넘어가거나 10회째가 될 때까지 5초마다 콜백을 실행합니다.**

```js
const start = new Date();
let i=0;
const intervalId = setInterval(function() {
    let now = new Date;
    if(now.getMinutes() !== start.getMinutes() || ++i>10)
        return clearInterval(intervalId);
    console.log(`${i}: ${now}`);
}, 5*1000);
```

#### 2.3 스코프와 비동기적 실행

비동깆거 실행에서 혼란스럽고 에러도 자주 일어나는 부분은 스코프와 클로저가 비동기적 실행에 영향을 미치는 부분입니다. 함수를 호출하면 항상 클로저가 만들어집니다. 매개변수를 포함해 함수 안에서 만든 변수는 모두 무언가가 자신에 접근할 수 있는 한 계속 존재합니다.

이 예제는 이미 봤었지만 중요한 사실을 배울 수 있으니 반복해서 볼 가치가 있습니다. countdown 함수에 대해 생각해 봅시다. 이 함수이 목적은 5초 카운트다우을 만드는 것입니다.

```js
function countdown() {
    let i; //i를 루프 밖에서 선언했습니다.
    console.log("Countdown");
    for (i=5; i>=0; i--) {
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i);
        }, (5-i)*1000);
    }    
}
countdown();
```

이미 알다시피 이 예제의 결과는 -1이 여섯 번 반복되고, "GO!"는 나타나지 않습니다. 이 예제를 처음 봤을 때는 var를 사용했습니다. 이번에는 let을 사용하기 했지만 변수를 for 루프 밖에서 선언했으므로 같은 문제가 발생합니다.

for 루프가 실행을 마치고 i의 값이 -1이 된 다음에서야 콜백이 실행되기 시작합니다. 문제는, 콜백이 실행될 때 i의 값은 이미 -1이란 겁니다.

스코프와 비독기적 실행이 어떻게 연관되는지 이해하는 것이 중요합니다. countdown을 호출하면 변수 i가 들어있는 클로저가 만들어집니다. for 루프 안에서 만드는 콜백은 모두 i에 접근할 수 있고 그들이 접근하는 i는 똑같은 i 입니다.

이 예제에서 눈여겨 볼 것이 하나 더 있습니다. for 루프 안에서 i를 두가지 방법으로 사용했습니다. i를 써서 타임아웃을 계산하는 ``(5-i)*1000`` 부분은 예상대로 동작합니다. 첫번째 타임아웃은 0, 두번째 타임아웃은 1000, 세 번째 타임아웃은 2000입니다. 

이 계산이 예상대로 동작한 것은 동기적으로 실행됐기 때문입니다. 사실 setTimeout을 호출하는 것 역시 동기적입니다. setTimeout을 동기적으로 호출해야만 콜백을 언제 호출할지 계산할 수있습니다. 비동기적 부분은 setTimeout에 전달된 함수이고, 문제는 여기서부터 복잡해집니다.

이 문제는 즉시 호출하는 함수 표현식(IIFE)으로 해결했고, 좀 더 간단하게 i를 for 루프 선언부에서 선언하는 방식으로도 해결할 수 있었습니다.

```js
function countdown() {    
    console.log("Countdown");
    // 이제 i는 블록 스코프 변수입니다.
    for (let i=5; i>=0; i--) {  
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i);
        }, (5-i)*1000);
    }    
}
countdown();
```

#### 2.4 콜백지옥(콜백헬!)

콜백을 사용해 비동기적으로 실행할 수 있긴 하지만, 현실적인 단점이 있습니다. 한번에 여러가지를 기다려야 한다면 콜백을 관리하기가 상당히 어려워집니다. 노드 앱을 만든다고 합시다. 

**이 앱은 세 가지 파일의 콘텐츠를 읽고, 60초가 지난 다음 이들을 결합해 네 번째 파일에 기록합니다.**

```js
const fs= require('fs');

fs.readFile('a.txt', function  (err,dataA) {
    if(err) console.error(err);
    fs.readFile('b.txt', function  (err,dataB) {
        if(err) console.error(err);
        fs.readFile('c.txt', function  (err,dataC) {
            if(err) console.error(err);
            setTimeout(function() {
                fs.writeFile('d.txt', dataA+dataB+dataC, function(err){
                    if(err) console.error(err);
                })
            },60*1000);
        });
    });
});
```

프로그래머들은 이런 코드를 **콜백 헬(!)**이라 부릅니다. 중괄호로 둘러싸여 끝없이 중첩된 삼각형의 코드 블록들은 마치 버뮤다 삼각지대처럼 보일 지경입니다. 더 골치 아픈 문제는 에러 처리 입니다. 

이 예제에서는 에러를 기록하기만 했지만, 예외를 일으키려 했다면 더더욱 골치가 아팠을 겁니다. 다음 예제를 보십시오

```js
const fs = require('fs');
function readSketchyFile() {
    try{
        fs.readFile('does_not_exist.txt', function(err, data){
            if (err) throw err
        });
    
    }catch(err){
        console.log("warning: minor issu occurred, program continuing");
    }
}
readSketchyFile();
```

이 코드는 얼핏 타당해 보이고, 예외 처리도 수행하는 방어적인 코드처럼 보입니다. 동작하지 않는다는 것만 빼면 말입니다. 직접 실행해 보십시오. 

**예상되는 에러가 문제를 일으키지 않도록 대비했는데도 프로그램은 멈춥니다. 예외처리가 의도대로 동작하지 않는 이유는 try-catch 블록은 같은 함수 안에서만 동작하기 때문입니다.** **try-catch 블록은 readSketchyFile 함수 안에 있지만, 정작 예외는 fs.readFile이 콜백으로 호출하는 익명함수 안에서 일어났습니다.**

또한, 콜백이 우연히 두 번 호출되거나, 아에 호출되지 않는 경우를 방지하는 안전장치도 없습니다. 콜백이 정확히 한 번만 호출될 것을 가정하고 코드를 작성한다면, 애석하지만 자바스크립트는 그런 걸 보장하지 않습니다.

이런 문제가 해결할 수 없는 문제는 아닙니다. 하지만 **비동기적 코드가 늘어나면 늘어날수록 버그가 없고 관리하기 쉬운 코드를 작성하기는 매우 어려워집니다. 그래서 '프라미스'가 등장했습니다.**

### 3. 프라미스

프라미스는 콜백의 단점을 해결하려는 시도 속에서 만들어졌습니다. 프라미스는 간혹 번거롭게 느껴질 수 있지만, 일반적으로 안전하고 관리하기 쉬운 코드를 만들 수 있게 됩니다.

프라미스가 콜백을 대체하는 것은 아닙니다. 사실 프라미스에서도 콜백을 사용합니다. 프라미스는 콜백을 예측 가능한 패턴으로 사용할 수 있게 하며, 프라미스 없이 콜백만 사용했을 때 나타날 수 있는 엉뚱한 현상이나 찾기 힘든 버그를 상당수 해결 합니다.

**프라미스의 기본 개념은 간단합니다**

프라미스 기반 비동기적 함수를 호출하면 그 함수는 Promise 인스턴스를 반환합니다. 프라미스는 성공하거나, 실패하거나 단 두가지 뿐 입니다. 프라미스는 성공 혹은 실패 둘 중 하나만 일어난다고 확신할 수 있습니다. 

성공한 프라미스가 나중에 실패하는 일 같은 건 절대 없습니다. 또한, 성공이든 실패든 단 한번만 일어납니다. 프라미스가 성공하거나 실패하면 그 프라미스를 '결정됐다'고 합니다.

프라미스는 객체이므로 어디든 전달할 수 있다는 점도 콜백에 비해 간편한 장점입니다. 비동기적 처리를 여기서 하지 않고 다른 함수에서 처리하게 하고 싶다면 프라미스를 넘기기만 하면 됩니다. 마치 음식점에서 받은 예약 호출기를 친구에게 맡기는 것과 비슷합니다. 예약한 인원이 때맞춰 오기만 한다면, 음식점에서는 누가 호출기를 들고 있든 상관없으니까요.

#### 3.1 프라미스 만들기

프라미스는 쉽게 만들 수 있습니다. resolve(성공)과 reject(실패) 콜백이 있는 함수로 새 Promise 인스턴스를 만들기만 하면 됩니다. countdown 함수를 고쳐 봅시다. 매개변수를 받게 만들어서 5초 카운트다운에 매이지 않게 하고, 카운트 다운이 끝나면 프라미스를 반환하게 하겠습니다.

```js
function countdown(seconds) {
    return new Promise(function(resolve,reject) {
        for (let i=seconds; i>=0; i--) {
            setTimeout(function(){
                if(i>0) console.log(i+"...");
                else resolve(console.log("GO!"));
            }, (seconds-1)*1000);
        }
    });
}
```

이대로라면 별로 좋은 함수는 아닙니다. 너무 장황한 데다가, 콘솔을 아에 쓰지 않기를 원할 수도 있습니다. 웹 페이지에서 카운트다운이 끝나면 페이지 요소를 업데이트 하는 목적에 쓰기도 별로 알맞지 않아 보입니다. 하지만 이제 시작일 뿐이고, 프라미스를 어떻게 만드는지는 잘 드러나 있습니다. resolve와 reject는 함수입니다. resolve를 여러 번 호출하면 프라미스의 프라미스 같은 걸 만들 수 있지 않을까 하는 생각이 들 수도 있겠지만, resolve나 reject를 여러번 호출하든, 섞어서 호출하든 결과는 같습니다. 첫 번째로 호출한 것만 의미가 있습니다. 프라미스는 성공 또는 실패를 나타낼 뿐입니다.(현재 이 함수에는 실패 부분이 없습니다.)

#### 3.2 프라미스 사용

**countdown 함수를 어떻게 사용하는지 알아봅시다.**

프라미스는 무시해버리고 countdown(5)처럼 호출해도 됩니다. 카운트 다운은 여전히 동작하고, 무슨 말인지 알기 어려운 프라미스는 신경쓰지 않아도 됩니다. 하지만 프라미스의 장점을 이용하고 싶다면 어떻게 해야 할까요? 

**반환된 프라미스를 사용한는 예제를 살펴봅시다.**

```js
countdown(5).then(
    function(msg) {
        //프라미스에서 resolve 호출시 매개변수를 넘기면 이 콜백함수에서 매개변수로 받을 수있습니다.
        console.log("countdown completed successfully");        
    },
    function(err) {
        console.log("countdown experienced an error:" + err.message);
    }
);
```
이 예제에서는 반환된 프라미스를 변수에 할당하지 않고 then 핸들러를 바로 호출했스빈다. then 핸들러는 성공 콜백과 에러 콜백을 받습니다. 경우의 수는 단 두가지 뿐입니다. 성공 콜백이 실행되거나, 에러 콜백이 실행되거나 입니다. 프라미스는 catch 핸들러도 지원하므로 핸들러를 둘로 나눠서 써도 됩니다.

```js
const p = countdown(5);
p.then(function(msg){
    console.log("countdown completed successfully");
});
p.catch(function(err){
    console.log("countdown experienced an error:" + err.message);
})
```

이번에는 countdown 함수를 수정해서 에러가 일어나게 만들어 봅시다. 다음 예제는 카운트다운을 하다가 13을 만나면 에러를 냅니다.
```js
function countdown(seconds) {
    return new Promise(function(resolve,reject) {
        for (let i=seconds; i>=0; i--) {
            setTimeout(function(){
                if(i===13) return reject(new Error("Oh my god"));
                if(i>0) console.log(i+"...");
                else resolve(console.log("GO!"));
            }, (seconds-1)*1000);
        }
    });
}
```
이 예제는 13보다 작은 숫자를 사용하면 에러없이 카운트다운이 실행됩니다. 그러나 13이상의 숫자를 사용하면 아래 실행결과 처럼 에러가 일어 납니다. 하지만 콘솔에는 12부터 다시 카운트를 기록합니다. reject나 resolve가 함수를 멈추지는 않습니다. 이들은 그저 프라미스의 상태를 관리할 뿐입니다.

(**TODO::** 신기한다..에러가 즉시 나지 않고 카운트가 끝난 다음 에러가 호출된다.)
```
15...
14...
12...
11...
10...
9...
8...
7...
6...
5...
4...
3...
2...
1...
GO!
countdown experienced an error:Oh my god
(node:17128) UnhandledPromiseRejectionWarning: Unhandled promise re
jection (rejection id: 1): Error: Oh my god
```

countdown 함수는 개선할 부분이 더 있습니다. 일반적으로 함수가 성공이든 실패든 결정됐다면 멈춰야 하는데 countdown 함수는 실패한 후에도 계속 진행합니다. 앞에서 콘솔에 기록하는 부분이 별로 필요하지 않다는 애기를 했었습니다. 사실 필요한 것은 카운트다운을 컨트롤 할 수 있는 기능입니다.

프라미스는 비동기적 작업이 성공 또는 실패하도록 확정하는, 매우 안전하고 잘 정의된 메커니즘을 제공하지만 현재는 진행상황을 전혀 알려주지 않습니다. 즉, 프라미스는 완료되거나 파기될 뿐 '50% 진행됐다'라는 개념은 아에 없는 겁니다. 진행상황을 알려준다면 매우 유용할 텐데 말입니다.

Q(https://github.com/kriskowal/q) 같은 프라미스 라이브러리에는 진행 상황을 보고하는 기능이 있고, 나중에 언젠가는 이런 기능이 자바스크립트 프라미스에 도입될 수도 있겠지만, 지금 당장은 기능에 기대지 않고 다른 방법을 찾아야 합니다. 이벤트에 대해 알아봐야겠군요.

#### 3.3 이벤트

이벤트는 자바스크립트에서 자주 사용됩니다. 이벤트의 개념은 간단합니다. 이벤트가 일어나면 이벤트 발생을 담당하는 개체에서 이벤트가 일어났음을 알립니다.필요한 이벤트는 모두 주시(listen) 할 수 있습니다. 어떻게 이벤트를 주시할까요? 물론 콜백을 통해서 입니다. 이벤트 시스템을 직접 만드는 것도 별로 어려운 일은 아니지만, 노드에는 이미 이벤트를 지원하는 모듈 EventEmitter가 내장되 있습니다.! 이 모듈을 써서 countdown 함수를 개선해 봅시다.EventEmitter는 countdown 같은 함수와 함께 사용해도 되지만, 원래는 클래스와 함께 사용하도록 설계 됐습니다. 그러니 먼저 countdown 함수를 Countdown 클래스로 바꿔 봅시다.

```js
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds,superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        return new Promise(function(resolve,reject) {
            for (let i=countdown.seconds; i>=0; i--) {
                setTimeout(function(){
                    if(countdown.superstitious && i===13) 
                        return reject(new Error("Oh my god"));
                    countdown.emit('tick',i);
                    if(i===0) resolve();
                }, (countdown.seconds-1)*1000);
            }
        });
    }
}
```

EventEmitter를 상속하는 클래스는 이벤트를 발생시킬 수 있습니다. 실제로 카운트다운을 시작하고 프라미스를 반환하는 부분은 go 메서드 입니다. go 메서드 안에서 가장 먼저 한 일은 countdown에 this를 할당한 겁니다. 카운트다운이 얼마나 남아 있는지 알기 위해서는 this 값을 알아야 하고, 13인지 아닌지 역시 콜백 안에서 알아야 합니다. this는 특별한 변수이고 콜백안에서는 값이 달라집니다. 따라서 this의 현재 값을 다른 변수에 저장해야 프라미스 안에서 쓸 수 있습니다.

가장 중요한 부분은 countdown.emit('tick',i) 입니다. 이 부분에서 tick 이벤틀르 발생시키고, 필요하다면 프로그램의 다른 부분에서 이 이벤트를 주시할 수 있습니다.(이벤트 이름은 원하는 대로 정해도 됩니다.) 개선한 카운트 다운은 다음과 같이 사용할 수 있습니다.

```js
const c = new Countdown(5);

c.on('tick', function(i) {
    if(i>0) console.log(i+ '...');
});
c.go()
    .then(function(){
        console.log('GO!');
    })
    .catch(function(err){
        console.error(err.message);
    })
```

EventEmitter의 on 메서드가 이벤트를 주시하는 부분입니다. 이 예제에서는 tick 이벤트 전체에 콜백을 등록했습니다. tick이 0이 아니면 출력한 다음 카운트다운을 시작하는 go를 호출합니다. 카운트 다운이 끝나면 GO!를 출력합니다 물론 GO!를 tick 이벤트 리스너 안에서 출력할 수도 있지만, 이렇게 하는 편이 이벤트의 프라미스의 차이를 더 잘 드러낸다고 생각합니다.

처음 만들었던 countdown 함수보다 훨씬 복잡한 것은 사실이지만, 그만큼 기능이 늘어났습니다. 이제 카운트다운을 어떻게 활용할지 마음대로 바꿀 수 있고, 카운트다운이 끝났을 때 완료되는 프라미스도 생겼습니다.

하지만 여전히 할일이 남았습니다. Countdown 인스턴스가 13에 도달했을 때 프라미스를 파기했는데도 카운트다운이 계속 진행되는 문제입니다.

```js
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds,superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        return new Promise(function(resolve,reject) {
            for (let i=countdown.seconds; i>=0; i--) {
                setTimeout(function(){
                    if(countdown.superstitious && i===13) 
                        return reject(new Error("Oh my god"));
                    countdown.emit('tick',i);
                    if(i===0) resolve();
                }, (countdown.seconds-1)*1000);
            }
        });
    }
}
    
const c = new Countdown(15,true)
    .on('tick', function(i) {
        if(i>0) console.log(i+ '...');
    });
    
c.go()
    .then(function(){
        console.log('GO!');
    })
    .catch(function(err){
        console.error(err.message);
    })
```

여전히 모든 카우트가 출력되며 0일 될 때까지 진행합니다. 이 문제를 해결하기가 조금 어려운 건 타임아웃이 이미 모두 만들어졌기 때문입니다. **이 문제를 해결하려면 더 진행할 수 없다는 사실을 아는 즉시 대기 중인 타임아웃을 모두 취소하면 됩니다.**

```js
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds,superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve,reject) {
            for (let i=countdown.seconds; i>=0; i--) {
                timeoutIds.push( setTimeout( function() {
                    if(countdown.superstitious && i===13) {
                        // 대기중인 타임아웃을 모두 취소합니다.
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("Oh my god"));
                    }
                    countdown.emit('tick',i);
                    if(i===0) resolve();
                }, (countdown.seconds-1)*1000)
                );
            }
        });
    }
}
```

#### 3.4 프라미스 체인

프라미스에는 체인으로 연결할 수 있다는 장점이 있습니다. 즉, 프라미스가 완료되면 다른 프라미스를 반화하는 함수를 즉시 호출할 수 있습니다. launch 함수를 만들어 카운트다운이 끝나면 실행되게 해 봅시다.

```js
function launch() {
    return new Promise(function(resolve,reject){
        console.log("Lift off!");
        setTimeout(function(){
            resolve("In orbit!");
        }, 2*1000);  //2초만에 궤도에 도달하다니!
    })
}
```

이 함수를 카운트다운에 쉽게 묶을 수 있습니다.

```js
const c = new Countdown(5,true)

c.go()
    .then(launch)
    .then(function(msg){
        console.log(msg);
    })
    .catch(function(err){
        console.error("Houston, we have a problem...");
    })
```

프라미스 체인을 사용하면 모든 단계에서 에러를 캐치할 필요는 없습니다. **체인 어디에서든 에러가 생기면 체인 전체를 멈추고 catch 핸들러가 동작합니다.** 

**카운트다운을 15초로 바꾸고 실행해 보십시오.** launch는 실행되지 않고 **catch**에 의해 콘솔에 아래 메시지가 기록 됩니다.

```
Houston, we have a problem...
```

#### 3.4 결정되지 않는 프라미스 방지하기

프라미스는 비동기적 코드를 단순화하고 콜백이 두 번 이상 실행되는 문제를 방지합니다. 하지만 resolve나 reject를 호출하는 걸 잊어서 프라미스가 결정되지 않는 문제가까지 자동으로 해결하지는 못합니다. 에러가 일어나지 않으므로 이런 실수는 찾기 매우 어렵습니다. 복잡한 시스템에서 결정되지 않은 프라미스는 그냥 잊혀질 수 있습니다.

결정되지 않은 프라미스를 방지하는 한 가지 방법은 프라미스에 타임아웃을 거는 겁니다. 충분한 시간이 지났는데도 프라미스가 결정되지 않으면 자동으로 실패하게 만들 수 있습니다. 물론 얼마나 기다려야 '충분히' 기다렸는지는 스스로 판단해야 합니다. 10분 정도는 걸릴 거로 생각하는 복잡한 알고리즘에 1초 타임아웃을 걸어서는 안 됩니다.

launch 함수에 에러 조건을 넣어 봅시다. 발사하는 로켓은 열 번에 다섯 번은 실패하는 매우 실험적인 로켓입니다.

```js
function launch() {
    return new Promise(function(resolve,reject){
        const rand = Math.random();
        if(rand < 0.5) return; //문제가
        console.log("Lift off!");
        setTimeout(function(){
            resolve("In orbit!");
        }, 2*1000);
    });
}
```
이 코드는 정말 무책임 합니다. reject를 호출하지 않는데다가(reject를 호출하지 않고 return만으로 프라미스를 파기) 심지어 콘솔에 기록하지도 않습니다. 열번 시도하면 그중 다섯 번은 영문도 모른채 실패하는 셈입니다. 절대 바람직한 일이 아니죠

다음과 같이 프라미스에 타임아웃을 거는 함수를 만들 수 있습니다.

```js
function addTimeout(fn, timeout) {
    if(timeout === undefined) timeout = 1000; //타임아웃 기본값
    return function(...args) {
        return new Promise(function(resolve,reject){
            const tid = setTimeout(reject,timeout, 
                new Error("promise timed out"));                
            fn(...args)
                .then(function(...args) {
                    clearTimeout(tid);
                    resolve(...args);                    
                })
                .catch(function(...args) {
                    clearTimeout(tid);
                    reject(...args);
                });
        })
    }
}
```

이 함수를 완벽히 이해하는 건 상당한 고급 사용자에게나 가능한 일이니 당장 이해하지 못해도 괜찮습니다. 하지만 이 함수를 사용하는 건 아주 쉽습니다. 프라미스를 반환하는 어떤 함수에든 타임아웃을 걸 수 있습니다. 로켓 과학이 엄청나게 발달해서, 가장 느린 로켓도 10초 안에는 궤도에 들어갈 수 있다고 합시다. 그러면 타임아웃은 11초면 충분합니다.

```js
c.go()
    .then(addTimeout(launch, 11*1000))
    .then(function(msg){
        console.log(+msg);
    })
    .catch(function(err){
        console.error("Houston, we have a problem:" + err.message);
    });
```
이제 launch 함수에 문제가 있더라도 프라미스 체인은 항상 결정됩니다.

### 4. 제너레이터

이를 이미 다루었 듯 제너레이터는 함수와 호출자 사이의 양방향 통신을 가능하게 합니다. 제너레이터는 원래 동기적인 성격을 가졌지만, 프라미스와 결합하면 비동기 코드를 효율적으로 관리할 수 있습니다.

비동기 코드에서 가장 어려운 부분이 무엇일까요? 동기적인 코드에 비해 만들기가 어렵다는 점입니다. 어려운 문제를 해결해야 할 때 우리는 대개 동기적으로 생각합니다. 1단게, 2단계, 3단계 하는 식으로 말입니다. 하지만 이렇게 하면 성능 문제가 있습니다. 비동기 코드는 성능 문제를 해결하기 위해 등장했습니다. 비동기 코드의 난해함은 젖혀놓고 성능 개선만 누릴 수 있다면 정말 좋지 않을까요? 제너레이터를 사용하면 일정 부분 가능해집니다.

앞에서 잠시 언급한 콜백 헬을 다시 살펴봅시다. 파일 세 개를 읽고 1분간 기다린 다음 그 내용을 합쳐서 네 번째 파일에 쓰는 문제였습니다. 사람은 대개 이런식으로 하려고 합니다.

```
dataA = read contents of 'a.txt'
dataB = read contents of 'b.txt'
dataC = read contents of 'c.txt'
wait 60 seconds
write dataA + dataB + dataC to 'd.txt'
```
제너레이터를 사용하면 이런 자연스러운 발상과 비슷한 코드를 작성할 수 있습니다. 물론 제너레이터를 쓴다고 바로 되는 것은 아니고, 선행 작업이 약간 필요하긴 합니다.

가장 먼저 할 일은 노드의 오류 우선 콜백을 프라미스로 바꾸는 겁니다. 이 기능을 nfcall(Node funcion call) 함수로 만들겠습니다.

```js
function nfcall(f, ...args) {
    return new Promise(function(resolve, reject){
        f.call(null, ...args, function(err,...args) {
            if(err) return reject(err);
            resolve(args.length<2 ? args[0] : args);
        });
    });
}
```

**Note::** 이 함수는 **Q 프라미스 라이브러리**(http://github.com/kriskowal/q)의 **nfcall** 메서드를 참고해 만들었고 같은 이름을 붙였습니다. 이런 기능인 필요하다면 Q라이브러리를 쓰는 걸 고려할 만 합니다. **Q 라이브러리에는 이 메서드 뿐만 아니라 프라미스에 관련된 좋은 메서드가 많이 있습니다.**

이제 콜백을 받는 노드 스타일 메서드를 모두 프라미스로 바꿀 수 있습니다. setTimeout을 써야 하는데 setTimeout은 노드보다 먼저 나왔고 오류 우선 콜백의 패턴을 따르지 않습니다. 그러니 같은 기능을 가진 ptimeout(Promise timeout) 함수를 새로 만듭니다.

```js
function ptimeout(delay) {
    return new Promise(function(resolve, reject){
        setTimeout(resolve, delay);
    });
}
```

다음에 필요한 것은 제너레이터 실행기 입니다. 제너레이터는 원래 동기적입니다. 하지만 제너레이터는 호출자와 통신할 수 있으므로 제너레이터와의 통신을 관리하고 비동기적 호출을 처리하는 함수를 만들 수 있습니다. 이런 역활을 할 함수 grun(generator run)을 만들겠습니다.

```js
function grun(g) { 
    const it = g();
    (function iterate(val){
        const x = it.next(val);
        if(!x.done) {
            if(x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));            
            }else{
                setTimeout(iterate,0,x.value);
            }
        }
    })();
}
```
**Note::** grun은 심슨이 제너레이터에 관해 쓴 글(http://davidwalsh.name/es6-generator)에 있는 runGenerator를 기초로 만들었습니다. 이 책의 보출 자료가 필요하다면 심슨의 글을 읽어보길 권합니다.

grun은 기초적인 제너레이터 재귀 실행기 입니다. grun에 제너레이터 함수를 넘기면 해당 함수가 실행딥니다. yield로 값을 넘긴 제너레이터는 이터레이터에서 next를 호출할 때까지 기다립니다. grun은 그 과정을 재귀적으로 반복합니다. 이터레이터에서 프라미스를 반환하면 grun은 프라미스가 완료될 때까지 기다린 다음 이터레이터 실행을 재개합니다. 이터레이터가 값을 반환하면 이터레이터 실행을 즉시 재개합니다. grun에서 iterate를 바로 호출하지 않고 setTimeout을 거친 이유는 효율성 때문입니다. 자바스크립트 엔진은 재귀 호출을 비동기적으로 실행할 때 메모리를 좀 더 빨리 회수합니다.

너무 복잡하다거나, 이런 걸 하나독 과연 삶이 단순해질까 의아할 수도 있겠지만, 어려운 부분은 다 끝났습니다. nfcall은 과거의 방법인 노드 오류 우선 콜백을 현재의 방법인 프라미스에 적용시키고, grun은 미래의 기능을 현재로 가져옵니다. ES7에서 도입하리라 예상되는 await 키워드는 grun과 거의 같은 기능을 지원하며 더 자연스러운 문법을 제공할 겁니다. 어려운 부분은 다 끝냈으니, 편리하게 사용하는 방법을 알아볼 차례입니다.

이 장에서 언급한 '사람이라면 대개 이렇게 생각했을' 방법을 그대로 사용할 수 있습니다.

```js
function* theFutureIsNow() {
    const dataA = yield nfcall(fs.readFile, 'a.txt');
    const dataB = yield nfcall(fs.readFile, 'b.txt');
    const dataC = yield nfcall(fs.readFile, 'c.txt');
    yield ptimeout(60*1000);
    yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
}
```

콜백 헬보다는 훨씬 낫고, 프라미스 하나만 쓸 때보다 더 단순합니다. 사람이 생각하는 것과 거의 같은 방법으로 동작합니다. 실행 또한 간단합니다.

```js
grun(theFutureIsNow);
```

#### 4.1 Promise.all

"그냥 세 개의 파일을 동시에 읽으면 더 효율적이지 않나?" 예리한 질문을 하는 독자도 있을 겁니다. 그 질문에 대한 답은 문제에 따라, 자바스크립트 엔진에 따라, 운영체제에 따라, 파일시스템에 따라 크게 다를 수 있습니다. 

하지만 복잡한 부분은 잠시 미뤄두고, **세 파일을 읽는 순서는 상관이 없다는 것, 그리고 설령 세 파일을 동시에 읽었다 한들 과연 효율적일지는 의문스럽다는 점을 상기합시다.** 

theFutureIsNow 함수를 이런 식으로 만든 것은, 이 방법이 이해하기 쉽고 단순해 보였기 때문입니다.

**Promise에는 all 메서드가 있습니다.** 

이 메서드는 배열로 받은 프로미스가 모두 완료될 때 완료되며, 가능하다면 비동기적 코드를 동시에 실행합니다. theFutureIsNow 함수가 Promise.all을 사용하도록 수정하기만 하면 됩니다.

```js
function* theFutureIsNow() {
    const data = yield Promise.all([
        nfcall(fs.readFile, 'a.txt'),
        nfcall(fs.readFile, 'b.txt'),
        nfcall(fs.readFile, 'c.txt')
    ]);

    yield ptimeout(60*1000);
    yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
}
```

Promise.all이 반환하는 프라미스에는 매개변수로 주어진 각 프라미스의 완료 값이 배열에 들어있었던 순서대로 들어있습니다. c.txt를 a.txt보다 먼저 읽더라도 data[0]에는 a.txt의 내용이 data[2]에는 c.txt의 내용이 들어 있습니다.

Promise.all은 편리한 도구이고 알아두면 좋지만, **이 섹션에서 가장 중요한 것은 Promise.all이 아닙니다. 이 섹션에서 가장 중요한 것은 프로그램에서 어떤 부분을 동시에 실행할 수 있고 어떤 부분은 동시에 실행할 수 없는지를 판단하는 것이어야 합니다.**

이 예제에서는 파일을 읽는 것과 타임아웃이 동시에 실행되더라도 상관없습니다. 

어떤 부분을 동시에 실행할 수 있고 어떤 부분은 동시에 실행할 수 없는지를 판단하는 것은 문제에 따라 다릅니다. 세 파일을 읽은 다음에 60초 기다리고 그다음에 병합 결과를 파일에 저장하는 것이 중요하다면 그 답은 이미 예제에 들어 있습니다. 반면 세 파일을 읽는 것과 무관하게 60초 이상이 흐른 다음 네 번째 파일에 결과를 저장하는 것이 중요하다면 타임아웃 Promise.all로 옮기는 편이 좋을 겁니다.

#### 4.2 제너레이터 실행기를 직접 만들지 마세요

연습문제 삼아 grun 같은 제너레이터 실행기를 직접 만들어 보는 것도 좋긴 하겠지만, grun에는 아직 개선할 점이 많습니다. 더 좋은 것이 이미 만들어져 있는데 처음부터 그 과정을 반복할 필요는 없습니다. **co**(https://github.com/tj/co)는 기능이 풍부하고 단단하게 잘 만들어진 제너레이터 실행기 입니다. 웹사이트를 만들고 있다면 **Koa 미들웨어**(http:/koajs.com/)를 한 번 살펴보길 권합니다. **Koa**는 **co**와 함꼐 사용하도록 설계된 미들웨어 입니다. Koa에는 우리가 theFutureIsNow에 했던 것처럼 yield를 응용해 웹 핸들러를 만들 수 있습니다.

#### 4.3 제너레이터 실행기와 예외 처리

제너레이터 실행기를 쓰면 try/catch를 써서 예외 처리를 할 수 있다는 것도 중요한 장점입니다. 콜백이나 프라미스를 사용하면 예외 처리가 쉽지 않습니다. 콜백에서 일으킨 예외는 콜백 밖에서 캐치할 수 없습니다. 제너레이터 실행기는 비동기적으로 실행하면서도 동기적인 동작 방식을 유지하므로 try/catch 문과 함께 쓸 수 있습니다. theFutureIsNow 함수에 예외 핸들러를 추가해 봅시다.

```js
function* theFutureIsNow() {
    let data;
    try{
        data = yield Promise.all([
            nfcall(fs.readFile, 'a.txt'),
            nfcall(fs.readFile, 'b.txt'),
            nfcall(fs.readFile, 'c.txt')
        ]);
    }catch(err) {
        console.error("Unable to read one or more input files: " + err.message);
        throw err;
    }

    yield ptimeout(60*1000);
    try{
        yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
    }catch(err) {
        console.error("Unable to write output file: " + err.message);
        throw err;
    }
}
```
이 소스코드에서 첫번째 try/catch는 읽을 파일이 존재하지 않을 때 동작한다. 그러므로 파일중 하나를 지우고 실행해보자. 본인의 경우 a.txt파일을 지우고 실행해본 결과 아래와 같이 콘솔에 기록되고 난 뒤에 에러가 Throw되는 것을 볼 수 있다.

```
Unable to read one or more input files: ENOENT: no such file or directory, open 'C:\node\es6\chapter14\a.txt'

(node:16620) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: ENOENT: no s
uch file or directory, open 'C:\node\es6\chapter14\a.txt'
```
필자는 try/catch를 통한 예외 처리가 프라미스의 catch 핸들러나 오류 우선 콜백보다 낫다고 주장하는 건 아닙니다. 하지만 try/catch는 예외 처리에 널리 사용되고 다들 잘 이해하는 구조이니. 아직 동기적인 처리가 더 익숙하다면 예외 처리에 try/catch를 사용하는 거도 좋습니다.

### 5. 요약

비동기적 프로그래밍의 복잡함, 그리고 그 복잡함을 덜기 위해 개발된 다양한 메커니즘을 완전히 이해하는 건 좀 어렵긴 하지만, 최신 자바스크립트 개발 동향을 따라잡기 위해서는 필요한 일입니다. 

**이 장에서는 다음과 같은 내용을 배웠습니다.**

- 자바스크립트의 비동기적 실행은 콜백을 통해 이루어집니다.
- 프라미스를 콜백 대신 사용할 수 있는 건 아닙니다. 프라미스 역시 콜백을 사용합니다.
- 프라미스는 콜백이 여러 번 호출되는 문제를 해결했습니다.
- 콜백을 여러번 호출해야 한다면 이벤트와 결합하는 방법을 생각할 수 있습니다.(프라미스도 함께 쓸 수 있습니다.)
- 프라미스는 반드시 결정된다는(성공 또는 실패한다는) 보장은 없습니다. 프라미스에 타임아웃을 걸면 이 문제가 해결 됩니다.
- 프라미스는 체인으로 연결할 수 있습니다.
- 프라미스와 제너레이터 실행기를 결합하면 비동기적 실행의 장점을 그대로 유지하면서도 동기적인 사고방식으로 문제를 해결할 수 있습니다.
- 제너레이터를 써서 동기적인 사고방식으로 문제를 해결할 때는 프로그램의 어느 부분을 동시에 실행할 수 있는지 잘 살펴야 합니다. 동시에 실행할 수 있는 부분은 Promise.all을 써서 실행하십시오
- 제너레이터 실행기를 직접 만든느 고생을 하지 말고 co나 Koa를 쓰십시오
- 노드 스타일 콜백을 프라미스로 바꾸는 고생도 할 필요 없습니다. Q를 쓰십시오
- 제너레이터 실행기를 쓰면 예외 처리도 익숙한 방식으로 할 수 있습니다.


## 정규 표현식
p355, 정규식 소극적 일치, 적극적 일치

## 브라우저의 자바스크립트

이번장에서 잠시 공통으로 사용할 HTML 예제 파일을 하나 만듭시다. 

다음과 같이 **simple.html** 파일을 만들자.

```xml
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Simple HTML</title>
        <style>
            callout {
                border: solid 1px #ff0080;
                margin: 2px 4px;
                padding: 2px 6px;                
            }
            .code {
                background: #ccc;
                margin: 1px 2px;
                padding: 1px 4px;
                font-family: monospace
            }
            // 이후에 unique란 단어가 들어있는 문단을 
            // 하이라이트하기 위한 CSS입니다.
            .highlight {
                background: #ff0;
                font-style: italic;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Simple HTML</h1>
        </header>
        <div id="content">
            <p>This is a <i>simple</i> HTML file.</p>
            <div clas="callout">
                <p>This is as fancy as we'll get</p>
            </div>
            <p>IDs (such as <span class="code">#contente</span>) are unique (there can only be one per pae).</p>
            <p>Classes (such as <span class="code">.callout</span>) can be used on many elements.</p>
            <div id="callout2" class="callout fancy">
                <p>A single HTML element can have multiple classes.</p>
            </div>
        </div>
		<script type="text/javascript">
            (function(){                	
                //문단 하이라이트
                function highlightParas(containing) {
                if(typeof containing === 'string')
                    containing = new RegExp(`\\b${containing}\\b`,'i');
                    const paras = document.getElementsByTagName('p');
                    for(let p of paras) {
                        if(!containing.test(p.textContent)) continue;
                        // clasList에 하이라이트 CSS 클래스를 해당 요소에 추가한다.
                        p.classList.add('highlight');
                    }            
                }

                // unique라는 문자열을 포함하는 문단을 하이라이트 처리합니다.
                highlightParas('unique');

                //하이라이트 처리된 문단에서 CSS 클래스를 제거
                function removeParaHighlights() {
                    const paras = document.querySelectorAll('p.highlight');
                    for(let p of paras) {
                        // classList에서 하이라이트 CSS 클래스를 
                        // 해당 요소에서 제거 합니다.
                        p.classList.remove('highlight');
                    }
                }  
			})();
    </body>
</html>
```


### 1. 데이터 속성
HTML5에서는 **데이터(data-)속성**을 도입했습니다. 이 속성을 사용해 HTML요소의 임의의 데이터를 추가할 수 있습니다. 브라우저는 이 데이터를 완전히 무시하므로 자바스크립트에서 쉽게 요소에 관한 정보를 읽거나 수정할 수 있습니다. 

**HTML을 수정해서 버튼 두 개를 추가합시다.** 
나중에 이 버튼에 **HighlightParas**와 **removeParaHighlights** 함수를 연결할 겁니다.

**HTML을 수정해서 다음의 버튼 두개를 추가합시다.**

```xml
<button data-action="highlight" data-containing="unique">
    Highlight paragraphs containing "unique"
</button>
<button data-action="removeHighlights">
    Remove highlights
</button>
```            

데이터 속성의 이름은 마음대로 정해도 됩니다. 여기서는 action과 contains를 사용했습니다. document.querySelectorAll을 사용해 action 데이터 속성에 "highlight"가 들어있는 요소를 모두 찾을 수 있습니다.

```js
const highlightActions = document.querySelectorAll('[data-action="highlight"]');
```
이 코드에서 CSS선택자를 보면 대괄호 문법을 사용하여 데이터 속성으로 찾았습니다. highlightAction 요소를 보면 dataset 프로퍼티가 있는 걸 알 수 있습니다.

```js
console.log(highlightActions[0].dataset);

// DOMStringMap {action: "highlight", containing: "unique"}
```

**Note::** DOMStringMap이라는 이름에서 짐작할 수 있겠지만 DOM API는 데이터 속성의 문자열 형태로 저장하므로 객체 데이터는 저장할 수 없습니다. 제이쿼리는 데이터 속성의 기능을 확장하는 인터페이스를 만들어서 객체도 데이터 속성에 저장할 수 있게 만들었습니다. 

자바스크립트에서 데이터 속성을 수정하거나 데이터를 추가하는 것도 간단 합니다. 예를 들어 giraffe라는 단어가 들어있는 문단을 하이라이트하되 대소문자를 구분하여 찾으려고 한다면 다음과 같이 데이터 속성을 수정할 수 있을 겁니다.


```js
highlightActions[0].dataset.containing = "giraffe";
highlightActions[0].dataset.caseSensitive = "true";
console.log(highlightActions[0].dataset);

// DOMStringMap {action: "highlight", containing: "giraffe", caseSensitive: "true"}
```

### 2. 이벤트

이제 앞에서 추가한 두개의 버튼에 클릭 이벤트를 통해 **highlightParas** 함수를 연결해보자.

```js
const highlightActions = document.querySelectorAll('[data-action="highlight"]');
            
for(let a of highlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        removeParaHighlights();
    });
}
```
모든 요소에는 **addEventListener**라는 메서드가 있습니다. 이 메서드를 통해 이벤트가 일어났을 때 호출할 함수를 지정할 수 있습니다. 호출할 함수는 Event 타입의 객체 하나만 매개변수로 받습니다. 이벤트 객체에는 해당 이벤트에 관한 정보가 모두 포함되어 있습니다. 예를 들어 click 이벤트에는 클릭한 좌표를 나타내는 clientX, clientY 프로퍼티가 있고, 이벤트가 일어난 요소를 나타내는 target 프로퍼티도 있습니다.

이벤트 모델은 이벤트 하나에 여러 가지 함수(핸들러)를 연결할 수 있도록 설계되어 있습니다. 기본 핸들러가 지정된 이벤트도 많습니다. 예를 들어 사용자가 `<a>` 링크를 클릭하면 브라우저는 이벤트에 응답해서 요청 페이지를 불러옵니다. 이런 기본 핸들러를 막으려면 이벤트 객체에서 **preventDefault()** 를 호출합니다. 기본 핸들러의 동작에 다른 기능을 추가하는 이벤트 핸들러를 만들 생각이 아니라면 대부분의 이벤트 핸들러에서 **preventDefault()** 를 사용하게 될 겁니다.

문단을 하이라이트할 때는 highlighParas를 호출하면서 버튼의 데이터 속성 containig을 넘깁니다. 이렇게 하면 나중에 어떤 단어를 찾을지 쉽게 바꿀 수 있습니다.

#### 2.1 이벤트 버블링과 캡처링

이벤트는 버튼을 클릭했을 때 버튼 자체에서 이벤트를 처리할 수 있지만, 버튼의 부모에서 처리해도 되고 그 부모의 부모에서처리해도 되는 식입니다. 여러 요소에서 이벤트를 처리할 수 있다면, 그 이벤트에 응답할 기회는 어떤 순서로 주어지는가 하는 의문이 생길 수 있습니다.

**이벤트 처리에는 버블링과 캡처링 두 가지 방법이 있습니다.**

우선 현재 이벤트가 일어난 요소의 가장 먼 부모에서 부터 이벤트를 캡처하는 것을 캡처링이라 하고, 반대로 현재 이벤트가 일어난 요소에서 시작해 부모로 거슬러 올라가는 방법을 버블링이라 합니다.

HTML5 이벤트 모델에서는 두 방법을 모두 지원하기 위해 먼저 해당 요소의 가장 먼 조상에서 시작해 해당 요소까지 내려온 다음, 다시 해당 요소에서 시작해 가장 먼 조상까지 거슬러 올라가는 방법을 택했습니다.

**이벤트 핸들러에는 다른 핸들러가 어떻게 호출될지 영향을 주는 세 가지 방법이 있습니다.**

가장 많이 쓰이는 것은 우리가 이미 본 **preventDefault**입니다. 이 메서드는 이벤트를 취소합니다. 취소된 이벤트는 계속 전달되기는 하지만, **defaultPrevented 프로퍼티**가 **true**로 바뀐 채 전달됩니다. 브라우저의 이벤트 핸들러는 **defaultPrevented 프로퍼티**가 **true**로 바뀐 이벤트를 무시하고 아무 일도 하지 않습니다. 프로그래머가 만든 이벤트 핸들러에서는 **defaultPrevented** 프로퍼티를 무시한 채 동작을 수행할 수 있고, 보통 그렇게 합니다.

두 번째 방법은 **stopPropagation**입니다. 이 메서드는 이벤트를 현재 요소에 끝내고 더는 전달되지 않게 막습니다. 즉, 해당 요소에 연결된 이벤트 핸들러는 동작하지만 다른 요소에 연결된 이벤트 핸들러는 동작하지 않습니다. 

마지막 방법은 가장 강력한 **stopImmediatePropagatio**n입니다. 이 메서드는 다른 이벤트 핸들러, 심지어 현재 요소에 연결된 이벤트 핸들러도 동작하지 않게 막습니다.

다음 HTML을 봅시다.
```xml
<!doctype html>
<html>
    <head>
        <title>Event Prpagation</title>
        <meta charset="utf-8">
    </head>
    <body>
        <div>
            <button>Click Me</button>
        </div>
        <script type="text/javascript">
            //이벤트 핸들러를 만들어 반환합니다.
            function logEvent(handlerName, type, cancel, stop, stopImmediate) {
                //실제 이벤트 핸들러 입니다.
                return function(evt) {
                    if(cancel) evt.preventDefault();
                    if(stop) evt.stopPropagation()
                    if(stopImmediate) evt.stopImmediatePropagation();                                    
                    console.log(`${type}: ${handlerName}` + 
                        (evt.defaultPrevented ? ' (canceled)' : ''));
                }
            }

            //이벤트 핸들러를 요소에 추가합니다.
            function addEventLogger(elt,type, action) {
                const capture = type === 'capture';
                elt.addEventListener('click',
                    logEvent(elt.tagName, type, 
                        action === 'cancel', 
                        action === 'stop', 
                        action === 'stop!'
                    ), capture);
            }

            const body = document.querySelector('body');
            const div = document.querySelector('div');
            const button = document.querySelector('button');

            addEventLogger(body, 'capture');
            addEventLogger(body, 'bubble');
            addEventLogger(div, 'capture');
            addEventLogger(div, 'bubble');
            addEventLogger(button, 'capture');
            addEventLogger(button, 'bubble');
        </script>
    </body>
</html>
```

버튼을 클릭하면 콘솔에 다음과 같은 내용이 출력됩니다. 앞에 설명했듯이 캡처링으로 현재 이벤트가 발생한 요소까지 내려온 다음 다시 해당 요소에서 부모로 다시 올라가며 버블링이 일어난 것을 볼 수 있습니다.

```
capture: BODY
capture: DIV
capture: BUTTON
bubble: BUTTON
bubble: DIV
bubble: BODY
```

**이제 이벤트를 취소해 봅시다.**

다음과 같이 예제를 수정해서 `<div>`의 캡처 단계에서 취소되도록 해 봅시다.

```js
addEventLogger(body, 'capture');
addEventLogger(body, 'bubble');
addEventLogger(div, 'capture','cancel');
addEventLogger(div, 'bubble');
addEventLogger(button, 'capture');
addEventLogger(button, 'bubble');
```

이벤트 전달은 계속 되지만, 이벤트가 취소됐다고 기록된 걸 볼 수 있습니다.

```
capture: BODY
capture: DIV (canceled)
capture: BUTTON (canceled)
bubble: BUTTON (canceled)
bubble: DIV (canceled)
bubble: BODY (canceled)
```

이제 버튼의 캡처 단계에서 이벤트 전달을 중지해 봅시다.

```js
addEventLogger(body, 'capture');
addEventLogger(body, 'bubble');
addEventLogger(div, 'capture','cancel');
addEventLogger(div, 'bubble');
addEventLogger(button, 'capture', 'stop');
addEventLogger(button, 'bubble');
```

버튼 요소에서 이벤트 전달이 멈추는 걸 볼 수 있습니다. 캡처링까지 진행하고 멈추게 했지만 버튼의 버블링 이벤트는 여전히 발생합니다. 하지만 `<div>`와 `<body>` 요소는 이벤트 버블링을 받지 못합니다.

```
capture: BODY
capture: DIV (canceled)
capture: BUTTON (canceled)
bubble: BUTTON (canceled)
```

마지막으로, 버튼의 캡처 단계에서 즉시 멈추게 만들어 봅시다.

```js
addEventLogger(body, 'capture');
addEventLogger(body, 'bubble');
addEventLogger(div, 'capture','cancel');
addEventLogger(div, 'bubble');
addEventLogger(button, 'capture', 'stop!');
addEventLogger(button, 'bubble');
```

이제 버튼의 캡처 단계에서 이벤트 전달이 완전히 멈췄고, 이후로는 아무 일도 일어나지 않습니다.

```
capture: BODY
capture: DIV (canceled)
capture: BUTTON (canceled)
```

**Note::** addEventListener는 이벤트를 추가하는 구식 방법인 'on' 프로퍼티를 대체할 목적으로 만들었습니다. 예를 들어 elt에 클릭 핸들러를 추가할 때 `elt.onclick = function(evt) {/*handler*/}` 같은 문법을 썼습니다. 이런 문법의 가장 큰 단점은 이벤트에 핸들러 단 하나만 등록할 수 있다는 겁니다.

이벤트 전달은 초보자들을 머리 아프게 만드는 주제 중 하나입니다. 이벤트 전달에 대해 확실하게 알게 된다면 당신은 상당히 돋보일 겁니다.

**Note::** 제이쿼리 이벤트 리스너에서 명시적으로 false를 반환하는 것은 stopPropagation을 호출하는 것과 동등한 효과가 있습니다. 하지만 이것은 제이쿼리의 단축 문법일 뿐이며, DOM API에서는 동작하지 않습니다.


### 3. Ajax
AJAX를 통해 서버와 비동기적으로 통신하며 페이지 전체를 새로 고칠 필요 없이 서버에서 데이터를 받아올 수 있습니다. 이 혁명적인 시스템은 2000년 초반 XmlHTTPRequst의 도입으로 가능해졌고, 웹 2.0이라 불리기도 했습니다.

**Ajax의 핵심개념은 간단합니다.**

브라우저 스크립트에서 HTTP 요청을 만들어 서버에 보내고 데이터를 받습니다. 받는 데이터는 보통 JSON 형식입니다. XML로 받을 수도 있지만 JSON이 자바스크립트로 처리하기 훨씬 쉽습니다. 

Ajax 역시 다른 웹페이지와 마찬가지로 HTTP 위에서 동작하지만, 페이지를 불러오고 렌더링하는 부담이 줄어들으므로 웹 애플리케이션이 훨씬 빨라집니다.

**Ajax를 사용하려면 서버가 필요합니다.**

우선 Node.JS를 이용해 Ajax 서비스를 제공하는 간단한 서버를 다음과 같이 작성하여 **ajaxServer.js**로 저장 합니다.

```js
const http = require('http');
const server = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify({
        platform: process.platform,
        nodeVersion:process.version,
        uptime: Math.round(process.uptime()),
    }));
});

const port = 7070;
server.listen(port, function(){
    console.log(`Ajax server started on port ${port}`);
});
```
이 코드는 시스템의 운영체제와 노드.js 버전, 서버 운영시간을 보고하는 매우 단순한 서버입니다. 

**Note::**
Ajax가 널리 쓰이면서 교차소스 지원공유(CORS)라는 잠재적 취약점이 드러났습니다. 이 예제에서는 Access-Control-Allow-Origin 헤더에 * 값을 써서, 클라이언트가 보안 경고를 출력하지 않도록 했습니다. 실무 서버에서는 이렇게 하면 안되고 기본적으로 허용되는 같은 프로토콜, 도메인, 포트를 사용하거나 서비스에 접속할 수 있는 프로토콜, 도메인, 포트를 명시해야 합니다. 예제로 사용할 때는 이렇게 CORS 체크를 비활성화해도 안전합니다.

서버를 시작하기 위해 다음과 같이 입력 합니다.

`$ node ajaxServer.js`

이제 HTML문서를 생성하여 Ajax로 받아올 정보를 표시할 플레이스 홀더를 만듭니다.
```xml
<div class="serverInfo">
    Server is running on <span data-replace="platform">???</span>
    with Node <span data-replace="nodeVersion">???</span>. It has
    been up for <span data-replace="uptime">???</span> seconds.        
</div>
```

그리고 XMLHttpRequest를 이용해 Ajax 호출하는 스크립트를 추가합니다.

```xml
<script type="text/javascript">
    function refreshServerInfo(){
        const req = new XMLHttpRequest();
        req.addEventListener('load', function(){

            // TODO: 값을 HTML에 삽입하는 것은 나중에 합니다.
            // {"nodeVersion":"v6.11.2","uptime":3852}
            console.log(this.responseText);

            // this.responseText는 JSON이 들어있는 문자열 입니다.
            // JSON.parse를 써서 문자열을 객체로 바꿉니다.
            const data = JSON.parse(this.responseText);
            console.log(data);
            const serverInfo = document.querySelector('.serverInfo');
            
            // 서버에서 반환한 객체를 키 기준으로 순회합니다.
            Object.keys(data).forEach(p=>{     

                console.log(p);

                // 텍스트를 교체할 요소를 찾습니다.
                const replacement = serverInfo.querySelectorAll(`[data-replace="${p}"]`);
            
                // 서버에서 받은 값으로 텍스트를 교체합니다.
                for(let r of replacement) {                        
                    r.textContent = data[p];
                }
            });
            
        });

        req.open('GET', 'http://localhost:7070', true);
        req.send();
    }

    refreshServerInfo();
</script>
```

JQuery를 이용하면 다음과 같이 간결하게 바꿀 수 있다.

```js
function refreshServerInfo(){            
    const serverInfo = document.querySelector('.serverInfo');
    $.get('http://localhost:7070').then(
        //성공한 경우
        function(data) {
            Object.keys(data).forEach(p=>{     
                $(`[data-replace="${p}"]`).text(data[p]);
            });
        },
        function(jqXHR, textStatus, err) {
            $serverInfo.addClass('error').html('Error connecting to server.');
        }
    );
}
```

## 객체 프로퍼티 설정과 프록시

### 1. 접근자 프로퍼티 getter와 setter

```js
const USER_EMAIL = Symbol();
class User {
    set email(value) {        
        if(!/@/.test(value))
            throw new Error(`invalid email: ${value}`);
        
        this[USER_EMAIL] = value;
    }
    get email(){
        return this[USER_EMAIL];
    }
}

const user = new User();
user.email = "test@test";

console.log(user.email);
// test@test
```

### 2. 객체 프로퍼티 속성

객체 프로퍼티에 접근할 때는 점 연산자나 대괄호 연산자를 사용합니다. 그리고 프로퍼티에는 자신이 속한 객체 안에서 어떻게 동작할지 결정하는 속성이 있습니다. 먼저 우리가 잘 알고 있는 방식으로 프로퍼티를 만들고, Object.getOwnPropertyDescriptor를 써서 속성을 알아봅시다.

```js
const obj = {foo:"bar"};
Object.getOwnPropertyDescriptor(obj, 'foo');
```

**결과는 다음과 같습니다.**

```js
{ value: 'bar', writable: true, enumerable: false, configurable: true }
```

위의 결과를 보면 프로퍼티 속성 세가지가 있는 것을 볼 수 있습니다.

- **쓰기 가능한자(writable) :** 프로퍼티 값을 바꿀 수 있는지 아닌지 판단합니다.
- **나열 가능한자(enumerable) :** for...in 문이나 Object.keys, 확산 연산자에서 객체 프로퍼티를 나열할 때 해당 프로퍼티가 포함될지 아닌지 판단합니다.
- **설정 가능한자(configurable) :**  프로퍼티를 객체에서 삭제하거나 속성을 수정할 수 있는지 아닌지 판단합니다.

**writable**을 이용하면 obj의 foo 프로퍼티를 읽기 전용으로 만들 수 있습니다. 

**writable**로 지정된 프로퍼티에 값을 할당하려하면 아래 처럼 에러가 발생합니다.

```js
Object.defineProperty(obj,'foo',{writable:false});
obj.foo = 3;
// TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
```

**enumerable**은 배열 프로퍼티를 나열할 수 없게 만들 수 있습니다. 

배열에서 for...in이나 Object.keys를 사용하는 것 역시 권장하지는 않지만 다른 개발자가 사용하는 걸 막을 수는 없습니다. 따라서 배열에 숫자형 프로퍼티가 아닌 프로퍼티를 추가한다면 다른 누군가가 그 배열에서 for...in이나 Object.keys를 사용했을 때 노출되지 않도록 나열할 수 없게 만들어야 합니다.

```js
const arr = [3,1.5,9,2,5,2];

arr.sum = function() { 
    return this.reduce((a,x) => a+x ); 
}

arr.avg = function() { 
    return this.sum()/this.length; 
}

Object.defineProperty(arr,'sum',{enumerable:false});
Object.defineProperty(arr,'avg',{enumerable:false});

//위의 프로퍼티 설정에 따라 sum와 avg를 제외한 배열의 인덱스만 출력됩니다.
for(var num in arr) console.log(num);
```

### 3. 객체 보호: 동결, 봉인, 확장 금지

#### 3.1. 객체 동결

```js
const appInfo = {
    company: 'White Knight Software Inc.',
    version: '1.3.5',
    buildId: '0a995448-ead4-4a8b-b050-9c9083279ea2',
    // 이 함수는 getter이므로 동결한 상태에서도 계속 동작합니다.
    copyright() {
        return `@ ${new Date().getFullYear()}, ${this.company}`;        
    }
};

// 동결된 객체에 대해서 프로퍼티를 추가하거나 변경, 값설정에 대해서는 
// 확실하게 금지되어 현재의 객체가 상태가 변경되지 않고 유지된다.
Object.freeze(appInfo);
Object.isFrozen(appInfo);   //true

appInfo.newProp = 'test';
// TypeError: cannot add property newProp, object is not extensible

delete appInfo.company;
// TypeError: cannot delete property 'company' of [object Object]

appInfo.company = 'test';
// TypeError: cannot assign to read-only property 'company' of [object Object]

Object.defineProperty(appInfo, 'company', {enumerable: false});
// TypeError: Cannot redefine property: company
```

#### 3.2 객체 봉인

```js
class Logger{
    constructor(name) {
        this.name = name;
        this.log = [];
    }
    add(entry) {
        this.log.push({
            log: entry,
            timestamp: Date.now(),
        });
    }
}

const log = new Logger("Captain's Log");

// 클래스의 인스턴스를 사용하면서, 
// 인스턴스의 프로퍼티를 수정하는 메서드는 동작하도록 할 때 
// 봉인을 사용할 수 있습니다.
Object.seal(log);
Object.isSealed(log);

// 프로퍼티를 읽고 값을 수정하는 것은 허용지만 
// 아래의 프로퍼티를 추가,삭제하는 시도에 대해서는 
// 동작하지 않는다.
log.name = "captain's Boring Log";          // OK
log.add("Anotherboring dat at se....");     // OK

log.newProp = 'test';
// TypeError: cannot add property newProp, object is not extensible

log.name = 'test';  // OK

delete log.name;
// TypeError: Cannot delete property 'name' of #<Logger>

Object.defineProperty(log, 'log', {enumerable: false});
// TypeError: Cannot redefine property: company
```

#### 3.3 객체 확장금지

```js
class Logger{
    constructor(name) {
        this.name = name;
        this.log = [];
    }
    add(entry) {
        this.log.push({
            log: entry,
            timestamp: Date.now(),
        });
    }
}

const log2 = new Logger("First Mate's Log");

// 확장 금지는 프로퍼티에 값을 설정하거나, 삭제하거나, 속성을 
// 변경하는 작업은 모두 허용되지만 이름 처럼 확장을 금지합니다.
Object.preventExtensions(log2);
Object.isExtensible(log2);  // false

log2.name = "First Mate's Boring Log";  // OK
log2.add("Another boring day at sea");  // OK

log2.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible

log2.name = 'test';
delete log2.name;
Object.defineProperty(log2, 'log', {enumerable: false});
```

### 4. 프락시

프락시는 ES6에서 새로 추가된 메타프로그래밍 기능 입니다. 메타프로그래밍이란 프로그램이 자신을 수정하는 것을 말합니다.(책에 있는 것만으로는 ES6에 추가된 프락시에 대해 알기는 충분하지 못한 듯 하다. 다음에 나올 예제들은 그냥 해당하는 프로퍼티 접근자 getter와 setter에서 직접 제어할 수 있는 부분들이다.)

객체 프락시는 간단히 말해 객체에 대한 작업을 가로채고, 필요하다면 작업 자체를 수정하는 기능 입니다.

접근을 수정하는 예제를 만들어 봅시다.

```js
const coefficients = {
    a:1,
    b:2,
    c:5
};
```

이 객체의 프로퍼티가 수학의 계수라고 생각해 봅시다. 다음과 같은 식으로 사용할 수 있을 겁니다.

```js
function evaluate(x, co) {
    return co.a + co.b * x +co.c * Math.pow(x,2);
}
```
만약 2차 방정식의 계수를 객체에 저장하고, x 값이 무엇이든 방정식을 계산할 수 있습니다. 그런데 계수가 빠진 객체를 가지고 계산하려 하면 어떻게 될까요?

```js
const coefficients = {
    a:1,
    c:5
};
evaluate(5, coefficients); // Nan
```

프락시를 이용하면 작업을 가로채서 정의되지 않은 프로퍼티는 항상 0을 반환하게 만들 수 있습니다. coefficients 객체에 프락시를 만듭시다.

```js
const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        return target[key] || 0;
    }
})
```

Proxy 생성자에 넘기는 첫 번째 매개 변수는 타켓, 즉 프락시할 객체이빈다. 두 번째 매개변수는 가로챌 동작을 가르키는 핸들러입니다. 여기서는 프로퍼티에 접근하는 동작만 가로챘으며 get함수가 핸들러 입니다.

get 함수는 매개변수로 타켓, 프로퍼티 키, 수신자를 받습니다. 이 예제에서는 타켓과 프로퍼티 키만을 사용했습니다.

위의 프락시 객체를 테스트 해보자. 이 예제에서는 해당 키가 타켓에 있는지 확인하고, 없으면 0을 반환한다.

```js
console.log(betterCoefficients.a);          // 1
console.log(betterCoefficients.b);          // 0
console.log(betterCoefficients.c);          // 5
console.log(betterCoefficients.d);          // 0
console.log(betterCoefficients.anything);   // 0
```

cofficients 객체의 프락시에는 무한한 프로퍼티가 있고, 직접 정의한 프로퍼티를 제외하면 모두 값이 0인 것이나 마찬가지 입니다.

키로 소문자 한 글자를 받았을 때만 프락시가 동작하게 할 수도 있습니다.

```js
const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        if(!/^[a-z]$/.test(key)) return target[key];
        return target[key] || 0;
    }
})
```

**연습문제 타임!**

키의 값이 숫자가 아닐 때는 항상 0을 반환하게 해보자.

```js
const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        //if(!/^[0-9]+$/.test(target[key])) return 0;
        if(!Number.isInteger(target[key])) return 0;
        return target[key] || 0;
    }
})
```

프로퍼티에 값을 할당하려 할떄 set 핸들러를 가로챌 수 있습니다. 객체에서 위험한 프로퍼티가 있어서 한 단계를 더 거치지 않으면 값을 할당하거나 메서드를 호출할 수 없게 하려고 합니다. 거쳐야 할 단계는 allowDangerousOperations setter입니다. 이 값이 true일 때만 위험한 프로퍼티에 접근할 수 있습니다.

```js
const cook = {
    name: "Walt",
    redPhosphorus: 100, // 위험합니다.
    water: 500          // 안전합니다.
};

const protectedCook = new Proxy(cook, {
    set(target, key, value) {
        if(key == 'redPhosphorus') {
            if(target.allowDangerousOperations)
                return target.redPhosphorus = value;
            else 
                return console.log("Too dangerous!");
        }
        // 다른 프로퍼티는 모두 안전 합니다.
        target[key] = value;
    }
});

protectedCook.water = 550;  // 550
protectedCook.redPhosphorus = 150; // Too dangerous!

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;   // 150

console.log(protectedCook.redPhosphorus);
```

**동현:** 앞에서 본 예제들은 접근자 프로퍼티인 getter와 setter를 이용해 충분히 할 수 있다. 책에서 말하기를 여기서 설명한 것은 프락시로 할 수 있는 극히 일부에 불과하다 말한다. 

프락시에 더 알고 싶다면 악셀 라우슈마이어(Axel Rauschmayer)가 쓴글인 『ES6 프락시와 메타프로그래밍』(http://www.2ality.com/2014/12/es6-proxies.html)을 먼저 읽고, MDN문서 http://mzl.la/1QZKM7U 를 읽을 것을 권한다.