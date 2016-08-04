var redis = require ('redis'); 
var client = redis.createClient (); 

client.on ('connect', function() {
	console.log ('connected');
}); 

client.set ("books_count","123",redis.print);
client.get ("books_count",function (err,reply) {
	console.log('books_count = ' + reply.toString());
});

