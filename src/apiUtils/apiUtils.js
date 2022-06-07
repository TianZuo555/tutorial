
function defaultErrHandler(err) {
    if (err) {
        console.log(err);
    }
};

export async function getByApiEndpoint(apiAddress, errHandler = defaultErrHandler) {
    const baseUrl = process.env.REACT_APP_ECOMMERCE_BASE_URL;
    const url = `${baseUrl}${apiAddress}`;
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        errHandler(error);
    }
}

export async function postByApiEndpoint(endPoint, data, errHandler = defaultErrHandler) {
    const baseUrl = process.env.REACT_APP_ECOMMERCE_BASE_URL;
    const url = `${baseUrl}${endPoint}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (error) {
        errHandler(error);
    }
}