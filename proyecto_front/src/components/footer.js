import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className=" mx-auto py-2" style={{ width: '65%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="home" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src="/logosimbolo.jpg"
                width="100px"
              />
              <span className="ml-3 h5 font-weight-bold">Reino Rolitos</span>
            </a>
            <div class="row  justify-content-center">
          <div class="col-lg-9">
            <p >Donde residen los reyes mas amados</p>
          </div>
        </div>
          </CDBBox>
          <CDBBox display="flex" style={{ width: '55%' }} justifyContent="between">
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Contáctanos
              </p>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink >Email: reino.rolitos@gmail.com</CDBFooterLink>
                <CDBFooterLink >Móvil: +57 3208180558</CDBFooterLink>
                <CDBFooterLink >Colombia</CDBFooterLink>
                </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Productos
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">Juguetes</CDBFooterLink>
                <CDBFooterLink href="/">Snacks</CDBFooterLink>
                <CDBFooterLink href="/">Accesorios</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ml-2">&copy; Reino Rolitos, 2022. All rights reserved.</small>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" href="https://www.facebook.com/ReinoRolitos"/>
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="whatsapp" href="https://wa.me/message/5B7RHIWPFQZPB1" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" href="https://www.instagram.com/reino_rolitos/"  />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;  