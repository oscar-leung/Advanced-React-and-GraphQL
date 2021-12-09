import PropTypes from 'prop-types'
import Header from './Header';

export default function Page({children, cool}){
    return (
    <div>
        <Header/>
        <h1>I am the page componenet</h1>
        <h3>{cool}</h3>
        {children}
    </div>
    );
}  

Page.proptype = {
    cool : PropTypes.string,
    children : PropTypes.any,
};