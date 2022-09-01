class Billete
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
    mostrar()
    {
        resultado.innerHTML+="<br />"
        resultado.appendChild(this.imagen);
    }
}   

function entregarDinero()
{
    var t=document.getElementById("dinero");
    dinero = parseInt(t.value);

    var dineroRestante=0;

    for(var bi of caja)
    {

        if(dinero>0)
        {
            div=Math.floor(dinero/bi.valor);

            if(div>bi.cantidad)
            {
                papeles=bi.cantidad;
            }
            else
            {
                papeles=div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            dinero -= bi.valor*papeles; // es igual a dinero=dinero-(bi.valor*papeles)
            bi.cantidad-=papeles; //aquí se actualiza la cantidad de billetes del correspondiente valor de la caja
        }
        dineroRestante=dineroRestante+(bi.valor*bi.cantidad);
        console.log(dineroRestante);
        revisarCaja.innerHTML = "Dinero disponible: " + dineroRestante
    }

    console.log(caja);

    if(dinero>0)
    {
        resultado.innerHTML = "Sorry, can't give you that amount of money :( ";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                e.mostrar();
                //resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";       //Original
            }
        }
    }
    
}

var imagenes = [];
imagenes[100]="100.png";
imagenes[50]="50.png";
imagenes[20]="20.png";
imagenes[10]="10.png";
imagenes[5]="5.png";


var caja = [];
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 10));


var dinero;
var entregado = [];
var papeles;
var div;

var revisarCaja = document.getElementById("revisarCaja")
var resultado = document.getElementById("resultado")

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

