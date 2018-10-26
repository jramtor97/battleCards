var request=require("request");

//var url='https://spacechallenge.herokuapp.com/';
var url="http://127.0.0.1:1338/"
//var socket;//=require('socket.io-client')(url);
//var socket2;//=require('socket.io-client')(url);
//socket=io.connect(url);
var headers={
	//'User-Agent': 'request'
	"User-Agent":"Super Agent/0.0.1",
	'Content-Type' : 'application/x-www-form-urlencoded' 
}

console.log("===========================================");
console.log(" Pruebas BattleCards - Flujo normal");
console.log(" 1. Agrego el usuario Loli");
console.log(" 2. Agrego el usuario Luis");
console.log(" 3. Loli crea la partida Prueba");
console.log(" 4. Luis se une a la partida Prueba");
console.log(" 5. Loli obtener las cartas de la mano");
console.log(" 6. Luis obtener las cartas de la mano");
console.log("===========================================");

function agregarUsuario(nombre){
	var options={
		url:url+'agregarUsuario/'+nombre,
		method:'GET',
		headers:headers
	}
	console.log("---------------------------------------------------------------------------");
	console.log("1. Intentar agregar el usuario "+nombre);
	console.log("---------------------------------------------------------------------------");

	request(options,function(error,response,body){
		if (!error && response.statusCode==200){
			//console.log(body);
			var jsonResponse = JSON.parse(body) ;
    		if (jsonResponse.usr!=undefined){
    			id1=jsonResponse.usr;
	    		console.log("Usuario id: "+jsonResponse.usr+" creado correctamente \n");
	    		agregarUsuario2("Luis");
	    	}
	    	else{
	    		console.log("No se pudo agregar al usuario \n");
	    	}
		}
		else{
			console.log(response.statusCode);
		}
	});
}

function crearPartida(id, nombre){
	var options={
		url:url+'crearPartida/'+id+'/'+nombre,
		method:'GET',
		headers:headers
	}
	console.log("---------------------------------------------------------------------------");
	console.log("1. El usuario "+id+ "crea la partida "+nombre);
	console.log("---------------------------------------------------------------------------");

	request(options,function(error,response,body){
		if (!error && response.statusCode==200){
			//console.log(body);
			var jsonResponse = JSON.parse(body) ;
    		if (jsonResponse.usr!=undefined){
    			id2=jsonResponse.usr;
	    		console.log("Partida id: "+jsonResponse.usr+" creado correctamente \n");
	    		//crearPartida(id1,"prueba");
	    	}
	    	else{
	    		console.log("No se pudo agregar a la partida \n");
	    	}
		}
		else{
			console.log(response.statusCode);
		}
	});
}



var id1,id2;
agregarUsuario("Loli");
