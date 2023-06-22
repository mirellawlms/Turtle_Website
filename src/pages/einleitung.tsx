import { Button, Card, Container, Typography } from "@mui/joy";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  const [getKlicked , setGetKlicked] = useState(0);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      <Navigation showback={true}>
      <h1>Hier kommt meine Einleitung hin{getKlicked}</h1>
      <Link href={"/"}>
        <Typography level="h6" fontSize="l">
          zurück
        </Typography>
      </Link>
      <Button onClick={()=>setGetKlicked(getKlicked+1)}>button</Button>
      </Navigation>
    </>
  );
}
