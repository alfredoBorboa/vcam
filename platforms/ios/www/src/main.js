/*para index.html*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;

// create the main context
var mainContext = Engine.createContext();

// your app here

var fondoP1 = new Surface({
                          content: "<h1>First Splash</h1>",
                          size: [undefined, undefined],
                          properties: {
                            backgroundColor: '#000',
                            color: '#FFF',
                            textAlign: 'center',
                            padding: '5px'
                          }

});

var sModFondoP1 = new StateModifier();
mainContext.add(sModFondoP1).add(fondoP1);
sModFondoP1.setOpacity( 0 );
sModFondoP1.setOpacity( 1.0, { duration: 2000, curve: 'easeInOut' }, function(){ cargaHome1aVez(); } );


var fondoP2 = new Surface({
                          content: "<h1>Home</h1>",
                          size: [undefined, undefined],
                          properties: {
                          backgroundColor: '#000',
                          color: '#FFF',
                          textAlign: 'center',
                          padding: '5px'
                          }
                          
                          });

var sModFondoP2 = new StateModifier();
mainContext.add(sModFondoP2).add(fondoP2);
sModFondoP2.setOpacity( 0 );


function cargaHome1aVez(){
    setTimeout( function(){
               sModFondoP1.setOpacity( 0.0, { duration: 2000, curve: 'easeInOut' }, function(){
                                      sModFondoP2.setOpacity( 1.0, { duration: 2000, curve: 'easeInOut' });
                                      });
               }, 3000);
}

/*stateModifier.setTransform(
    Transform.translate( 100, 300, 0),
    { duration: 1000, curve: 'easeInOut' }
                           );*/



