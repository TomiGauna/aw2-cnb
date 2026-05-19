import reader from "./reader.mjs";

const getFirstTen = async() => {
    
    try {
        const users = await reader();
        const parsedUsers = await JSON.parse(users);
        let changedUsers = [];
        let filteredUsers = await parsedUsers.filter((user) => {

            if (user.id < 10) {

                let modifiedUser = {
                    id: user.id,
                    name: user.name,
                    role: user.role,
                    email: user.email
                };

                changedUsers.push(modifiedUser);
            }; 
        });
        return JSON.stringify(changedUsers, null, 8);

    } catch (error) {
        console.log(`Error in the filter module: ${error.message}`);
    };  
};

export default getFirstTen