import { useState } from 'react';
import './homepage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';


const Homepage = () => {

   

    const [typingStatus, setTypingStatus] = useState("Human")

    return(
        < div className='Homepage' >

            <img src="/orbital.png" alt="" className="orbital"></img>
            <div className="left">
                <h1>Nikoodle</h1>
                <h2>Noodles of wisdom with a hint of quirk meet your new AI buddy!</h2>
                <h3>Meet Nikoodle  the chatbot with smarts, charm, and a dash of noodle magic. Ready to solve problems, serve insights, and make you smile!</h3>
                <Link to="/dashboard">
                Get Started
                </Link>
                
            </div>
            <div className="right">
                <div className="imgContainer">

                    <div className="bgContainer">

                        <div className="bg">
                        </div>


                    </div>
                    <img src="/bot.png" alt="" className="bot"></img>
                    <div className="chat">

                        <img src={typingStatus === "Human" ? "/human1.png" :  "bot.png"} alt="">
                        </img>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Human: We produce food for Mice',
                                2000, () => {
                                    setTypingStatus("Bot")
                                }, 
                                'Bot: We produce food for Hamsters',
                                2000, () => {
                                    setTypingStatus("Human")
                                },
                                'Human: We produce food for Guinea Pigs',
                                2000, () => {
                                    setTypingStatus("Bot")
                                },
                                'Bot: We produce food for Chinchillas',
                                2000, () => {
                                    setTypingStatus("Human")
                                }
                            ]}
                            wrapper="span"

                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />

                    </div>
                </div>
            </div>

            <div className="terms">
                <img src="/logo.png" alt=""></img>
                <div className="links">

                    <Link to="/">Terms Of service</Link>
                    <span>|</span>
                    <Link to="/">Privacy Policy</Link>
                </div>

            </div>
        </div>
    )

}

export default Homepage;