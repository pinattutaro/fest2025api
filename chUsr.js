require('dotenv').config();

const main = async () => {
    const response = await fetch(`${process.env.URI}/api/users/me`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.TOKEN}`
        },
        body: JSON.stringify({
            "name": "NewName"
        })
    });

    console.log(response.status);
    const data = await response.json();
    console.log(data.data);
}

main();