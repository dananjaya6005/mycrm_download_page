
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
      <a href='https://070-up-e.jotta.cloud/files/v1/dl/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiemlwIjoiREVGIn0..uCgPDbNlGVnmXwG9U2Tayw.Y2-ez8w9szVQ-KURdV2Oc3Bi26aDiH8ODICESs_AW4h1gdOg67HN3m8uAkVjPjF42dNFu-KYhdEw1pDhb55yTU6DRTc6FsP_oHXXN-LSbcWob4zS15wRV5uwu6iDhhmlfKgNGWKpjjrYZ8xgpp80XtnWIABKt73ZPR5MTPGvrkuRC3l6QPqvMI7X4ISrN0s-Ui3QN3Gx_mQ8s2XKN0hKhmc3mfhTXoQe_B_NE25DAQv0UeW76rXsJQYlz27RWkr1HQJTa5LdKIAKQLQh-o6y6_jYjenSa-xBHq0CV4VtZFr-BJR9SGr8yf0jyooaEf2Z.r-Ihxg03aGVbHJ3YhIa_Hg?access_token=eyJraWQiOiJkZDBhMWIyOS02MjIyLTRmMWMtYjhkOS1jOTFiY2Q1OTRiMjkiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhY2NvdW50Iiwic3ViIjoicF8yNDVhYjhhMWExYzE0ODQ4YjFhNzUxNWYwYmVlYzYiLCJzdCI6IkNpQndYekkwTldGaU9HRXhZVEZqTVRRNE5EaGlNV0UzTlRFMVpqQmlaV1ZqTmhJQ0NBRWFKUm9qTXpZMlkyTmxabU0yWldFME16QXdOR0l5TVRrMFkyTmpNRGcyWldSa05EQmxZems9IiwiaXNzIjoiam90dGEiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjE3MjEzNjU4NjAsInVzZXJuYW1lIjoicF8yNDVhYjhhMWExYzE0ODQ4YjFhNzUxNWYwYmVlYzYifQ.UA9kpi2o_9P2XrYvcViWxB_tfTfOREHOQYvvsloAD74PpgEII4UMF_HrSi58BW9vk9fsw-23PdrwXOXIeDGYrMbucmiyC_lpKcURJr3cF-4IxsO5TgJfPgGlYYoRvUZoOELmqEyNxGqlbuqiN4QDp7UH1VGsvYoBT3Fy-CSrZrLxPvtsgLrQhzEGlB27jf3rqb55vSaDNh5T70fEkzCXL69-s5Bg67lypXPRp0bvpy68nQlIOx-0j82dGfOi3yco-LvBGOZaUtW22ykgpjl4zx46kr_MG0JkISJt2wqWqLeVcjyFF_rHfn7o6tDrYYnUgYyKjERLEDtOniXhksHHQQ' download="mycrmv2.apk">
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
