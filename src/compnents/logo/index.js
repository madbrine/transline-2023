import Image from 'next/image';
import logo from './logo.svg';
import s from './styles.module.css';

function MoLogo() {
    return (
        <a href='/'>
        <Image
            src={logo}
            objectFit='fill'
            layout='cover'
            className={s['container']}
        >
        </Image>
        </a>
    );
}
export default MoLogo;