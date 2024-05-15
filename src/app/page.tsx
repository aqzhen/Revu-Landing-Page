import { Header } from "@/components/header";
import { LandingPage } from "@/components/landing-page";
import GoogleAnalytics from "@/components/googleAnalytics";

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <main className="flex min-h-screen flex-col justify-between p-24">
        <Header />
        <LandingPage />
        <div className="flex justify-center">
          <video
            src="/demo.mov"
            controls
            style={{ width: "800px", height: "600px" }}
          />
        </div>
      </main>
    </>
  );
}
