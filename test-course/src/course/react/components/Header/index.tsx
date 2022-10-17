import { ReactNode } from 'react';
import Paragraph from './Paragraph';
import Link from './Link';

// https://en.reactjs.org/docs/faq-structure.html

interface HeaderProps {
    children: ReactNode;
}

function Header(props: HeaderProps) {
    return <header className="App-header">
        {props.children}
        <Paragraph />
        <Link />
    </header>;
}

export default Header;
