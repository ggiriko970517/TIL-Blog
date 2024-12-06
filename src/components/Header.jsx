import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../common/logo.png';
import '../styles/Header.scss';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="header">
      {/* 로고 */}
      <Navbar.Brand href="#" className="header-logo">
        <img src={logo} alt="GoBoogie Logo" width="150" />
      </Navbar.Brand>

      {/* 검색창 */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Form className="d-flex search-bar">
          <FormControl
            type="search"
            placeholder="검색어를 입력하세요"
            className="me-2"
          />
          <Button variant="primary" className="search-button">
            검색
          </Button>
        </Form>

        {/* 알림 및 유저 아이콘 */}
        <div className="icons">
          <FontAwesomeIcon icon={faBell} size="lg" className="fa-icon" />
          <FontAwesomeIcon icon={faUser} size="lg" className="fa-icon" />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

