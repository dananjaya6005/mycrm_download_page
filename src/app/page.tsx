
import Image  from "next/image";
import download_logo from '../../public/apkdownload.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";


export default function Home() {
  return (
    <main className="flex flex-col  justify-center items-center min-h-screen">
      <h1 className="text-2xl font-semibold  text-zinc-700 my-5" >Download MYCRM for Android</h1>
      <a href='https://089-up-e.jotta.cloud/files/v1/dl/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiemlwIjoiREVGIn0..VsolG_vu9WyX6KziIGa5eg.5NCQAI9R3Dwdm4H2ng5hzHPPXUnCvJplql3nYg-kjaW5Ff9xkXsWskROJYWX7eLTDBegbAJ2G4FnchhVFkdEthULzQMay5sUteOd1ftaUEk3fca8Qz2p9ggoDTIjkI7Wae4Qrmy53asQVWRzViZY0rnFg4PpfRO0ardWg9lzAMFj_gShZ2t_A4ZEFE9cykwIbgydiscFfj-BOkIHbypEtawF5nvLK-UcP5L1u5GixiJ9Z9xJhgiCIonz7s1tFn8kUmtbXr_N7UwJiww7Hi6NrGkAYpO4rALlyglD86tVTMvcI90BkRe9vjGP95FVJqTo.iEo770wsdoPhqCpPVBGUAQ?access_token=eyJraWQiOiJkZDBhMWIyOS02MjIyLTRmMWMtYjhkOS1jOTFiY2Q1OTRiMjkiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhY2NvdW50Iiwic3ViIjoicF9hNmU1ZmU2Y2MwYjM0MDZhYWI5ODc2ZGU2MDYyODEiLCJzdCI6IkNpQndYMkUyWlRWbVpUWmpZekJpTXpRd05tRmhZams0Tnpaa1pUWXdOakk0TVJJQ0NBRWFKUm9qTXpZMk56QTJZV1ZtTVRWak1qRTNORGhpWldGa01qbGtaalJpWldGak9EazNOMkk9IiwiaXNzIjoiam90dGEiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjE3MjAwODQ1ODYsInVzZXJuYW1lIjoicF9hNmU1ZmU2Y2MwYjM0MDZhYWI5ODc2ZGU2MDYyODEifQ.Pcop2qYTCwWc9HLfbdMUqrHbn4PYky7S-W-Ar2VWqtBKauLJSr4D4IQmY7ZDobSe5_7FdS64SqQTUFZnv3r_55UJ0dXYxbOJ84IoTdiUduX5PH2bCKeqmo_mKrr6fepY5o5WLhJF7bNc-mw-PBwvl9K_rXuw0Nb-CkKSX7iOiOVsKQht4ZUrJhp30IkrmoFTZs2N5X5PhcmyKqF8nyJ2ScCCjYwUvP1100qolpsHiZ5FX_rBHfyNB1LpnNSRGL4TIQXE-4jGwsUqV9Bp0tdINgibhJe3awY-iFjJG65lum8iyTm3mmFiY6Zo6q8UinyL8Utpkkj6kZxLKwetp-VS_g' download="mycrm_v1.apk">
      <Image  src={download_logo} alt="MYCRM" width={200} height={200} />
      </a>
      <h2 className="my-4 font-semibold text-sky-900">64.36 MB</h2>

<hr />
      <div>
        <h2 className=" font-bold text-lg text-center text-green-800 ">Frequently Asked Questions ( නිතර අසන ප්‍රශ්න )</h2>

        <div className="mx-4">
        <Accordion type="single" collapsible>

          <AccordionItem   value="item-1">
            <AccordionTrigger>How to install MYCRM on Android? (My CRM ඔබගේ ස්මාර්ට් දුරකථනයට ස්ථාපිත කරන්නේ කෙසේද ?)</AccordionTrigger>
            <AccordionContent>
              <div className="my-2">
              <Link href="">
              <Button className="bg-rose-800">වීඩියෝව බලන්න</Button>
              </Link>
              </div>
            
            Download the APK file from the above link and open it. If you are installing an APK for the first time, you will be asked to allow unknown sources. Allow it and install the app.
            </AccordionContent>
          </AccordionItem>



          <AccordionItem   value="item-2">
            <AccordionTrigger>Entered the correct username and password but can not log in (නිවැරදි පරිශීලක නාමය සහ මුරපදය ඇතුළත් කළ නමුත් ලොග් විය නොහැක.)</AccordionTrigger>
            <AccordionContent>
              <div className="my-2">
              <Link href="">
              <Button className="bg-rose-800">වීඩියෝව බලන්න</Button>
              </Link>
              </div>
            
              This can happen when existing previous cache files. it would be best if you had cleared the cache before login again. (
              My CRM ඇප් එක කිහිපවරක් ස්ථාපනය කරන්නට ලොග් වීමට නැවත ලොග් වීමට උත්සාහ කිරීමේදී මෙය ඇතිවිය හැකිය. විසඳා ගැනීමට ඉහත වීඩියෝ බලන්න. )           </AccordionContent>
          </AccordionItem>

          

          <AccordionItem   value="item-3">
            <AccordionTrigger>what is "Immediate call mode" (Immediate call mode කියන්නේ මොකක්ද ?)</AccordionTrigger>
            <AccordionContent>

            Make sure to one this feature ( you can see in MyCRM setting screen) for better user experience.(
              මෙය පාරිභෝගිකයන් වෙත ඇමතුම් ලබා ගැනීමේදී පහසුවක් ඇති කරයි.  මෙය ඔන් කර තබාගන්න.
            )
            
          </AccordionContent>
          </AccordionItem>


          
          <AccordionItem   value="item-4">
            <AccordionTrigger>Temporary problems are solved (තාවකාලිකව ඇතිවූ දෝෂ නිරාකරණය කර ඇත.)</AccordionTrigger>
            <AccordionContent>
            <p className=" font-bold  ">🟡 විසඳා ඇති දෝෂ</p>
            <ul  className=" list-disc" >
              <li className="my-2"> ✅ Following up but shows in Follow up Delayed ( following up කළ නමුත් follwing up delay වලත් පෙන්වයි )</li>
              <li className="my-2"> ✅ සම්බන්ධ කර ගැනීමට ප්‍රමාද වූ Lead not contacted පෙන්වන්නේ නැත</li>
              <li className="my-2"> ✅ කැලැන්ඩරයෙන් Next Follwing up Date ලබාදී ඇති නමුත් එම දිනය පසු වූ විට Follwing up Delayed ඇඩ් වෙන්නේ නැත.</li>
              <li className="my-2"> ✅ Refreshing Issue</li>
              <li className="my-2"> ✅ Other</li>
            </ul>
            
            
          </AccordionContent> 
          </AccordionItem>






      </Accordion>

        </div>
        

    

      </div>
    </main>
  );
}
