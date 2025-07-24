document.addEventListener("DOMContentLoaded",()=> {
    const form = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmation");
    const erreur = document.getElementById("erreur");
    form.addEventListener("submit",async function (event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(nom==="" || email ==="" || message ===""){
            alert("Merci de remplir tous les champs !");
            return;
        }
        if(!emailRegex.toLocaleString(email)){
            alert("Email non valide !");
            return;
        }
        const data = {
            nom : nom,
            email : email,
            message : message
        };

        try{
            const response = await
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
             },
            body: JSON.stringify(data)
            });
            if (response.ok){
            confirmation.style.display = "block";
            erreur.style.display ="none";
            form.reset();
            } else{
            confirmation.style.display = "none";
            erreur.style.display = "block";
            }
        } catch (error) {
        confirmation.style.display = "none";
        erreur.style.display = "block";
        console.error("Erreur d'envoi :",error);
       
        }
    });
});