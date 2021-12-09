import Link from 'next/link';
import Nav from './Nav';
export default function Header(){
    return (
    <header>
        <div className = "bar">
        Sick Fits
        <Link href = "/"> Sick Fits </Link>
        </div>
        <div c lassName = "sub-bar">
            <p>Search</p>
        </div>
        <div>
            <Nav />
        </div>
    </header>
    )
}  