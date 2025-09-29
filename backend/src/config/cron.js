import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("Requisição GET enviada com sucesso");
      else console.log("Requisição GET falhou", res.statusCode);
    })
    .on("error", (e) => console.error("Erro no envio da requisição", e));
});

export default job;

