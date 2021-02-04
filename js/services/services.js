const postData = (url, data) => {
    let res = fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return res.json();
};

const getResource = async (url) => {
    const res = fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res.json();
};

export {postData};
export {getResource};