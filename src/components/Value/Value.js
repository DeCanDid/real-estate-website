import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
    MdOutlineArrowDropDown,
    MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../components/Utilities/Accordion.js";

import "./Value.css";


const Value = () => {
    const [className, setClassName] = useState(null)

    return (
        <section className="v-wrapper md:mx-14">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                {/* right side  */}
                <div className="v-right flexColStart">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give To You</span>
                    <span className='secondaryText'>
                        We always ready to help by providijng the best services for you.
                        <br />
                        We beleive a good blace to live can make your life better
                    </span>


                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}

                    >
                        {
                            
                            data.map((item, i) => {


                                return (
                                    <AccordionItem
                                        className={`accordionItem ${className}`}
                                        key={i}
                                        uuid={i}
                                    >
                                        <AccordionItemHeading>
                                            <AccordionItemButton className=' flexCenter accordionButton'>

                                                <AccordionItemState>
                                                    {({expanded}) => expanded 
                                                    ? setClassName("expanded") 
                                                    : setClassName("collapsed")}

                                                </AccordionItemState>


                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>

                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">
                                                {item.detail}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }

                    </Accordion>

                </div>


            </div>
        </section>
    )
}

export default Value;