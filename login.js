require('dotenv').config();

const main = async () => {
    const response = await fetch(`${process.env.URI}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": process.env.ID,
            "id2": process.env.ID2
        })
    });

    console.log(response.status);
    const data = await response.json();
    console.log(data.data);
}

main();