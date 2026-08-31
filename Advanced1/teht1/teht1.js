(function() {

	function increment(){
		counter += 1;
		console.log(counter);
	}

	function reset(){
		counter = 0;
		console.log(counter);
	}

	let counter = 0;

	return object = {
		increment,
		reset,
	};
})();

object.increment();
object.increment();
object.reset();