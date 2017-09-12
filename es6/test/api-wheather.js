const Rx = require("rxjs");
function get(url) {
    return Rx.Observable.create(observer => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = () => {
        if (req.status === 200) {
          observer.next(req.response);
          observer.complete();
        } else {
            console.log("error1");
          observer.error(new Error(req.statusText));
        }
      }
  
      req.onerror = () => {
        console.log("error2");
        observer.error(new Error('An error occured'));
      };
  
      req.send();
    });
  }
  
  const source = get('http://api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=62ccfb02094e9fbb1be6519273bd9b4d');
  
  source.subscribe(response => console.log(response),
                   error => console.error(error),
                    () => console.log('done'));