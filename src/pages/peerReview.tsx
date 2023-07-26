import Head from "next/head";
import { Navigation } from "@/components/Navigation";
import { Button, Textarea, Typography } from "@mui/joy";
import { useEffect, useState } from "react";

export default function Home() {
    const [meinPseudocode, setMeinPseudocode] = useState("");
    const [kommilitonenCode, setKommilitonenCode] = useState("");
    const [meinKommentar, setMeinKommentar] = useState("");
    const [kommilitonenKommentar, setKommilitonenKommentar] = useState("");

    useEffect(() => {
        fetch("/api/task", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const prog = data.task.reduce((acc: any, item: any) => {
              return {
                ...acc,
                [item.id]: item.complete,
              };
            }, {});
            console.log(data.task, prog);
            setMeinPseudocode(
              data.task.find((item: any) => item.id === "id_algo_1_2")?.code ??
                meinPseudocode
            );
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.svg" />
      </Head>
      <Navigation currentNavigation="/peerReview">
        <Typography level="h3">Peer Review</Typography>
        <div id="peer.1.1"></div>
        <Typography level="h5"> Pseudocode eines Komillitonen</Typography>
        <div style={{display:"flex", gap:"50px"}}>
          <Textarea
            sx={{ width: "50%", marginBlock: 2 }}
            minRows={5}
            variant="plain"
            placeholder="Algorithmus deines Mitstudentens"
            value=""
            disabled
          />
          <Textarea
            sx={{ width: "50%", marginBlock: 2 }}
            minRows={5}
            variant="plain"
            placeholder="Dein Kommentar"
            value=""
          />
        </div>
        <div style={{display:"flex" , justifyContent:"flex-end"}}>
            <Button
            onClick={()=> confirm("sicher?")}
            color="success" >Abschicken</Button>
          </div>
        <Typography level="h5">Deinen abgegebenen Pseudocode</Typography>
        <div style={{display:"flex", gap:"50px"}}>
          <Textarea
            sx={{ width: "50%", marginBlock: 2 }}
            minRows={5}
            variant="plain"
            placeholder="Dein Algorithmus"
            value={meinPseudocode}
            disabled
          />
          <Textarea
            sx={{ width: "50%", marginBlock: 2 }}
            minRows={5}
            variant="plain"
            placeholder="Kommentar deines Mitstudentens"
            value=""
            disabled
          />
        </div>
      </Navigation>
    </>
  );
}
