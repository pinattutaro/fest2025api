require('dotenv').config();

async function main() {
    const response = await fetch(`${process.env.URI}/api/admin/create-uesrs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "x-api-key": "2025fes-api-key"
        },
        body: JSON.stringify({
            "count": 1
        })
    });

    console.log(response.status);
    const data = await response.json();
    console.log(data.data.users);
}

main();