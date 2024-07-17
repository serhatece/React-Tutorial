import { useState, useEffect } from 'react';
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_jrgeuqwMAEQBitBCZRuoPT66zCpAQ0bCUGseTfjy";

function Currency() {
    const [amount, setAmount] = useState(1); // Varsayılan olarak 1
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);
    const [rates, setRates] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
                setRates(response.data.data);
            } catch (error) {
                setError("Kur bilgilerini alırken hata oluştu.");
            }
        };

        fetchRates();
    }, [fromCurrency]);

    const exchange = () => {
        if (rates[toCurrency]) {
            const result = (rates[toCurrency] * amount).toFixed(2);
            setResult(result);
        } else {
            setError("Geçersiz kur bilgisi.");
        }
    }

    return (
        <div className="currency-div">
            <div className="header">
                <h3>CURRENCY APP</h3>
            </div>
            <div className="input-section">
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className="amount" />
                <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="from-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaRegArrowAltCircleRight className="arrow-icon" />
                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="to-currency-option">
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input
                    value={result}
                    readOnly
                    type="number" className="result" />
            </div>
            <div>
                <button onClick={exchange} className='exchange-button'>ÇEVİR</button>
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Currency;
