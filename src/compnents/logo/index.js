import Image from 'next/image';
import logo from './logo.svg';

function MoLogo() {
    return (
        <a href='/'>
        <Image
            src={logo}
            width={184}
            
        >
        </Image>
        </a>
    );
}
export default MoLogo;