const login = async () => {
    const data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    axios.post("https://football-chatbot-backend-xtyg.vercel.app/api/login", { ...data }).then((res) =>{
      const token = res.data.token
      localStorage.setItem("token" , token)
      console.log(res);
      Swal.fire({ title: "Good job!", text: "Login Succesfully!", icon: "success" }).then(() =>{
          window.location.href = "index.html"
      })
        console.log(res);
    }).catch((err) =>{
      console.log(err);
    })
  };
  