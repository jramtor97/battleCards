var modelo = require('./modelo.js');
describe("El juego de las cartas...", function() {
  var juego;
  var usr;
  
  beforeEach(function() {
    juego = new modelo.Juego();
    usr=new modelo.Usuario("Sandra");
    usr2 = new modelo.Usuario("Juan");
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
    expect(usr2.mazo).toBeDefined();
    expect(usr2.mazo.length).toEqual(0);
  });

  it("el usuario tiene mano",function(){
    expect(usr.mano).toBeDefined();
    expect(usr.mano.length).toEqual(0);
    expect(usr2.mano).toBeDefined();
    expect(usr2.mano.length).toEqual(0);
  });

  it("agrego varios usuarios al juego",function(){
    juego.agregarUsuario(usr);
    juego.agregarUsuario(usr2);
    expect(juego.usuarios.length).toEqual(2);
    expect(juego.usuarios[0].nombre).toEqual("Sandra");
    expect(juego.usuarios[1].nombre).toEqual("Juan");
    expect(usr.mazo.length).toEqual(30);
    expect(usr2.mazo.length).toEqual(30);
  });
});
