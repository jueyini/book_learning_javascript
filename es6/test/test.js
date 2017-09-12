const Rx = require("rxjs");
const RxDOM = require('rxjs/Rx.DOM');

const source = RxDOM.Observable.ajax({
  url: window.location.href,
  responseType: 'text/html'
});

source.subscribe(xhr => console.log(xhr),
                 error => console.error(error),
                 () => console.log('done'));