
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
      <a href='https://070-up-e.jotta.cloud/files/v1/dl/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiemlwIjoiREVGIn0..9ClDV-_0HQGDduzWDR1Jcg.5TixrZ2volkphlzrr2yJ-V7uXVcHfcJNGz2UTC5O0D_gt13fzzGn2woEz6jcS_Kty6xm_H-MsBgegMWOO4RCh1uxVlhkJYJ8-szE_w5h_hkluwNPavPS4gL472yoCrVFWq-93RZObBVmjmYYE0OiGVPlmvmkDdTbTGSglpRL4qLpiB2HhLAysrVwsJNOmFV_P-OJ1oq24BiqrG5whhEzD7hZ2C9KOD8y5DVBW2zyLzWcT7t3vlAXu_EONS7NcssGSF0SzEeDZbdnNsHVYdOca5rXkBMVai42veue5qns2SMwfdt5ELJt0itX6rygPqu0.VPnFZGsLTSonJmgxjn0kkw?access_token=eyJraWQiOiJkZDBhMWIyOS02MjIyLTRmMWMtYjhkOS1jOTFiY2Q1OTRiMjkiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhY2NvdW50Iiwic3ViIjoicF8xMmZhYjNhOTg2MTA0NDVmOTk5YTY3MDk4ODNlYWEiLCJzdCI6IkNpQndYekV5Wm1GaU0yRTVPRFl4TURRME5XWTVPVGxoTmpjd09UZzRNMlZoWVJJQ0NBRWFKUm9qTXpZMlkyTmxabU0yWldFME16QXdOR0l5TVRrMFkyTmpNRGcyWldSa05EQmxZems9IiwiaXNzIjoiam90dGEiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjE3MjE3MTUxNDcsInVzZXJuYW1lIjoicF8xMmZhYjNhOTg2MTA0NDVmOTk5YTY3MDk4ODNlYWEifQ.Gn1Nelw3yM_Fu_jiulzbVSRlH94bLjTx1ZjkLVgsfNcSe9RbJ7FrJwHYiDgUQovc3PJ-dEl4-7dB9f8futiyaxXrWwBoBBvmVtc1juPRQHeWvnVzBgJMreEPMz-Z0PZN7VDQaVlEPw7sNhsl7sMY4bQZ8d0QtrXhj15dBbZnCtGQDRqE9VJPCN6UNlGNAQ5t9L8qHv3lXE6PVSq2uoDljxlBXpX0PgtUvVwkuo7tOdzL5iXDoXSKNABOf8pdDbsbSSHNX0M6JbimgnlYNLL2qh4ylXer37Egno9nM6K64LzwLrEf4MX1QyNjv2qyXil_f8pUy68rQPYxmal67SQQFQ' download="mycrmv2.apk">
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
