const texto = document.getElementById("texto");
texto.setAttribute("class", "texto");

let parrafo = document.createElement("p");
let parrafo2 = document.createElement("p");


let bibio = document.createTextNode("LEONID AFREMOV, gran exponente del NEO-IMPRESIONISMO. Nació en una familia de zapateros e ingenieros metalúrgicos en Vitebsk, Bielorrusia, el 12 de julio de 1955. Recibió una educación judía tradicional a pesar de las prácticas gubernamentales. En 1978 emigro a Israel, pero en 2001  su galería de Ashdod fue completamente destruida. Este evento llevó a Leonid Afremov a partir hacia Estados Unidos en busca de un futuro mejor. Se abstuvo deliberadamente de vender sus obras mientras aún estaba en Israel y, por lo tanto, tenía más de cien pinturas de cuchillo de primera calidad a la venta en la ciudad de Nueva York. Las galerías estadounidenses mostraron más hospitalidad y generosidad. Pero estaban mas interesados en comprar pinturas de retractos de músicos y motivos judaicos. Esto hizo que aparezca en varios programas de televisión para luego ganarse la reputación como artista influyente contemporáneo. Murió el 19 de agosto de 2019 de un paro cardíaco en su lugar de residencia en Playa del Carmen, México. Sus hijos continúan distribuyendo sus obras en Internet. ");
let bibio2 = document.createTextNode("El artista tiene su propio y único estilo. No utiliza pinceles para pintar, sino una espátula. Entre sus influencias están grandes artistas como Dali, Picasso, Modigliani y Chagall. Su manejo de la luz y la textura es verdaderamente impresionante considerando la explosión de los colores que imprime en cada cuadro. Sus óleos tienen vida propia, todo está en movimiento y nada es insignificante: un día lluvioso, un día de trabajo es un raudal de colores, aromas y sensaciones. Las pinturas de Leonid Afremov son un reflejos de recuerdos y emociones personales. El artista intenta atraer al espectador a sentir lo que él ha vivido a través de la pintura. " );

parrafo.appendChild(bibio);
parrafo2.appendChild(bibio2);

texto.appendChild(parrafo);
texto.appendChild(parrafo2);
