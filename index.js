var Rx = require("rx");

var greetingSubject = new Rx.Subject();

greetingSubject.subscribe(function (person) {
  console.log("Hello, " + person + "!");
});

greetingSubject.onNext("world");
