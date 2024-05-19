import Image from 'next/image';
import emissions from '../../../../public/emissions.png';
import { NavLinks } from '../nav-links/nav-links';
import styles from './header.module.css';

export const Header = () => {
    return (
        <div className={styles.container}>
            <Image
                src={emissions}
                width={150}
                height={150}
                alt="Emissions"
            />
            <h2>Emissions UI</h2>
            <h3>Easy access to satellite-based emission data for everyone</h3>
            <NavLinks />
        </div>
    );
};
