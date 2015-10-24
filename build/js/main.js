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
		}]);

		return User;
	})();
	new User("Sergej").sayHi();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQ0FBQyxDQUFDLFlBQVk7QUFDYixhQUFZLENBQUM7QUFDWixLQUFJLElBQUk7QUFDSSxXQURSLElBQUksQ0FDSyxJQUFJLEVBQUM7eUJBRGQsSUFBSTs7QUFFTixPQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztHQUNqQjs7ZUFIRSxJQUFJOztVQUtGLGlCQUFFO0FBQ04sV0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCOzs7U0FQRSxJQUFJO0tBUVAsQ0FBQztBQUNGLEtBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQzVCLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0bGV0IFVzZXIgPSBjbGFzcyB7XG5cdFx0XHRjb25zdHJ1Y3RvcihuYW1lKXtcblx0XHRcdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHRcdH1cblx0XHRcdG5hbWU6IFwiXCJcblx0XHRcdHNheUhpKCl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiSGkhXCIsIHRoaXMubmFtZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRuZXcgVXNlcihcIlNlcmdlalwiKS5zYXlIaSgpO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
