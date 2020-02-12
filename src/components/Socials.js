import React from 'react';
import SOCIALS from '../data/socials';
const Social = props =>{
        const { image, description, link} = props.social;
        return(
        <div style={{ display: 'inline-block',  width: 50, margin: 'center'}}>
            {
            description=="link" ?
                <a style={{display:"table-cell"}} href={link} target="_blank">
                    <img src={image} alt ='profile' style={{ width: 30, height: 30}}/>
                    </a>:
                <a style={{display:"table-cell"}} href={"mailto:"+link}>
                    <img src={image} alt ='profile' style={{ width: 30, height: 30}}/>
                </a>
            }
        </div>
        )
}

const Socials = () =>(
            <div>
                <h3>Socials</h3>
                <div>
                {
                        SOCIALS.map(SOCIALS => (
                            <Social key={SOCIALS.id} social={SOCIALS}/>
                            )
                        )

                    }
                </div>

            </div>


        )


export default Socials;