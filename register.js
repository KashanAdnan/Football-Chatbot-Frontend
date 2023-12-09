const register = async () => {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  axios.post("https://football-chatbot-backend-xtyg.vercel.app/api/signUp", { ...data }).then((res) =>{
    const token = res.data.token
    localStorage.setItem("token" , token)
    Swal.fire({ title: "Good job!", text: "Registered Succesfully!", icon: "success" }).then(() =>{
        window.location.href = "index.html"
    })
      console.log(res);
  }).catch((err) =>{
    console.log(err);
  })
};
