"use client"; // Add this directive

import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Image from 'next/image';
import logoFundoAzul from '../public/logo-fundo-azul.png'; // Correct path for public folder images

// Add only the icons you need to the library
library.add(faBars, faTimes);

const Nav = styled.nav`
  background: #00508c;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`;

const NavLogo = styled.div`
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.div`
  position: relative;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0 1rem;
  cursor: pointer;
  transition: color 0.3s;
  white-space: nowrap;

  &:hover {
    color: #fac800;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }

  & > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #fac800;
    }
  }
`;

const SubMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background: #00508c;
  padding: 1rem;
  border-radius: 5px;
  z-index: 20;

  & a {
    display: block;
    color: white;
    margin: 0.5rem 0;
    transition: color 0.3s;

    &:hover {
      color: #fac800;
    }
  }
`;

const JoinButton = styled(Link)`
  background: #28a745;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #218838;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 11; /* Ensure it is above the mobile menu */
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: #00508c;
    padding: 1rem 0;
    z-index: 9;
  }
`;

const MobileSubMenu = styled.div`
  width: 100%;
  text-align: center;
`;

const MobileLink = styled(Link)`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #fac800;
  }
`;

const MobileSubLink = styled(Link)`
  display: block;
  color: white;
  margin: 0.5rem 0;
  transition: color 0.3s;

  &:hover {
    color: #fac800;
  }
`;

