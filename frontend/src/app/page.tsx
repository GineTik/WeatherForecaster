import WeatherFooter from "@/components/weather-footer/WeatherFooter";
import WeatherNavBar from "@/components/weather-navbar/WeatherNavBar";
import Image from "next/image";

export default function Home() {
    return (
        <main className="w-full h-screen text-white">
            <video
                autoPlay
                muted
                preload="none"
                loop
                className="fixed w-full -z-10 pointer-events-none brightness-75"
            >
                <source src="/videos/snowing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Image
                src="http://champ.iasa.kpi.ua/static/media/Logo.4d2264d87b0188c8fb687c6971b5f48b.svg"
                alt="logo"
                height={80}
                width={80}
                className="mt-9 ms-32 fixed"
                priority
            />
            <WeatherFooter />
            <WeatherNavBar />
        </main>
    );
}
