
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
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star, ChevronDown, Share2 } from "lucide-react"

export default function Home() {
  return (


    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 flex items-start space-x-4">
   
        <Image className=" rounded-lg " src={icon} alt="icon" width={80} height={80} />

        <div className="flex-1">
          <h1 className="text-xl font-semibold">MyCRM</h1>
          <p className="text-sm text-green-600">DMS (pvt) Ltd </p>
          <div className="flex items-center mt-1">
            <span className="text-sm font-medium mr-1">4.4</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-2 border-t border-b border-gray-200 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">Contains ads · In-app purchases</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <a download='MyCrm app'  href="https://files.catbox.moe/38af0y.apk" target="_blank">
          Download APK
          </a>
        </Button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">About this app</h2>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-xs text-gray-600 mb-4">
        By using our MYCRM.LK system, you agree to the collection and use of Facebook data to enhance  sales operations. We assure you that we prioritize the security of your data.  For any queries regarding these terms, feel free to contact us.
        </p>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <p className="text-2xl font-bold">0.1K +</p>
            <p className="text-xs text-gray-500">Downloads</p>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold">E</p>
            <p className="text-xs text-gray-500">Rated for 17+</p>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold">4.5★</p>
            <p className="text-xs text-gray-500">100+ reviews</p>
          </div>
        </div>
        <Button variant="outline" className="w-full justify-start">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Ratings and reviews</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-center">
            <p className="text-4xl font-bold">4.5</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">100+ reviews</p>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <span className="text-xs w-3 mr-2">{rating}</span>
                <Progress value={rating * 20} className="h-2 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <main className="flex flex-col mt-10  justify-center items-center ">

      <div>
        <h2 className=" font-bold  text-center ">Frequently Asked Questions ( නිතර අසන ප්‍රශ්න )</h2>

        <div className="mx-4">
        <Accordion type="single" collapsible>

          <AccordionItem   value="item-1">
            <AccordionTrigger className="text-sm" >How to install MYCRM on Android? (My CRM ඔබගේ ස්මාර්ට් දුරකථනයට ස්ථාපිත කරන්නේ කෙසේද ?)</AccordionTrigger>
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
            <AccordionTrigger className="text-sm">Entered the correct username and password but can not log in (නිවැරදි පරිශීලක නාමය සහ මුරපදය ඇතුළත් කළ නමුත් ලොග් විය නොහැක.)</AccordionTrigger>
            <AccordionContent>
              <div className="my-2">
              <Link href="https://youtu.be/6CFfk9aOS9Q">
              <Button className="bg-rose-800">වීඩියෝව බලන්න</Button>
              </Link>
              </div>
            
              This can happen when existing previous cache files. it would be best if you had cleared the cache before login again. (
              My CRM ඇප් එක කිහිපවරක් ස්ථාපනය කරන්නට ලොග් වීමට නැවත ලොග් වීමට උත්සාහ කිරීමේදී මෙය ඇතිවිය හැකිය. විසඳා ගැනීමට ඉහත වීඩියෝ බලන්න. )           </AccordionContent>
          </AccordionItem>
      </Accordion>

        </div>
        

    

      </div>
    </main>



    </div>

  );
}
