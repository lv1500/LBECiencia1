import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,

} from 'reactstrap';

import stylesm from '../css/menu.module.css';
import stylesf from '../css/footer.module.css';



const items = [
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Tecnologia',
        caption: 'Tecnologia'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Química',
      caption: 'Química'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Biologia',
      caption: 'Biologia'
    }
  ];


const Example = (props) => {

    /* Menu */

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /* Final Menu */

    /* Carrossel */

    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  /* Final Carrossel */


  return (
    <div className= "container">
      <div className={stylesm.site}>
        <div>
                <Navbar light expand="md">
                    <NavbarBrand href="/" tag="h2">LBE Ciência</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/Sobre">Sobre</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/Produtos">Produtos</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/PoliticaDePrivacidade">Politica de Privacidade</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/TermosDeUso">Termos de Uso</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    </Collapse>
                </Navbar>
          </div> 
        </div>   
        <main>
          <div className={stylesm.carrossel}>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
          </div>
          <div className={stylesm.card}>
            <Row>
                <Col sm="4">
                    <Card body>
                    <CardTitle tag="h5">Acesse nosso canal do Youtube</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                    <CardTitle tag="h5">Confira nossos E-books</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                    <CardTitle tag="h5">Interaja com a gente no Instagram</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                    </Card>
                </Col>
            </Row>


          </div>


            <div>
                <h2>Colocar o Prismic Aqui </h2>
            </div>

          </main>

          <footer>
                <div className={stylesf.container}>
                  <div className={stylesf.grid}>
                      <div className={stylesf.empresa}>
                          <img src="#"/>
                          <h2 className={stylesf.escrito}>LBE Ciência</h2>
                          <p className={stylesf.escrito}>Apredendo cada dia mais com você</p>
                      </div>

                      <div className={stylesf.artigo}>
                          <h2> Artigos Recentes </h2>
                          <ul className={stylesf.ulArtigo}>
                              <li>
                                  <a className={stylesf.aArtigo} href="#">Artigo 1</a>
                                  <span> data de postagem </span>
                              </li>
                              <li>
                                  <a className={stylesf.aArtigo} href="#">Artigo 2</a>
                                  <span> data de postagem </span>
                              </li>
                              <li>
                                  <a className={stylesf.aArtigo} href="#">Artigo 2</a>
                                  <span> data de postagem </span>
                              </li>
                          </ul>
                      </div>

                      <div className={stylesf.redeSocial}>
                          <h2> Redes Sociais </h2>
                          <ul className={stylesf.ulRedeSocial}>
                              <li>
                                  <a className={stylesf.aRedeSocial} href="#">
                                      <i src="#"></i>
                                      <span> Youtube </span>
                                  </a>
                              </li>
                              <li>
                                  <a className={stylesf.aRedeSocial} href="#">
                                      <i src="#"></i>
                                      <span> Instagram </span>
                                  </a>
                              </li>
                              <li>
                                  <a className={stylesf.aRedeSocial} href="#">
                                      <i src="#"></i>
                                      <span> Facebook </span>
                                  </a>
                              </li>
                              <li>
                                  <a className={stylesf.aRedeSocial} href="#">
                                      <i src="#"></i>
                                      <span> GitHub </span>
                                  </a>
                              </li>
                              <li>
                                  <a className={stylesf.aRedeSocial} href="#">
                                      <i src="#"></i>
                                      <span> Twitter </span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className={stylesf.copyright}>
                          <p className={stylesf.escrito}>LBE Ciência - 2021</p>
                      </div>
              </div>
          </footer>
    </div>
  );
}

export default Example;