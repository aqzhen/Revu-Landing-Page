import { Header } from "@/components/header";
import { LandingPage } from "@/components/landing-page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Header />
      <LandingPage />
      <div className="flex justify-center">
        <video
          src="/Revu-Landing-Page
          /demo.mp4"
          controls
          style={{ width: "800px", height: "600px" }}
        />
      </div>
    </main>
  );
}
