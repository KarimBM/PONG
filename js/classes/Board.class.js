'use strict';

var Board = function(width, height, color)
{
    this.width = width;
    this.height= height;
    this.color = color;

    this.canvas= document.getElementById('canvas');
    this.context= this.canvas.getContext("2d");
    // this.currentLocation = {x: 0, y: 0};
};

//methode qui permet de dessiner le plateau
Board.prototype.draw = function(context)
{
    //Dessine le rectangle en fond
    context.fillStyle ='transparent';
    context.fillRect(0, 0, this.width, this.height);
};







