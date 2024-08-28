import { Header, Footer } from "@/components";
import Document from "./document/[id]/page";

export default function Home() {
  return (
    <>
      <Document />
      <Footer />
    </>
  );
}
