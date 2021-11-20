
//Nome: João Pedro De Araujo Silva       RA: 1680482011017
//Nome: Lucas Henrique Andrade da Rocha  RA: 1680482011001
function media(){
    let soma = 0, cont = 0;
    return x=>{
        soma +=x, cont++;
        return soma/cont;
    }
}
function minBy1(vs,key){
    let menor = vs[0];
      for( let i of vs){
        if (key(menor) > key(i)){
            menor = i; 
          }
    }
    return menor;
}
function minBy2(vs,key){
    let x = vs[0];
      for( let i of vs){
          //let y = i;
        if (key(x,i))
            x = i; 
    }
    return x;
}

//3.i
function fmakePoint(x,y){
    return [x,y];
}
//3.ii
function somaspontos(p1,p2){
    return[p1.eixox()+p2.eixox(), p1.eixoy()+p2.eixoy()];
}
//3.iv
function distanciapontos(p1,p2){
     return Math.sqrt(((Math.pow(p1.eixox()-p2.eixox(), 2))+(Math.pow(p1.eixoy()-p2.eixoy(), 2))));
}
//3.vi

function DistanciaMinima(q,ps){
    return minBy1(ps, p => q.distancia(p));
}
//3.viii
function DistanciaMaxima(q,ps){
    return minBy1(ps, p => -q.distancia(p));
}
function mediaDistancia(q,ps){
    const me = media();
    let m = 0;
    for (let i of ps){
        m = me(distanciapontos(q,i));
    }
    return m;
}
//objeto no plano cartesiano 
function makePoint(x,y){
    ///contruindo um objeto
    const ponto = {
        rep:function(){
            return `(${x}, ${y})`;
        },
        eixox:function() { return x; 
        },
        eixoy:function(){ return y;
        },
        planocartesiano:function(){
            return [x,y];
        },
        soma:function(p2){
            return makePoint(x + p2.eixox(), y + p2.eixoy());
        },
        distancia:function(p2){
            return Math.sqrt((x-p2.eixox())**2 + (y-p2.eixoy())**2);
        },
        mindistancia:function(ps){
            return minBy1(ps, p => ponto.distancia(p));
        },
        maxdistancia:function(ps){
            return minBy1(ps, p => -ponto.distancia(p));
        },
    }
    return ponto;
}
const md = media();
console.log("Exer 1 - MEDIA")
console.log(md(7));
console.log(md(6));
console.log(md(8));
console.log(md(10));
console.log("///////////////////");
console.log("Exer 2 - MAIOR E MENOR DE UM CONJUNTO DE ELEMENTOS PASSANDO UM VETOR E UMA FUNÇÃO")
console.log(minBy1(['aaa','bbbb','cc'], x => x.length));
console.log(minBy2(['1','8','3'], (x,y) => x < y));//maior
console.log(minBy2([2,8,3], (x,y) => x > y));//menor
console.log("///////////////////");
console.log("Exer 3")
console.log("3.i criando o ponto por função");
console.log(fmakePoint(5,4));
console.log("3.i criando o ponto por objeto");
const p1 = makePoint (3,2);
const p2 = makePoint (5,5);
console.log(' ponto 1 : '+ p1.planocartesiano());
console.log(' ponto 2 : ' + p2.planocartesiano());
console.log("3.ii A soma de dois pontos (3,2) e (5,5) é o ponto pela funcao");
console.log(somaspontos(p1,p2));
console.log("3.iii A soma de dois pontos (3,2) e (5,5) é o ponto pelo metodo");
const p3 = p1.soma(p2);
console.log(p3.rep());
console.log("3.iv A distância entre os pontos (3, 2) e (5, 5) é o número por função");
console.log(distanciapontos(p1,p2));
console.log("3.v A distância entre os pontos (3, 2) e (5, 5) é o número por metodo");
console.log(p1.distancia(p2));
const q1 = makePoint (1,1);
const q2 = makePoint (2,2);
const q3 = makePoint (3,3);
console.log("3vi com função minima");
//console.log(distanciapontos(q1,q2));
console.log(DistanciaMinima(q1,[q2,q3]).rep());
console.log("3vii com metodo minima");
console.log(q1.mindistancia([q2,q3]).rep());
console.log("3viii com função maxima");
//console.log(distanciapontos(q1,q3));
console.log(DistanciaMaxima(q1,[q2,q3]).rep());
console.log("3ix media das distancias");
console.log(mediaDistancia(q1,[q2,q3]));

 