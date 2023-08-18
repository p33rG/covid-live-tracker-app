import React, { useEffect, useState } from "react";
import './card.css'

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {

            const data = await fetch('https://api.covidtracking.com/v1/us/current.json')

            const actualData = await data.json();
            console.log(actualData);
            setData(actualData[0]);
        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => getCovidData(), []);
    return (
        <>
            <section>
                <h1 className="breathing-header">🔴Live</h1>
                <h2>Live tracking App</h2>

                <ul>
                    <li className="card">
                        <div className="card_main">
                            <div className="card__inner">
                                <p className="card_name"> <span>
                                    Our</span> Country</p>
                                <p className="card_total card_small">United State</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main" style={{ backgroundColor: 'green' }}>
                            <div className="card__inner">
                                <p className="card_name"> <span>
                                    Total</span> Recovered</p>
                                <p className="card_total card_small">{data.recovered}</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main" style={{ backgroundColor: 'orange' }}>
                            <div className="card__inner">
                                <p className="card_name"> <span>
                                    Total</span> Confirmed</p>
                                <p className="card_total card_small">{data.positive}</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main" style={{ backgroundColor: 'purple' }}>
                            <div className="card__inner">
                                <p className="card_name"> <span>
                                    Total</span> Deaths</p>
                                <p className="card_total card_small">{data.death}</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main" style={{ backgroundColor: 'brown' }}>
                            <div className="card__inner">
                                <p className="card_name"> <span>
                                    Last</span> Updated</p>
                                <p className="card_total card_small"> {new Date(data.dateChecked).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main" style={{ backgroundColor: 'grey' }}>
                            <div className="card__inner">
                                <p className="card_name"> <span>
                                    Total</span> Active</p>
                                <p className="card_total card_small">{data.positive}</p>
                            </div>

                        </div>
                    </li>
                </ul>
            </section >
        </>
    )
}

export default Covid;