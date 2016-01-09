"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
	"use strict";
	var User = (function () {
		function User(name) {
			_classCallCheck(this, User);

			this.name = name;
		}

		_createClass(User, [{
			key: "sayHi",
			value: function sayHi() {
				console.log("Hi!", this.name);
			}
		}], [{
			key: "sayBye",
			value: function sayBye() {
				console.log("Bye!");
			}
		}]);

		return User;
	})();
	new User("Sergej").sayHi();
	User.sayBye();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQ0FBQyxDQUFDLFlBQVk7QUFDYixhQUFZLENBQUM7QUFDWixLQUFJLElBQUk7QUFDSSxXQURSLElBQUksQ0FDSyxJQUFJLEVBQUM7eUJBRGQsSUFBSTs7QUFFTixPQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztHQUNqQjs7ZUFIRSxJQUFJOztVQUtGLGlCQUFFO0FBQ04sV0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCOzs7VUFDWSxrQkFBRztBQUNmLFdBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEI7OztTQVZFLElBQUk7S0FXUCxDQUFDO0FBQ0YsS0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDM0IsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ2YsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0XHRsZXQgVXNlciA9IGNsYXNzIHtcblx0XHRcdGNvbnN0cnVjdG9yKG5hbWUpe1xuXHRcdFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFx0fVxuXHRcdFx0bmFtZTogXCJcIlxuXHRcdFx0c2F5SGkoKXtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJIaSFcIiwgdGhpcy5uYW1lKTtcblx0XHRcdH1cblx0XHRcdHN0YXRpYyBzYXlCeWUoKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQnllIVwiKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdG5ldyBVc2VyKFwiU2VyZ2VqXCIpLnNheUhpKCk7XG5cdFx0VXNlci5zYXlCeWUoKTtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
