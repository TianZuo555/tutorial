function defaultErrHandler(err) {
    if (err) {
        console.log(err);
    }
};

export async function getResultByApi(apiAddress, errHandler = defaultErrHandler) {
    const baseUrl = process.env.REACT_APP_ECOMMERCE_BASE_URL;
    const url = `${baseUrl}${apiAddress}`;
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        errHandler(error);
    }
}
