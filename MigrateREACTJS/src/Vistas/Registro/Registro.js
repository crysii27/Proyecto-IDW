import React,{Component} from 'react';

class Registro extends React.Component{
    render(){
        return(
            <div>
                <div class="container pagina">  
        <header class="di-header mg-left">
        <div class="logo">
            <img src="assets/registro/LOGO.PNG" alt="logo"/>
        </div>
    
      
      <nav class="di-nav">
        <ul class="di-menu"> <li class="di-menu__item"><a href="" class="di-menu__link">Inicio
         </a></li>
         <li class="di-menu__item"><a href="" class="di-menu__link">sobre nosotros
         </a></li>
         <li class="di-menu__item"><a href="" class="di-menu__link">Contáctanos
         </a></li>
         
         </ul>
     </nav>
     <img src="assets/registro/registro.png" width="200" alt="registro"/>
</header>
<section class="section_portada " >
    <h1 class="menu_text"><strong>Registro</strong></h1>
</section>
<section class="data" >
    <form action="/my handly form page" method="POST"></form>
    <ul>
        <li>
            <label for="name">Nombre </label>
            <input type="text"/>
         </li> 
         <li>
            <label for="text">Celular </label>
            <input type="text"/>
         </li>
        <li> 
            <label for="adress">Dirección </label>      
            <input type="text"/>
        </li>

        <li>
            <label for="email">Barrio </label>      
            <input type="text"/>
        </li>
        <li> 
            
            <label for="email"> Correo electronico</label>
            <input type="text"/>
        </li>
        <li> 
            
            <label for="date"> Fecha de nacimiento</label>
            <input type="text"/>
        </li>
        Acepto los terminos y condiciones de servicio 
        <button type="submit">Si </button>
        <button type="submit">No </button>
    </ul>
    <h2>Queremos conocerte ¿cuales son tus preferencias?</h2>
</section>

<section class="preferences"></section>
<section class="imagenes_first">
    <button ><img src="assets/registro/comidarapida.jpg" alt="Hamburguesa"/></button>
    <button ><img src="assets/registro/quesuditas_opt.jpg" alt="café"/></button>
    <button ><img src="assets/registro/torta.jpg" alt="torta"/></button>
</section>
<section class="imagenes_second">
    <button ><img src="assets/registro/fruit_salad.jpg" alt="Hamburguesa"/></button>
    <button ><img src="assets/registro/pizza.jpg" alt="café"/></button>
    <button ><img src="assets/registro/salad_.jpg" alt="torta"/></button>
</section>
<section class="imagenes_third">
    <button ><img src="assets/registro/sushi.jpg" alt="Hamburguesa"/></button>
    <button ><img src="assets/registro/burrito.jpg" alt="café"/></button>
    <button ><img src="assets/registro/falafel.jpg" alt="torta"/></button>
</section>

</div>
</div>

        )
    }
}

export default Registro