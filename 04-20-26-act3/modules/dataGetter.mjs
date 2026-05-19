const dataGetter = async() => {

    try {
        const data = await fetch('https://api.escuelajs.co/api/v1/users');
        const info = await data.json();
        return info;
    }
    catch (error) {
        console.log(`Error on the acquisition of data: ${error.message}`)
    };
};

export default dataGetter