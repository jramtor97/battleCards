var modelo = require('./modelo.js');
describe("El juego de las cartas...", function() {
  var juego;
  var usr;
  
  beforeEach(function() {
    juego = new modelo.Juego();
    usr=new modelo.Usuario("Sandra");
  });

  it("compruebo condiciones iniciales (cartas, usuarios)", function() {
    expect(juego.cartas).toBeDefined();
    expect(juego.cartas.length).toEqual(30);
    expect(juego.usuarios).toBeDefined();
    expect(juego.usuarios.length).toEqual(0);
  });

  it("el usuario tiene un mazo",function(){
  	expect(usr.mazo).toBeDefined();
  	expect(usr.mazo.length).toEqual(0);

  });

  it("el usuario tiene mano",function(){
    expect(usr.mano).toBeDefined();
    expect(usr.mano.length).toEqual(0);
  });

  it("agrego el usuario Sandra al juego",function(){
  	juego.agregarUsuario(usr);
  	expect(juego.usuarios.length).toEqual(1);
  	expect(juego.usuarios[0].nombre).toEqual("Sandra");
  	expect(usr.mazo.length).toEqual(30);
  });

  




});
