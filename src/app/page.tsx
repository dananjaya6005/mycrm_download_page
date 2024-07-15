
import Image  from "next/image";
import download_logo from '../../public/apkdownload.png';
import icon from '../../public/icon.png';
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
      <Image src={icon} className="my-8" alt="MYCRM" width={150} height={150} />
      <h1 className="text-2xl font-semibold  text-zinc-700 my-5" >Download MYCRM for Android</h1>
      <a href='https://070-up-e.jotta.cloud/files/v1/dl/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiemlwIjoiREVGIn0..mPH8yhQn59PzasuTY9m2eA.j2NYihtoZtywNG1G-gXCzRpK1lq4o1KON81a7Q4coJb72AuMDfPNIlUOCKIM_SIexkUBSVYSAEbCoWGHXjwjEKz-7H1K5xAjyz3s-Fxppkcl1uiaZX86GtpRLlAs4TK5tLhmC_2WwCtzPeQ8eeLQBZ3n4CfHCZ1-ynwOZP8hQk1rOq4iNAyCWvngW9ZVp9GW-l3OeSSEsNLYO678YJtSCOVhpWeP1PVCTY9un0acGDMegCraU7Mv29USiWZ7CyUF3OHY7KGjC04yu4jxhiLNfHZeJdA0wHglR7iBuh1sIGrqUtdtQZC7nRd3SaRISvAZ.Gbo39GvKUcLlaS2igy3-vg?access_token=eyJraWQiOiJkZDBhMWIyOS02MjIyLTRmMWMtYjhkOS1jOTFiY2Q1OTRiMjkiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhY2NvdW50Iiwic3ViIjoicF9kZTI1MjhmNGRiMWY0NDlkOTVlYzNlYTZiMDM4YzYiLCJzdCI6IkNpQndYMlJsTWpVeU9HWTBaR0l4WmpRME9XUTVOV1ZqTTJWaE5tSXdNemhqTmhJQ0NBRWFKUm9qTXpZMlkyTmxabU0yWldFME16QXdOR0l5TVRrMFkyTmpNRGcyWldSa05EQmxZems9IiwiaXNzIjoiam90dGEiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjE3MjExMzE0MTQsInVzZXJuYW1lIjoicF9kZTI1MjhmNGRiMWY0NDlkOTVlYzNlYTZiMDM4YzYifQ.IYLDhGJ55AypKDaNeNE1GHltVIgXqI8zTRl4_nLvUwH3YawhjW3U5dbGLd3Im2r8A5zbz6N1LJBcIaKlHJBXm-WrtCO49pY2dvJzLsHF-p01BylPtLNhA7Twq92N22xuSJpDCWvVyE1AfS4Nkwhxn5AmKySwvMkDvWfhsvHtD90hmwpjalqBO2twd4Jj9xuxwqNWzRJIwNQzZ3_BTbi3DFSgjPxOTLLP3yruGtF2IeYegj3G0c9AWWA-_aVNTyHHSJedRJ6Knbzho6_dMKPdvc4q7KclHuLzmMAbufyru4vI22N-7Ig06UTmkatjISo-ePanCPqD1_QvkNtNiVN82w' download="mycrmv2.apk">
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
              <Link href="https://youtu.be/vUiaqOVTHlo">
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
              <Link href="https://youtu.be/6CFfk9aOS9Q">
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
              <li className="my-2"> ✅ සිංහල භාෂාව එකතු කර ඇත.</li>
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
