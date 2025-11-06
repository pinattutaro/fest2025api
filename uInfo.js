require('dotenv').config();

const main = async () => {
    const response = await fetch(`${process.env.URI}/api/users/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.TOKEN}`
        }
    });

    console.log(response.status);
    const data = await response.json();
    console.log(data.data);
}

main();