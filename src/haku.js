import React, { useContext, useEffect, useState } from "react";
import { JokeContext} from "./konteksti";

const styles = {
    div1: {
        border: '2px solid black',
        width: '800px',
        height: '100px',
        margin: 'auto',
        padding: '10px'
    },
    div2: {
        textAlign: 'left'
    },
    div3: {
        padding: '10px',
        textAlign: 'left'
    }
}


const Haku = () => {
    const [luku, setLuku] = useState(10);
    const [kategoria, setKategoria] = useState("categories");
    const [etunimi, setEtunimi] = useState("Chuck");
    const [sukunimi, setSukunimi] = useState("Norris");
    const [kategoriat, setKategoriat] = useState([]);
    const [vitsit, setVitsit] = useContext(JokeContext);
    


    useEffect(() => {
        fetch("http://api.icndb.com/categories")
        .then((resp) => {
            return resp.json();
        })
        .then((json) => {
            setKategoriat(json);
        });
    });


    function Vitsihaku(kat, num, etu, suku){
        let base_url = "https://api.icndb.com/jokes";
        if (kat == "categories"){
            if(etu != "Chuck" || suku != "Norris"){
                base_url = "https://api.icndb.com/jokes/random" + `/${num}` + `?firstName=${etu}&lastName=${suku}`;
            }
            else{
                base_url = "https://api.icndb.com/jokes/random" + `/${num}`
            }
        }
        else{
            if(etu != "Chuck" || suku != "Norris"){
                base_url = `https://api.icndb.com/jokes/random` + `/${num}` + `limitTo=[${kategoria}]` + `?firstName=${etu}&lastName=${suku}`;
            }
            else{
                base_url = `https://api.icndb.com/jokes/random` + `/${num}` + `?limitTo=[${kategoria}]`;
            }
        }
        
                fetch(base_url)
            .then((resp) => {
                return resp.json();
            })
            .then((json) => {
                tuoVitsit(json);
            })

    }
    
    const tuoVitsit = (vitsi) => {
    setVitsit({vitsit: vitsi.value});

    }


    return (
        <div style={styles.div1}>
            <div style={styles.div2}>
                <select onChange={(e) => setKategoria(e.target.value)}>
                    <option value="categories">categories</option>
                    <option value="nerdy">nerdy</option>
                    <option value="explicit">explicit</option>
                </select>
              

                <input id = "syotaLuku"
                    value={luku}
                    onChange={(e) => setLuku(e.target.value)}
                    type="number"
                    min="1"
                />
                <input
                    defaultValue={etunimi}
                    type="text"
                    onChange={(e) => setEtunimi(e.target.value)}
                />
                <input
                    defaultValue={sukunimi}
                    type="text"
                    onChange={(e) => setSukunimi(e.target.value)}
                />
            </div>
            
            <div style={styles.div3}>
                <button onClick={() => Vitsihaku(kategoria, luku, etunimi, sukunimi)} >
                    Hae vitsit
                </button>
            </div>

        </div>
    );
}



export default Haku;