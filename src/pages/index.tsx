import { Card, Container, Typography } from "@mui/joy";
import Head from "next/head";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      {/*component benutzen um zu  */}
        <Navigation showback={false}>
        <Typography level="h1">National Parks</Typography>
          <Typography level="h2" fontSize="xl">
            Pombär rocks
          </Typography>
          <Typography level="body1">
            Yosemite National Park is a national park spanning 747,956 acres
          </Typography>
        </Navigation>
    </>
  );
}
