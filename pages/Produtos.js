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

} from 'reactstrap';

import stylesm from '../css/menu.module.css';
import stylesf from '../css/footer.module.css';



const Example = (props) => {

    /* Menu */

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                <h1>
                    Colocar Conteudo do Site aqui (Produtos)
                </h1>
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