module.exports = function(){

	var master = {
		elements: {},
		values: {
			userid: null,
			page: {
				base: null,
				sub: null,
				project: null
			}
		}
	};
	master.elements.head = $('head');

	master.values.userid = master.elements.head.find('meta[name="user"]').prop('content');
	master.values.page = master.elements.head.find('meta[name="page"]').prop('page');
	master.values.p
}