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
//var FastClick = famous.inputs.FastClick;

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


// función para cargar home
function cargaHome1aVez(){
    setTimeout( function(){
               sModFondoP1.setOpacity( 0.0, { duration: 2000, curve: 'easeInOut' }, function(){
                                      sModFondoP2.setOpacity( 1.0, { duration: 2000, curve: 'easeInOut' });
                                      mWelcomeTooltip.setOpacity( 1.0, { duration: 2000, curve: 'easeInOut' });
                                      mWelcomeTooltip.setTransform(
                                                                 Transform.translate(1, 1),
                                                                 { duration : 1500, curve: Easing.inOutBack }
                                                                 );
                                      });
               }, 3000);
}

// comienza home
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
sModFondoP2.setOpacity( 0 );
mainContext.add(sModFondoP2).add(fondoP2);


// tooltip de bienvenido y botones para leer terminos, condiciones y aviso de privacidad
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
                              /*lineHeight: '100px',*/
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
                                   opacity: 0.0,
                                   transform: Transform.scale( 0.5, 0.5 )
});

mainContext.add(mWelcomeTooltip).add(welcomeTooltip);



