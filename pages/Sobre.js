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
  Jumbotron, 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from 'reactstrap';

import stylesm from '../css/menu.module.css';
import stylesf from '../css/footer.module.css';
import stylessobre from '../css/sobre.module.css'

const items = [
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];


const Example = (props) => {

    /* Menu */

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                    <div>
                        <Jumbotron>
                            <h1 className="display-1">LBE Ciência</h1>
                            <p className="lead">Nossa Empresa, O que valorizamos e quem somos</p>
                            <hr className="my-3" />
                            <p>Frase de Efeito</p>
                        </Jumbotron>
                    </div>

                    <div className ={stylessobre.template}>
                        <img src='#' className={stylessobre.templateImg}/>
                        <div className={stylessobre.templateText}>
                            <h2>Tecnologia</h2>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container
                            It uses utility classes for typography and spacing to space content out within the larger container
                            It uses utility classes for typography and spacing to space content out within the larger container
                            </p>
                        </div>
                    </div>

                    <div className ={stylessobre.template}>
                        <div className={stylessobre.templateText}>
                            <h2>Química</h2>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container
                            It uses utility classes for typography and spacing to space content out within the larger container
                            It uses utility classes for typography and spacing to space content out within the larger container
                            </p>
                        </div>
                        <img src='#' className={stylessobre.templateImg}/>
                    </div>

                    <div className ={stylessobre.template}>
                        <img src='#' className={stylessobre.templateImg}/>
                        <div className={stylessobre.templateText}>
                            <h2>Biologia</h2>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container
                            It uses utility classes for typography and spacing to space content out within the larger container
                            It uses utility classes for typography and spacing to space content out within the larger container
                            </p>
                        </div>
                    </div>

                    <div className ={stylessobre.template}>
                        <div className={stylessobre.templateText}>
                            <h2>Matematica</h2>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container
                            It uses utility classes for typography and spacing to space content out within the larger container
                            It uses utility classes for typography and spacing to space content out within the larger container
                            </p>
                        </div>
                        <img src='#' className={stylessobre.templateImg}/>
                    </div>

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

                    <h2>Projetos em Desenvolvimento</h2>

                    <div className={stylessobre.ebooks}>
                    <CardDeck>
                        <div className={stylessobre.ebooksBox} >
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Química Conceitual</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Ver Detalhes</Button>
                            </CardBody>
                        </Card>
                        </div>
                        <div className={stylessobre.ebooksBox} >
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Matemática Básica</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Ver Progresso</Button>
                            </CardBody>
                        </Card>
                        </div>
                    </CardDeck>
                    <CardDeck>
                        <div className={stylessobre.ebooksBox} >
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Cálculo Conceitual</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Ver Progresso</Button>
                            </CardBody>
                        </Card>
                        </div>
                        <div className={stylessobre.ebooksBox} >
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Corpo Humano</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Ver Progresso</Button>
                            </CardBody>
                        </Card>
                        </div>
                    </CardDeck>
                    <CardDeck>
                        <div className={stylessobre.ebooksBox} >
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Planeta Terra</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Ver Progresso</Button>
                            </CardBody>
                        </Card>
                        </div>
                        <div className={stylessobre.ebooksBox} >
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Pacote Office</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Ver Progresso</Button>
                            </CardBody>
                        </Card>
                        </div>
                    </CardDeck>
                    
                       
                    </div>
            </main>


            <footer>
                <div className={stylesf.container}>
                  <div className={stylesf.grid}>
                      <div className={stylesf.empresa}>
                          <img src='#'/>
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