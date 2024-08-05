// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav style={styles.navbar}>
            <Link href="/" style={styles.link}>Home</Link>
            <Link href="/about" style={styles.link}>About</Link>
            <Link href="/services" style={styles.link}>Services</Link>
            <Link href="/contact" style={styles.link}>Contact</Link>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '1rem',
        backgroundColor: '#333',
        color: '#fff',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    }
};

export default Navbar;
