import React, {Component} from 'react'

class Inicio extends React.Component{
    render(){
        return(
            <div>
                <div className="container pagina">  
<header className="di-header mg-left">
        <div className="logo">
            <img src="assets/inicio/LOGO.PNG" alt="logo"/>
        </div>
    
      
      <nav className="di-nav">
        <ul className="di-menu"> <li className="di-menu__item"><a href="" className="di-menu__link">Inicio
         </a></li>
         <li className="di-menu__item"><a href="" className="di-menu__link">About us
         </a></li>
         <li className="di-menu__item"><a href="" className="di-menu__link">Contáctanos
         </a></li>
         
         </ul>
     </nav>
     <img src="assets/inicio/registro.png" width="200" alt="registro"/>
</header>
<section className="section_portada " >
    <img src="assets/inicio/ejercicio-grid-css_img_left-arrow.svg" width="80" className="left"/>
    <img src="assets/inicio/comida-china-tipica.jpg" width="1300" height="100" alt="PORTADA_opt"/>
    <img src="assets/inicio/ejercicio-grid-css_img_right-arrow.svg" width="80" className="rigth"/>
        
</section>

<section className="restaurantes_main">
    <img src="assets/inicio/capuccino.jpg" alt="quesuditas"/>
      <article className="restaurantes_article">
      <header className="Subtitle"><strong>Quesuditas centro </strong> </header>
      <p className="Quesuditas_text">Nueva sede en el centro de la ciudad, no te pierdas el sabor de las mejores empanadas y arepas de la ciudad </p>
      </article>
    
</section>

<section className="restaurante2_main">
    <img src="assets/inicio/hamburguesa.jpg" width="300" alt="Santuario"/>
       <article className="restaurante2_article">
          <header className="Subtitle2"><strong>Santuario </strong> </header>
      <p className="Santuario_text">Hamburguesas artesanales, papas internacionales, café por baristas y el mejor ambiente de la ciudad ¡visitanos! </p>
    </article>
</section>

 <hr className="thematic-break"/>

<section className="anuncio">
    <button className="anuncio_button" >
        <img src="assets/inicio/descarga.png" width="200" alt="letrero"/>
    </button>
 <p className="text_anuncio">Si qiueres que tu negocio sea parte de nuestra página comunícate con nosotros, con gusto te atenderemos</p>
 <button className="Button_whatsApp" >     
 
    <a href="https://web.whatsapp.com/">
        <img src="assets/inicio/whatapp_opt.png" alt="wpp"/>
    </a>

 </button>
 
</section>   
     
    
   <footer className="footer"> 

    <img src="assets/inicio/whatapp_opt.png" alt="PNG Wh"/>31931902093
    <img src="assets/inicio/instagram_opt.png" alt="PNG Wh"/>@TuDomi
    <img src="assets/inicio/facebook_opt.png" alt="PNG Wh"/>Tu Domi Ipiales

   </footer>
    <p>Encuentra los mejores restaurantes de la ciudad a un solo click </p>

</div>
            </div>
        )
    }
}

export default Inicio