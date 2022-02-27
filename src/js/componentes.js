import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre ) => {
    console.log('Creando h1')

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, ¿como estas?`;
    
    document.body.append(h1);

    //  IMG
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
}