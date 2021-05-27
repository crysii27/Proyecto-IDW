import React,{Component} from 'react';

class Menu extends React.Component{
    render(){
        return(
            <div>
                <div className="container dinamic">
    <header className="di-header mg-left">
        <img src="assets/menu/LOGO.PNG" alt="" className="img__logo"/>

      <nav className="di-nav">
        <ul className="di-menu"> <li class="di-menu__item" ><a href="" class="di-menu__link" >Inicio
         </a></li>
         <li className="di-menu__item"><a href="" class="di-menu__link">Sobre nosotros
         </a></li>
         <li className="di-menu__item"><a href="" class="di-menu__link">Contáctanos
         </a></li>
         </ul>
     </nav>
    
     <img src="assets/menu/pizza_portada.jpg" alt="" class="pizza__header"/>
    </header>

    <div className="box">
        <span className="icon" ><i className="fa fa-search" ></i></span>
        <input type="search" id="search" placeholder="Pizzeria Mama Mia"/>
    </div>
    <p className="drest">Direccion del restaurante:</p>
    <p className="direccion">Calle11 #5-54 Barrio obrero</p>
    <p className="menu__text">¿Cual vas a escoger?</p>

    <section className="menu">
        <img src="assets/menu/italiana.jpg" alt="" className="img__pizza1"/>
        <article className="menu__pizza1">
            <header className="subtitle">Italiana</header>
            <p className="text__menu">Base de pasta de tomate, rugula,champiñones,queso y albahaca</p>
        </article>
        <article className="menu__price__personal1">
            <header className="subtitle__price">Personal</header>
            <p className="text__menu">1000</p>
        </article>
        <article className="menu__price__mediana1">
            <header className="subtitle__price">mediana</header>
            <p className="text__menu">1000</p>
        </article>
        <button className="button_pizza1"> + </button>

        <img src="assets/menu/napolitana.jpg" alt="" className="img__pizza2"/>
        <article className="menu__pizza2">
            <header className="subtitle">Napolitana</header>
            <p className="text__menu">Base de pasta de tomate, rugula,champiñones,queso y albahaca</p>
        </article>
        <article className="menu__price__personal2">
            <header className="subtitle__price">Personal</header>
            <p className="text__menu">1000</p>
        </article>
        <article className="menu__price__mediana2">
            <header className="subtitle__price">mediana</header>
            <p className="text__menu">1000</p>
        </article>
        <button className="button_pizza2"> + </button>

        <img src="assets/menu/vegetariana.jpg" alt="" className="img__pizza3"/>
        <article className="menu__pizza3">
            <header className="subtitle">Vegetariana</header>
            <p className="text__menu">Base de pasta de tomate, rugula,champiñones,queso y albahaca</p>
        </article>
        <article className="menu__price__personal3">
            <header className="subtitle__price">Personal</header>
            <p className="text__menu">1000</p>
        </article>
        <article className="menu__price__personal3">
            <header className="subtitle__price">mediana</header>
            <p className="text__menu">1000</p>
        </article>
        <button className="button_pizza3"> + </button>

    </section>

    <section className="promos">
        <article className="promos__article">
            <header className="subtitle__promos">Promocion San Valentin</header>
            <p className="text__article__promos">Dos pizzas personales (Italiana,napolotana)+2bebidas+ 2porciones de torta tentacion</p>
        </article>
        <button className="button__price"><p class="text__button__promos">50000</p></button>
    </section>

</div>
            </div>
        )
    }
}

export default Menu