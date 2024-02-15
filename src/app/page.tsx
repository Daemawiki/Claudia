import Header from "@/components/header/header";
import SideBar from "@/components/sideBar/sideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <SideBar />
    </main>
  );
}