const MobileExternalSubLink = styled.a`
  display: block;
  color: white;
  margin: 0.5rem 0;
  transition: color 0.3s;

  &:hover {
    color: #fac800;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? "" : menu);
  };

  return (
    <Nav>
      <Link href="/" passHref>
      <NavLogo>
      <Image src={logoFundoAzul} alt="Logo" height={50} style={{ width: 'auto' }} />
        </NavLogo>
      </Link>
      <MobileIcon onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </MobileIcon>
      <NavLinks>
        <NavLink
          onMouseEnter={() => setActiveSubMenu("quemSomos")}
          onMouseLeave={() => setActiveSubMenu("")}
          onClick={() => toggleSubMenu("quemSomosMobile")}
        >
          Quem Somos
          <SubMenu
            $isOpen={
              activeSubMenu === "quemSomos" ||
              activeSubMenu === "quemSomosMobile"
            }
          >
            <Link href="/institucional">Institucional</Link>
            <Link href="/estrutura">Estrutura</Link>
            <Link href="/filiacao">Filiação</Link>
            <Link href="/estatuto">Estatuto Social</Link>
          </SubMenu>
        </NavLink>
        <NavLink
          onMouseEnter={() => setActiveSubMenu("oQueFazemos")}
          onMouseLeave={() => setActiveSubMenu("")}
          onClick={() => toggleSubMenu("oQueFazemosMobile")}
        >
          O Que Fazemos
          <SubMenu
            $isOpen={
              activeSubMenu === "oQueFazemos" ||
              activeSubMenu === "oQueFazemosMobile"
            }
          >
            <Link href="/eixos">Eixos de Atuação</Link>
            <Link href="/acoes">Ações e Temáticas</Link>
            <Link href="/eventos">Eventos e Workshops</Link>
          </SubMenu>
        </NavLink>
        <NavLink
          onMouseEnter={() => setActiveSubMenu("mobilidade")}
          onMouseLeave={() => setActiveSubMenu("")}
          onClick={() => toggleSubMenu("mobilidadeMobile")}
        >
          Mobilidade Estudantil
          <SubMenu
            $isOpen={
              activeSubMenu === "mobilidade" ||
              activeSubMenu === "mobilidadeMobile"
            }
          >
            <Link href="/nacionais">Intercâmbios Nacionais</Link>
            <Link href="/internacionais">Intercâmbios Internacionais</Link>
            <Link href="/outras-modalidades">
              Outras Modalidades de Intercâmbio
            </Link>
            <Link href="/social-programs">Social Programs</Link>
          </SubMenu>
        </NavLink>
        <NavLink
          onMouseEnter={() => setActiveSubMenu("midias")}
          onMouseLeave={() => setActiveSubMenu("")}
          onClick={() => toggleSubMenu("midiasMobile")}
        >
          Mídias e Documentos
          <SubMenu
            $isOpen={
              activeSubMenu === "midias" || activeSubMenu === "midiasMobile"
            }
          >
            <Link href="/ressonancia">Ressonância Poética</Link>
            <Link href="/informa-susi">Informa SUSi</Link>
            <Link href="/brazilian-medical-students">
              Brazilian Medical Students
            </Link>
            <Link href="/relatorios">Relatórios</Link>
            <Link href="/notas">Notas de Posicionamento</Link>
            <Link href="/declaracoes">Declarações de Política</Link>
          </SubMenu>
        </NavLink>
        <NavLink>
          <Link href="/noticias">Notícias</Link>
        </NavLink>
        <NavLink
          onMouseEnter={() => setActiveSubMenu("membros")}
          onMouseLeave={() => setActiveSubMenu("")}
          onClick={() => toggleSubMenu("membrosMobile")}
        >
          Membros
          <SubMenu
            $isOpen={
              activeSubMenu === "membros" || activeSubMenu === "membrosMobile"
            }
          >
            <MobileExternalSubLink
              href="https://solar.ifmsabrazil.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOLAR
            </MobileExternalSubLink>
            <MobileExternalSubLink
              href="https://database.ifmsabrazil.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              DATABASE
            </MobileExternalSubLink>
            <MobileExternalSubLink
              href="https://exchange.ifmsabrazil.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              EXCHANGE
            </MobileExternalSubLink>
          </SubMenu>
        </NavLink>
        <JoinButton href="/filie-se">FILIE-SE</JoinButton>
      </NavLinks>
      <MobileMenu $isOpen={isOpen}>
        <MobileSubMenu>
          <MobileLink href="#" onClick={() => toggleSubMenu("quemSomosMobile")}>
            Quem Somos
          </MobileLink>
          {activeSubMenu === "quemSomosMobile" && (
            <>
              <MobileSubLink href="/institucional" onClick={toggleMobileMenu}>
                Institucional
              </MobileSubLink>
              <MobileSubLink href="/estrutura" onClick={toggleMobileMenu}>
                Estrutura
              </MobileSubLink>
              <MobileSubLink href="/filiacao" onClick={toggleMobileMenu}>
                Filiação
              </MobileSubLink>
              <MobileSubLink href="/estatuto" onClick={toggleMobileMenu}>
                Estatuto Social
              </MobileSubLink>
            </>
          )}
        </MobileSubMenu>
        <MobileSubMenu>
          <MobileLink href="#" onClick={() => toggleSubMenu("oQueFazemosMobile")}>
            O Que Fazemos
          </MobileLink>
          {activeSubMenu === "oQueFazemosMobile" && (
            <>
              <MobileSubLink href="/eixos" onClick={toggleMobileMenu}>
                Eixos de Atuação
              </MobileSubLink>
              <MobileSubLink href="/acoes" onClick={toggleMobileMenu}>
                Ações e Temáticas
              </MobileSubLink>
              <MobileSubLink href="/eventos" onClick={toggleMobileMenu}>
                Eventos e Workshops
              </MobileSubLink>
            </>
          )}
        </MobileSubMenu>
        <MobileSubMenu>
          <MobileLink href="#" onClick={() => toggleSubMenu("mobilidadeMobile")}>
            Mobilidade Estudantil
          </MobileLink>
          {activeSubMenu === "mobilidadeMobile" && (
            <>
              <MobileSubLink href="/nacionais" onClick={toggleMobileMenu}>
                Intercâmbios Nacionais
              </MobileSubLink>
              <MobileSubLink href="/internacionais" onClick={toggleMobileMenu}>
                Intercâmbios Internacionais
              </MobileSubLink>
              <MobileSubLink
                href="/outras-modalidades"
                onClick={toggleMobileMenu}
              >
                Outras Modalidades de Intercâmbio
              </MobileSubLink>
              <MobileSubLink href="/social-programs" onClick={toggleMobileMenu}>
                Social Programs
              </MobileSubLink>
            </>
          )}
        </MobileSubMenu>
        <MobileSubMenu>
          <MobileLink href="#" onClick={() => toggleSubMenu("midiasMobile")}>
            Mídias e Documentos
          </MobileLink>
          {activeSubMenu === "midiasMobile" && (
            <>
              <MobileSubLink href="/ressonancia" onClick={toggleMobileMenu}>
                Ressonância Poética
              </MobileSubLink>
              <MobileSubLink href="/informa-susi" onClick={toggleMobileMenu}>
                Informa SUSi
              </MobileSubLink>
              <MobileSubLink
                href="/brazilian-medical-students"
                onClick={toggleMobileMenu}
              >
                Brazilian Medical Students
              </MobileSubLink>
              <MobileSubLink href="/relatorios" onClick={toggleMobileMenu}>
                Relatórios
              </MobileSubLink>
              <MobileSubLink href="/notas" onClick={toggleMobileMenu}>
                Notas de Posicionamento
              </MobileSubLink>
              <MobileSubLink href="/declaracoes" onClick={toggleMobileMenu}>
                Declarações de Política
              </MobileSubLink>
            </>
          )}
        </MobileSubMenu>
        <MobileLink href="/noticias" onClick={toggleMobileMenu}>
          Notícias
        </MobileLink>
        <MobileSubMenu>
          <MobileLink href="#" onClick={() => toggleSubMenu("membrosMobile")}>
            Membros
          </MobileLink>
          {activeSubMenu === "membrosMobile" && (
            <>
              <MobileExternalSubLink
                href="https://solar.ifmsabrazil.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
              >
                SOLAR
              </MobileExternalSubLink>
              <MobileExternalSubLink
                href="https://database.ifmsabrazil.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
              >
                DATABASE
              </MobileExternalSubLink>
              <MobileExternalSubLink
                href="https://exchange.ifmsabrazil.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
              >
                EXCHANGE
              </MobileExternalSubLink>
            </>
          )}
        </MobileSubMenu>
        <MobileLink href="/filie-se" onClick={toggleMobileMenu}>
          FILIE-SE
        </MobileLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
