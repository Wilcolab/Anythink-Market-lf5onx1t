require("dotenv").config();
const axios = require("axios");

(function (){
    console.log("hi")
})()

const getToken = async (client) => {
    const user = {
        user: {
            username: "engine",
            email: "engine@wilco.work",
            password: "wilco1234",
        },
    };
    
    try {
        const loginRes = await client.post(`/api/users/login`, user);
        if (loginRes.data?.user?.token) {
            return loginRes.data.user.token;
        }
    } catch (e) {
        //User doesn't exists yet
    }
    
    const userRes = await client.post(`/api/users`, user);
    return userRes.data?.user?.token;
};

const createItem = async (client) => {
    const item = {
        item: {
            title: "title",
            description: "description",
            tag_list: ["tag1"],
        },
    };
    const itemRes = await client.post(`/api/items`, item);
    return itemRes.data?.item;
};

const testItem = async () => {
    const client = axios.create({
        baseURL: `http://localhost:${process.env.PORT || 3000}`,
        timeout: 10 * 1000,
    });

    const token = await getToken(client);
    client.defaults.headers.common["Authorization"] = `Token ${token}`;
    const item = await createItem(client);

    
    const getItem = await client.get(`/api/items/${item?.slug}`);
    

    if (!getItem.data?.item) {
        console.log(`=!=!=!=!= ERROR: No item was created`);
        return false;
    }

    if (!getItem.data?.item.image) {
        console.log(`=!=!=!=!= ERROR: No image was found for item`);
        return false;
    }

    if (!getItem.data?.item.image.includes("oaidalleapiprodscus.blob.core.windows.net")) {
        console.log(
            `=!=!=!=!= ERROR: DALL-E image path not detected`
        );
        return false;
    }

    return true;
};

testItem()
    .then((res) =>  {
        console.log(res)
        process.exit(res ? 0 : 1)
    })
    .catch((e) => {
        console.log("error while checking api: " + e);
        process.exit(1);
    });