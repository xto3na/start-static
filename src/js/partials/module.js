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
			static sayBye() {
				console.log("Bye!");
			}
		};
		new User("Sergej").sayHi();
		User.sayBye();
})();