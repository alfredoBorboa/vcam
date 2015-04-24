/*para index.html*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var FlexibleLayout = famous.views.FlexibleLayout;
var ModifierChain = famous.modifiers.ModifierChain;
var RenderNode = famous.core.RenderNode;
//var FastClick = famous.inputs.FastClick;

// create the main context
var mainContext = Engine.createContext();



// -----------------------------intro splash

var mGlobalP1 = new StateModifier({
                                  size: [ undefined, undefined ],
                                  origin: [ 0, 0 ],
                                  transform: Transform.translate( 0, 0, 0 )
                                  });


var mRootP1 = new StateModifier(); // modificador root para todo splash intro

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
mainContext.add( mGlobalP1 ).add( mRootP1 ).add(sModFondoP1).add(fondoP1);
sModFondoP1.setOpacity( 0 );
sModFondoP1.setOpacity( 1.0, { duration: 2000, curve: 'easeInOut' }, function(){ cargaHome1aVez(); } );


// función para cargar home
function cargaHome1aVez(){
    setTimeout( function(){
               sModFondoP1.setOpacity( 0.0, { duration: 2000, curve: 'easeInOut' }, function(){
                                      
                                      mGlobalP1.setTransform(
                                                                Transform.translate( -5000, 0, 0 )
                                                             );
                                      
                                      mP2.setTransform(
                                                       Transform.translate( 0, 0, 0 )
                                                       );
                                      
                                      sModFondoP2.setOpacity( 1.0, { duration: 2000, curve: 'easeInOut' });
                                      
                                      mWelcomeTooltip.setOpacity( 1.0, { duration: 2000, curve: 'easeInOut' });
                                      mWelcomeTooltip.setTransform(
                                                                 Transform.scale( 1.0, 1.0, 1.0 ),
                                                                 { duration : 1000, curve: Easing.inOutBack }
                                                                 );
                                      
                                      mBotonStart.setOpacity( 1.0, { duration: 2000, curve: 'easeInOut' });
                                      });
               }, 3000);
}

// --------------------------------------------------- home

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

sModFondoP2 = new StateModifier();
sModFondoP2.setOpacity( 0.0 );
mainContext.add( sModFondoP2 ).add( fondoP2 );

var botonStart = new Surface({
                           content: "Start",
                           size: [ 100, 100 ],
                           properties:{
                           backgroundColor: '#F00',
                           color: '#FFF',
                           textAlign: 'center',
                           }
});

var mBotonStart = new StateModifier();
mBotonStart.setOpacity( 0.0 );
mainContext.add( mBotonStart ).add( botonStart );


// ---------------------tooltip de bienvenido y botones para leer terminos, condiciones y aviso de privacidad
var ratios = [5, 1, 1];

var welcomeTooltip = new FlexibleLayout({
                                        direction: 1,
                                        ratios: ratios
                          });

var surfaces = [];

var textsWelcomeTooltip = [ "<br><br>Welcome to VCam!<br>To continue, please read and accept our terms, conditions and privacy policy", "Read Terms and Conditions", "Accept" ];

welcomeTooltip.sequenceFrom(surfaces);

for(var i = 0; i < 3; i++) {
    surfaces.push(new Surface({
                              content: textsWelcomeTooltip[ i ],
                              size: [undefined, undefined],
                              properties: {
                              backgroundColor: "#FFF",
                              borderTop: "1px solid #000",
                              color: "#000",
                              paddingLeft: "10px",
                              paddingRight: "10px",
                              textAlign: 'center'
                              }
                              }));
    if( i == 0 ){
        surfaces[ i ].setProperties({
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px"
                                    });
    }
    
    if( i == 1 ){
        surfaces[ i ].setProperties({
                                    paddingTop: "5px"
                                    });
        
    }
    
    if( i == 2 ){
        surfaces[ i ].setProperties({
                                    borderBottomLeftRadius: "5px",
                                    borderBottomRightRadius: "5px",
                                    paddingTop: "5px"
                                    });
    }
}


    surfaces[ 1 ].on( "touchstart", function(){
                     this.setProperties({
                                        backgroundColor: "#CACACA"
                                        });
                     });

    surfaces[ 1 ].on( "touchend", function(){
                 this.setProperties({
                                    backgroundColor: "#FFF"
                                    });
                 });



    surfaces[ 2 ].on( "touchstart", function(){
                 this.setProperties({
                                    backgroundColor: "#CACACA"
                                    });
                     });

    surfaces[ 2 ].on( "touchend", function(){
                 this.setProperties({
                                    backgroundColor: "#FFF"
                                    });
                     
                 mWelcomeTooltip.setTransform(
                                            Transform.scale(0, 0),
                                            { duration : 500, curve: 'easeInOut' }
                                            );
                 
                 mWelcomeTooltip.setOrigin( [ 0, 1 ], { duration: 500, curve: 'easeInOut' });
                 mWelcomeTooltip.setAlign( [ 0, 1 ], { duration: 500, curve: 'easeInOut' });
                 });



var mWelcomeTooltip = new StateModifier({
                                   size: [ window.innerWidth * 0.6, window.innerWidth * 0.6 ],
                                   origin: [ 0.5, 0.5 ],
                                   align: [ 0.5, 0.5 ],
                                   opacity: 0.0
});


mWelcomeTooltip.setTransform(
                             Transform.scale( 0.5, 0.5, 0.5 )
                             );

mainContext.add( mWelcomeTooltip ).add( welcomeTooltip );

//---------------------------------------------------- termina tooltip de bienvenido
//-----------------------------------------------------nesting de views excelente para tener contenidas las pantallas y poderlas modificar globalmente
var masterP2 = new RenderNode();

masterP2.add( sModFondoP2 ).add( fondoP2 );
masterP2.add( mBotonStart ).add( botonStart );
masterP2.add( mWelcomeTooltip ).add( welcomeTooltip );

var mP2 = new StateModifier({
                            transform: Transform.translate( -5000, 0, 0 )
});

mainContext.add( mP2 ).add( masterP2 );
//-----------------------------------------------------nesting de views excelente para tener contenidas las pantallas y poderlas modificar globalmente



