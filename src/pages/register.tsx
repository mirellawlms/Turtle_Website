//wip
import { Button, FormControl, FormLabel, Input, Stack } from "@mui/joy";
import Head from "next/head";
import { getCsrfToken, signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Home() {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [matrikel, setmatrikel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = () => {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vorname,
        nachname,
        matrikel,
        email,
        password,
      }),
    }).then(() => {
      signIn("credentials", {
        email,
        password,
      }).then(() => {
        router.push("/");
      });
    });
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.svg" />
      </Head>
      <div
        style={{ marginTop: "50px", marginLeft: "500px", marginRight: "500px" }}
      >
        <Stack gap={3}>
          <FormControl>
            <FormLabel>Vorname</FormLabel>
            <Input
              value={vorname}
              onChange={(e) => setVorname(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Nachname</FormLabel>
            <Input
              value={nachname}
              onChange={(e) => setNachname(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Matrikelnummer</FormLabel>
            <Input
              value={matrikel}
              onChange={(e) => setmatrikel(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>E-Mail</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Passwort</FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </FormControl>
          <Button color="success" onClick={onSubmit}>
            Registrieren
          </Button>
        </Stack>
      </div>
    </>
  );
}

//https://next-auth.js.org/configuration/pages
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}