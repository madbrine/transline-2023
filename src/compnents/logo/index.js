import Image from 'next/image';
import logo from './logo.svg';

function MoLogo() {
    return (
        <Image
            src={logo}
            width={184}
        />
    );
}
export default MoLogo;