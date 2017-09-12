'use strict';

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