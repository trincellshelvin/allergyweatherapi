const fetchWeatherData = async (postalCode, country) => {

    const apiKey = process.env.API_KEY;
    const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&postal_code=${postalCode}&country=${country}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log(url);
            console.log(response);
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.log(error);
    }
};
export default async function handler(req, res) {
    const post = req.query.postal_code;
    const country = req.query.country;
    const data = await fetchWeatherData(post, country);
    res.status(200).json(data);
}