const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

const REST_COUNTRIES_API = "https://restcountries.com/v3.1";

// Fetch countries by name
app.get("/api/countries", async (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: "Country name is required" });
    }

    try {
        const response = await axios.get(`${REST_COUNTRIES_API}/name/${name}`);
        const countries = response.data.map((country) => ({
            name: country.name.common,
            code: country.cca2,
            flag: country.flags.svg,
            region: country.region,
            capital: country.capital ? country.capital[0] : "N/A",
            population: country.population,
        }));

        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: "Error fetching country data" });
    }
});

// Fetch country details by code
app.get("/api/countries/:code", async (req, res) => {
    const { code } = req.params;

    try {
        const response = await axios.get(`${REST_COUNTRIES_API}/alpha/${code}`);
        const country = response.data[0];

        if (!country) {
            return res.status(404).json({ error: "Country not found" });
        }

        res.json({
            name: country.name.common,
            code: country.cca2,
            flag: country.flags.svg,
            region: country.region,
            population: country.population,
            capital: country.capital ? country.capital[0] : "N/A",
            languages: country.languages,
            currencies: country.currencies,
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching country details" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
