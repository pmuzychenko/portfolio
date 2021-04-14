import React from 'react'
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Vacancy from "./vacancy/Vacancy";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import SocialBlock from "./social/SocialBlock";

function App() {
    return (
        <div className="App" id={'home'}>
            <Header/>
            <Main/>
            <SocialBlock/>
            <Skills/>
            <Projects/>
            <Vacancy/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
