import React from "react"
import "./navbar.scss"

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className={`nav-bar-wrapper`}>
                <section className={`nav-bar-inner`}>

                </section>
            </nav>
        )
    }
}