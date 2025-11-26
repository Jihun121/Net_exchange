exports.handler = async (event, context) => {

    const apikey = process.env.EXCHANGE_API_KEY; //숨겨진 키
    const {from} = event.queryStringParameters;

    const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${from}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
        
    }catch (error){
        return {
            statusCode: 500,
            body: JSON.stringify({error: error.message}),
        };
    }
};