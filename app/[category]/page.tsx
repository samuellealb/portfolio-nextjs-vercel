// ### TODO: remove when fetching data from server
"use client";
import { usePathname } from "next/navigation";
import { data } from "@/src/features/Header/Header.mocks";
const { pagesLogo , mobileLogo} = data;
// ###

// ### TODO: restore when fetching data from server
// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "About Jeanne Dosse",
//   description: "Who is Jeanne Dosse",
// };
// ###

import { Header } from "@/src/features/Header";

export default function Page() {
  const pathname = usePathname(); // TODO: remove when fetching data from server

  return (
    <>
      <Header pagesLogo={pagesLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <div>Section page: {pathname} </div>
      </main>
    </>
  );
}
