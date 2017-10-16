'use strict';

/*
 Vocabulaire :
 classe: représentation d'une entité
 méthode: comportement d'une entité
 propriétés: propriétés d'une entité
 instancier: créer un objet d'une entité
 objet: création à partir d'un modèle
 */


// $(function () {

//     var myProgram = new Program();
//     myProgram.start();
// });
// sans jquery ça donne avec document.addEventListener('DOMContentLoaded', function()

'use strict';
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function( callback ){
            return window.setTimeout(callback, 1000 / 60);
        };
})();

window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame          ||
        window.webkitCancelRequestAnimationFrame    ||
        window.mozCancelRequestAnimationFrame       ||
        window.oCancelRequestAnimationFrame     ||
        window.msCancelRequestAnimationFrame        ||
        clearTimeout
} )();
document.addEventListener('DOMContentLoaded', function()
{

    var game= new Game('canvas');

    //game.start();




});
