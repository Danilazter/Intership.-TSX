import React, { FC } from 'react';
import styles from './Menu.module.css';
import style from '../Navbar/Navbar.module.css';
import * as data from './Links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;


type Link = {
    label : string;
    href: string;
}




const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

const Menu: FC<{}> = () => {
    return (
        <nav className={styles.navContainer}>
            <Links links={links}/>
        </nav>
    );
};

export default Menu;