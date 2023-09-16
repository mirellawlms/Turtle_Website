import { Button, FormControl, FormLabel, Input, Link, Stack } from "@mui/joy";
import Head from "next/head";
import { getCsrfToken, signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = () => {
    signIn("credentials", {
      email,
      password,
    }).then(() => {
      router.push("/");
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
          <Link href="/register">Registrieren</Link>
          <Button color="success" onClick={onSubmit}>
            Anmelden
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