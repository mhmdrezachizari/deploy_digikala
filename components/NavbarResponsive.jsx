import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavbarResponsive.module.css'
import Link from 'next/link';

function NavbarResponsive() {
  return (
    <>
      <Navbar sticky="top" className={styles.navbar} bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link href="/SignUp" className={`${styles.navItem} nav-item mx-2`}>ثبت نام</Link>
            <Link href="/Products" className={`${styles.navItem} nav-item mx-2`}>محصولات</Link>
            <Link href="/ShoppingBuy" className={`${styles.navItem} nav-item mx-2`}>سبدخرید</Link>
          </Nav>
          <Link href="/" className={`${styles.navItem} nav-item `}>دیجی موبایل</Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarResponsive;