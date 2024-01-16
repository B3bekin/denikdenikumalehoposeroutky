import Jeff from "@/public/jeff.jpg";
import Image from "next/image";

export default function Anout() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="flex py-10 justify-center text-3xl">
          <h1>Jeff Kinney, the creator of saga</h1>
        </div>

        <div className="flex justify-center">
          <Image src={Jeff} alt="Jekk Kinney" width={780} height={520} />
        </div>
      </div>
    </div>
  );
}
