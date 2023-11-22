var c = document.getElementById("MyCanvas");
var ctx = c.getContext("2d");
var info_display = document.getElementById("info");
var btnStart = document.getElementById("btStart");

var ball_cx; 
var ball_cy;
var speed;

var alt_base = 10;
var lar_base = 60;
var x_base;
var y_base;

var larg_tij = 50;
var altu_tij = 20;
var espa_tij = 10;
var n_tij_x = Math.floor((c.width - espa_tij) / (larg_tij + espa_tij));
var n_tij_y = 10;
var tot_tij = n_tij_x * n_tij_y;
var tips_x = new Array();
var tips_y = new Array();
var tips_v = new Array();

var rodando = false;
var relogio;
var intervalo = 20; 

Reiniciar();
function Reiniciar()
{
	info_display.innerHTML = "Clique em Iniciar para jogar";
	ball_cx = Math.floor(c.width / 2);
	ball_cy = Math.floor(c.height * 0,85);
	ball_r = 0.0;
	if(c.witdh < c.height)
		ball_r = Math.floor(c.width * 0,01);
	else
		ball_r = Math.floor(c.height * 0,01);
	 x_base = Math.floor(c.width/2 - lar_base/2);
	 y_base = Math.floor(ball_cy + ball_r);
	 dir_x = 0;
	 dir_y = 7;
	 speed = Math.abs(dir_x) + Math.abs(dir_y);
	 IniciarTijolos();
	 Desenhar();
	 if(rodando)
	 	Pausar();
}
funcion IniciarTijolos()
{
	at = 0;
	for(linha_at = 0; linha_at < n_tij_y; linha_at++)
		for(coluna_at = 0; coluna_at < n_tij_x; coluna_at++)
		{
			tijs_x[at] = espa_tij + (coluna_at * (larg_tij + espa_tij));
			tijs_y[at] = espa_tij + (linha_at * (altu_tij + espa_tij));
			tijs_v[at++] = true;
		}
}
function Desenhar()
{
	ctx.clearRect(0,0,c.width,c.height);
	desenharTijolos();
	desenharBola();
	desenharBase();	
}
function desenharTijolos()
{
	for (at = 0; at <tot_tij; at++);
	{
		if(tijs_v[at] == true)
		{
			ctx.fillStyle = "#00FF00";
			ctx.fillRect(tijs_x[at], tijs_y[at], larg_tij, altu_tij);
		}
	}
}
function desenharBola()
{
	ctx.fillStyle = "#00FF00";
	ctx.beginPath();
	ctx.arc(ball_cx, ball_cy_r, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
}
function desenharBase()
{
	ctx.fillStyle = "#00FF00";
	ctx.fillRect(x_base, y_base, lar_base, alt_base);
}
function Pausar()
{
	rodando = !rodando;
	if(rodando)
	{
		relogio = setInterval("Desenhar()", intervalo);
		info_display.innerHTML = "Executando...";
		btnStart.innerHTML = "Pausar";
	}
	else
	{
		clearInterval(relogio);
		info_display.innerHTML = "Pausar";
		btnStart.innerHTML = "Iniciar";		
	}	
}
function Pausar()
{
	rodando = !rodando;
	if(rodando)
	{
		relogio = setInterval("Desenhar()", intervalo);
		info_display.innerHTML = "Executando...";
		btnStart.innerHTML = "Pausar";	
	}
	else
	{
		clearInterval(relogio);
		info_display.innerHTML = "Pausa";
		btnStart.innerHTML = "Iniciar";
	}	
}
function Desenhar()
{
	RecalcPos();
	ctx.clearRect(0, 0, c.width, c.height);
	desenharTijolos();
	desenharBola();
	desenharBase();
}
function RecalcPos()
{
	ball_cx += dir_x;
	ball_cy += dir_y;
}
