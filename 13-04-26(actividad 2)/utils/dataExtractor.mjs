/// MÓDULO DE OBTENCIÓN DE DATOS VÍA PETICIÓN

async function dataExtractor() {
   try {
        const resp = await fetch('https://api.escuelajs.co/api/v1/users');
        const users = await resp.json(); // <-- convierte texto JSON a objeto JavaScript

        const modifiedUsers = users.map((elemento) => {
        
            const changedUser = {
                id: elemento.id,
                email: elemento.email,
                name: elemento.name
            };
            return changedUser
            
        });
        return modifiedUsers

    } catch (error) {
        console.log(`Se produjo un error: ${error.message}`);
    }; 
};

export { dataExtractor }
