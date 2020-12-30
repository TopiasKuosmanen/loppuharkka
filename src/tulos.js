import React, { useContext, useState, useEffect, constructor } from "react";
import {JokeContext, Xasa} from './konteksti';

const styles = {
    div1: {
        width: '800px',
        minheight: '350px',
        margin: 'auto',
        padding:'5px',
        display: 'inline-flex'
    },
    div2: {
        width: '500px',
        minheight: '300px',
        display: 'inline-block',
        padding:'5px',
        textAlign:'left'
    },
    div3: {
        border: '2px solid black',
        margin: '4px',
        padding: '0px'
    },
    div4: {
        width: '200px',
        maxheight: '300px',
        display: 'inline-block',
        padding:'5px',
        textAlign:'top'
    },
    p: {
        fontSize: '20px'
    }

}

const Tulos = () => {
    var x = document.getElementById("jeejee");
    const [vitsit, setVitsit] = useContext(JokeContext);

    function lisaaId(){
        {vitsit.vitsit.map((y) => {
            Xasa.indexOf(String(y.id)) === -1 ? Xasa.push(String(y.id)) : console.log("This item already exists");
            })}
    }


    
    return (
        <div style={styles.div1}>

            <div style={styles.div2}>
            <p id = "jeejee"> Ei vitsejä laisinkaan näköpiirissä.</p>
            {lisaaId()}
            {vitsit.vitsit.map((f) => {
                    x.style.display = "none";
                    return (
                        <div style={styles.div3} >
                            <p style={styles.p} key ={f.id}>{f.joke}</p>
                        </div>
                    )
                })}
            </div>

            <div style={styles.div4}>
                <p style={styles.p}>Uniikkeja faktoja haettu: {Xasa.length}</p>
            </div>

        </div>
    )

}



export default Tulos;