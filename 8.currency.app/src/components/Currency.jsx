import { useState, useEffect } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

// API URL ve API Anahtarı
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_jrgeuqwMAEQBitBCZRuoPT66zCpAQ0bCUGseTfjy";

function Currency() {
  // State tanımlamaları
  const [amount, setAmount] = useState(1); // Kullanıcının girdiği miktar
  const [fromCurrency, setFromCurrency] = useState("USD"); // Döviz cinsi (başlangıç olarak USD)
  const [toCurrency, setToCurrency] = useState("TRY"); // Hedef döviz cinsi (başlangıç olarak TRY)
  const [result, setResult] = useState(0); // Çeviri sonucu
  const [rates, setRates] = useState({}); // Döviz kurları
  const [error, setError] = useState(null); // Hata mesajları

  useEffect(() => {
    // Döviz kurlarını almak için async fonksiyon
    const fetchRates = async () => {
      try {
        // API'den döviz kurlarını al
        const response = await axios.get(
          `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
        );
        // Kurları state'e ata
        setRates(response.data.data);
      } catch (error) {
        // Hata oluşursa hata mesajını ayarla
        setError("Kur bilgilerini alırken hata oluştu.");
      }
    };

    // Döviz kurlarını güncellemek için fetchRates fonksiyonunu çağır
    fetchRates();
  }, [fromCurrency]); // fromCurrency değiştiğinde useEffect tetiklenir

  const exchange = () => {
    // Seçilen hedef döviz cinsinin geçerli olup olmadığını kontrol et
    if (rates[toCurrency]) {
      // Hesaplama yap ve sonucu ayarla
      const result = (rates[toCurrency] * amount).toFixed(2);
      setResult(result);
    } else {
      // Hedef döviz cinsi geçerli değilse hata mesajını ayarla
      setError("Geçersiz kur bilgisi.");
    }
  };

  return (
    <div className="currency-div">
      <div className="header">
        <h3>CURRENCY APP</h3> {/* Başlık */}
      </div>
      <div className="input-section">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />{" "}
        {/* Miktar giriş alanı */}
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>{" "}
        {/* Başlangıç döviz cinsi seçici */}
        <FaRegArrowAltCircleRight className="arrow-icon" />{" "}
        {/* Döviz ok simgesi */}
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>{" "}
        {/* Hedef döviz cinsi seçici */}
        <input value={result} readOnly type="number" className="result" />{" "}
        {/* Çeviri sonucu alanı */}
      </div>
      <div>
        <button onClick={exchange} className="exchange-button">
          ÇEVİR
        </button>{" "}
        {/* Çevir butonu */}
      </div>
      {error && <p className="error">{error}</p>} {/* Hata mesajı */}
    </div>
  );
}

export default Currency;
