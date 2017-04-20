const store = createStrore(reducers);


store.subscribe( function () {
	console.log("store changed ", store.getState());
});