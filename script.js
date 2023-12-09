axios
  .get(
    "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=6eb6e0ea203525eaeb9e8fcccac7ba5b4f779cf00f084b4a23c10836acb98be5"
  )
  .then((res) => {
    const data = res.data.result;
    const results = [data[0], data[1], data[2], data[3]];
    console.log(results);
    results.map((item) => {
      const home_score = item.event_final_result.split(" ")[0];
      const month = item.event_date.split("-")[1];
      const refree = item.event_referee.split(",")[0];
      const day = item.event_date.split("-")[2];
      const league = item.league_name.split("-")[0];
      var months = [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const away_score = item.event_final_result.split(" ")[2];
      document.getElementById("container").innerHTML += `
      <div class="match">
        <div class="header">
        <div class="${
          item.event_status === "Cancelled" ? "cancel" : "match_status"
        }">${item.event_status === "Cancelled" ? "Cancelled" : "Live"}</div>
        <div class="league">
        <img alt="league_name" src="${item.league_logo}" />
        <p>${league}</p>
        </div>
          <div class="khali">
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-bell"></i>
          </div>
        </div>
        <div class="teams">
          <div class="team">
          <div class="team-logo">
          <img src="${item.home_team_logo}" alt="Home_Logo" />
          </div>
          <p>${item.event_home_team}</p>
          </div>
          <div class="score-board">
              <div class="day">${day} ${months[month]} at ${
        item.event_time
      }</div>
              <div class="score"><span class=${
                home_score > away_score ? "big" : "small"
              }>${home_score}</span> : <span class=${
        away_score > home_score ? "big" : "small"
      }>${away_score}</span></div>
              <div class="refree">Refree : ${refree}</div>
          </div>
          <div class="team">
          <div class="team-logo">
          <img src="${item.away_team_logo}"  alt="Away_Logo" />
          </div>
          <p>${item.event_away_team}</p>
          </div>
        </div>
      </div>
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

const token = localStorage.getItem("token");
axios.post("https://football-chatbot-backend-xtyg.vercel.app/api/profile", { token : token })
.then((res) =>{
  let user = res.data.user;
let name = user.name.charAt(0);
  document.getElementById("login").innerHTML = `<p title="${user.name}" class="bg-indigo-500 rounded-full w-[40px] h-[40px] flex items-center justify-center text-white text-[18px]">${name}</p>`
}).catch((err) =>{
  console.log(err);
  
})
