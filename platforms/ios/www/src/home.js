/*para home.html*/
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

var console = new Surface({
                          content: "<h1>Home</h1>",
                          size: [undefined, undefined],
                          properties: {
                            backgroundColor: '#000',
                            color: '#FFF',
                            textAlign: 'center',
                            padding: '5px'
                          }

});

var stateModifier = new StateModifier();

mainContext.add(stateModifier).add(console);

/*stateModifier.setTransform(
    Transform.translate( 100, 300, 0),
    { duration: 1000, curve: 'easeInOut' }
                           );*/

stateModifier.setOpacity( 1.0 );
stateModifier.setOpacity( 1.0, { duration: 2000, curve: 'easeInOut' });



