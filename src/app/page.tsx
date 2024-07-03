
import Image  from "next/image";
import download_logo from '../../public/apkdownload.png';

export default function Home() {
  return (
    <main className="flex flex-col  justify-center items-center min-h-screen">
      <h1 className="text-2xl font-semibold  text-zinc-700 my-5" >Download MYCRM for Android</h1>
      <a href='https://089-up-e.jotta.cloud/files/v1/dl/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiemlwIjoiREVGIn0..VsolG_vu9WyX6KziIGa5eg.5NCQAI9R3Dwdm4H2ng5hzHPPXUnCvJplql3nYg-kjaW5Ff9xkXsWskROJYWX7eLTDBegbAJ2G4FnchhVFkdEthULzQMay5sUteOd1ftaUEk3fca8Qz2p9ggoDTIjkI7Wae4Qrmy53asQVWRzViZY0rnFg4PpfRO0ardWg9lzAMFj_gShZ2t_A4ZEFE9cykwIbgydiscFfj-BOkIHbypEtawF5nvLK-UcP5L1u5GixiJ9Z9xJhgiCIonz7s1tFn8kUmtbXr_N7UwJiww7Hi6NrGkAYpO4rALlyglD86tVTMvcI90BkRe9vjGP95FVJqTo.iEo770wsdoPhqCpPVBGUAQ?access_token=eyJraWQiOiJkZDBhMWIyOS02MjIyLTRmMWMtYjhkOS1jOTFiY2Q1OTRiMjkiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhY2NvdW50Iiwic3ViIjoicF9hNmU1ZmU2Y2MwYjM0MDZhYWI5ODc2ZGU2MDYyODEiLCJzdCI6IkNpQndYMkUyWlRWbVpUWmpZekJpTXpRd05tRmhZams0Tnpaa1pUWXdOakk0TVJJQ0NBRWFKUm9qTXpZMk56QTJZV1ZtTVRWak1qRTNORGhpWldGa01qbGtaalJpWldGak9EazNOMkk9IiwiaXNzIjoiam90dGEiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjE3MjAwODQ1ODYsInVzZXJuYW1lIjoicF9hNmU1ZmU2Y2MwYjM0MDZhYWI5ODc2ZGU2MDYyODEifQ.Pcop2qYTCwWc9HLfbdMUqrHbn4PYky7S-W-Ar2VWqtBKauLJSr4D4IQmY7ZDobSe5_7FdS64SqQTUFZnv3r_55UJ0dXYxbOJ84IoTdiUduX5PH2bCKeqmo_mKrr6fepY5o5WLhJF7bNc-mw-PBwvl9K_rXuw0Nb-CkKSX7iOiOVsKQht4ZUrJhp30IkrmoFTZs2N5X5PhcmyKqF8nyJ2ScCCjYwUvP1100qolpsHiZ5FX_rBHfyNB1LpnNSRGL4TIQXE-4jGwsUqV9Bp0tdINgibhJe3awY-iFjJG65lum8iyTm3mmFiY6Zo6q8UinyL8Utpkkj6kZxLKwetp-VS_g' download="mycrm_v1.apk">
      <Image  src={download_logo} alt="MYCRM" width={200} height={200} />
      </a>
      <h2 className="my-4 font-semibold text-sky-900">64.36 MB</h2>
    </main>
  );
}
