import React, { useEffect, useState } from 'react';
import './App.css';
import CreateQuote from './quotes/create';
import ListQuotes from './quotes/list';
import QuoteService from "./quote-service";

const Dashboard = () => {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetchQuotes();
    }, []);

    const fetchQuotes = () => {
        QuoteService.get().then(q => {
            setQuotes(q);
            console.log("Quotes", q);
        }).catch(e => {
            console.log("Error in fetching quotes", e);
        });
    }

    const refresh = () => {
        fetchQuotes();
    }

    return (
        <div>
            <CreateQuote submit={refresh} />
            <div style={{ maxHeight: 500, overflow: "auto", marginTop: 50 }} id="style-3">
                <ListQuotes quotes={quotes} />
            </div>
        </div>
    );
}

export default Dashboard;