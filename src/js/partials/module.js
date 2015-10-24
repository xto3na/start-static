;(function () {
	"use strict";
		let User = class {
			constructor(name){
				this.name = name;
			}
			name: ""
			sayHi(){
				console.log("Hi!", this.name);
			}
		};
		new User("Sergej").sayHi();
})();