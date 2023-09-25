//wip
import Head from "next/head";
import { Navigation } from "@/components/Navigation";
import { Button, Textarea, Typography } from "@mui/joy";
import { useEffect, useState } from "react";

export default function Home() {
  const [meinPseudocode, setMeinPseudocode] = useState("");
  const [kommilitonenCode, setKommilitonenCode] = useState("");
  const [meinKommentar, setMeinKommentar] = useState("");
  const [kommilitonenKommentar, setKommilitonenKommentar] = useState("");
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});
  const [komillitonenUserID, setKomillitonenUserID] = useState("");

  //Progressbalken hier id zusammengerechnet
  const progress_gesamt = () => {
    const items = ["id_peer_meinKommentar"];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //Task mit ID wird erstellt und in DB abgespeichert
  const TaskErstellen = async (
    id: string,
    code_eingabe: string,
    complete: boolean
  ) => {
    fetch("/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        code: code_eingabe,
        complete: complete,
      }),
    }).catch((error) => {
      console.error(error);
    });
  };

  //get
  useEffect(() => {
    fetch("/api/task", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data || !data.peerReview) {
          return;
        }
        const prog = data.task.reduce((acc: any, item: any) => {
          return {
            ...acc,
            [item.id]: item.complete,
          };
        }, {});
        console.log(data.task, prog);
        setProgress({
          id_peer_meinKommentar: prog["id_peer_meinKommentar"] ?? false,
        });
        setMeinKommentar(
          data.task.find((item: any) => item.id === "id_peer_meinKommentar")
            ?.code ?? meinKommentar
        );
        setMeinPseudocode(
          data.task.find((item: any) => item.id === "id_algo_1_2")?.code ??
            meinPseudocode
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //kommilitonenuserid setzten
  useEffect(() => {
    fetch("/api/peerReview/review", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data || !data.peerReview) {
          return;
        }
        setKomillitonenUserID(data.peerReview.taskUserid);
        setKommilitonenCode(data.peerReview.Task.code);
        setMeinKommentar(data.peerReview.comment ?? "");
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("/api/peerReview/feedback", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data || !data.peerReview) {
          return;
        }
        setKommilitonenKommentar(data.peerReview.comment ?? "");
        console.log(data);
      });
  }, []);

  //Review in api /kommentar abschicken
  const KommentarAbschicken = async () => {
    fetch("/api/peerReview/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: meinKommentar,
        userid: komillitonenUserID,
      }),
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.svg" />
      </Head>
      <Navigation
        visible={true}
        currentNavigation="/peerReview"
        titel="Peer-Review "
        progress={progress_gesamt()}
      >
        <Typography level="h3">Peer Review</Typography>
        <div id="peer.1.1"></div>
        <Typography level="h5"> Pseudocode eines Komillitonen</Typography>
        <div style={{ display: "flex", gap: "50px" }}>
          <Textarea
            sx={{ width: "50%", marginBlock: 2 }}
            minRows={5}
            variant="plain"
            placeholder="Algorithmus deines Mitstudentens"
            value={kommilitonenCode}
            disabled
          />
          <Textarea
            sx={{ width: "50%", marginBlock: 2 }}
            minRows={5}
            variant="plain"
            placeholder="Dein Kommentar"
            value={meinKommentar}
            onChange={(e) => setMeinKommentar(e.target.value)}
            disabled={!!progress["id_peer_meinKommentar"]}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => {
              if (
                confirm(
                  "Dein Kommentar soll deinem Peer-Partner helfen. Es kann von deinem Professor und deinem Peer-Partner eingesehen werden."
                )
              ) {
                TaskErstellen("id_peer_meinKommentar", meinKommentar, true);
                setProgress({ ...progress, id_peer_meinKommentar: true });
                KommentarAbschicken();
              }
            }}
            color="success"
            disabled={!!progress["id_peer_meinKommentar"]}
          >
            Abschicken
          </Button>
        </div>
        <Typography level="h5">Deinen abgegebenen Pseudocode</Typography>
        <div style={{ display: "flex", gap: "50px" }}>
          <Textarea
            sx={{ width: "50%", marginBlock: 2 }}
            minRows={5}
            variant="plain"
            placeholder="Dein abgegebener Pseudocode"
            value={meinPseudocode}
            disabled
          />
          <Textarea
            sx={{ width: "50%", marginBlock: 2 }}
            minRows={5}
            variant="plain"
            placeholder="Kommentar deines Mitstudentens"
            value={kommilitonenKommentar}
            disabled
          />
        </div>
      </Navigation>
    </>
  );
}
