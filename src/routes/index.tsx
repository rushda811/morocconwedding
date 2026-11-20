import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Music, Pause, MapPin } from "lucide-react";
import arabPattern from "@/assets/arab-pattern2.webp";
import calendarFrame from "@/assets/calendar-frame.webp";
import calligraphy from "@/assets/calligraphy.webp";
import castle from "@/assets/castle-background.webp";
import flowerBottom from "@/assets/flower-bottom.webp";
import flowerDeco from "@/assets/flower-decoration.webp";
import flowerTop from "@/assets/flower2-top.webp";
import frame from "@/assets/frame.webp";
import goldenFrame from "@/assets/golden-frame.webp";
import lantern from "@/assets/lanterns2-top.webp";
import goldenLine from "@/assets/golden-line.webp";
import guestbookBg from "@/assets/guestbook-background.webp";
import leafDeco from "@/assets/leaf-decoration.webp";
import music from "@/assets/wedding-music.mp3";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salman & Seema — Wedding Invitation" },
      { name: "description", content: "You are cordially invited to celebrate the wedding of Salman & Seema on August 11, 2027 in Marrakech." },
      { property: "og:title", content: "Salman & Seema — Wedding Invitation" },
      { property: "og:description", content: "Celebrate with us on August 11, 2027 in Marrakech." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WEDDING = new Date("2027-08-11T19:00:00");
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Beldi+Country+Club+Marrakech+Morocco";

function Divider() {
  return <img src={goldenLine} alt="" className="mx-auto w-56 max-w-[60%] opacity-90 md:w-72" />;
}

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`relative overflow-hidden px-5 py-14 md:px-10 md:py-24 ${className}`}><div className="relative mx-auto max-w-3xl">{children}</div></section>;
}

function Index() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);

  const open = () => {
    setOpened(true);
    audio.current?.play().then(() => setPlaying(true)).catch(() => {});
  };
  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true));
    else { a.pause(); setPlaying(false); }
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <audio ref={audio} src={music} loop preload="auto" />
      {/* page background */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-[0.12]" style={{ backgroundImage: `url(${arabPattern})`, backgroundSize: "360px" }} />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 -z-0 h-[60vh] bg-cover bg-bottom opacity-20" style={{ backgroundImage: `url(${castle})` }} />

      {!opened && <Cover onOpen={open} />}

      {opened && (
        <div className="relative">
          <Hero />
          <Divider />
          <Families />
          <Divider />
          <Gallery />
          <Divider />
          <Countdown />
          <Divider />
          <Venue />
          <Divider />
          <Attire />
          <Divider />
          <Programme />
          <Divider />
          <Guestbook />
          <Ending />
        </div>
      )}

      {opened && (
        <button
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-soft transition hover:scale-105"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Music className="h-5 w-5 animate-pulse" />}
        </button>
      )}
    </main>
  );
}

function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-background p-6">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${arabPattern})`, backgroundSize: "320px" }} />
      <button
        onClick={onOpen}
        className="group relative flex aspect-[3/4] w-full max-w-[22rem] md:max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl border-[3px] border-double border-gold bg-ivory text-center shadow-soft transition hover:-translate-y-1"
      >
        <img src={flowerTop} alt="" className="absolute -left-12 -top-10 w-36 md:w-44" />
        <img src={flowerTop} alt="" className="absolute -right-12 -top-10 w-36 -scale-x-100 md:w-44" />
        <img src={flowerBottom} alt="" className="absolute -bottom-4 left-0 w-full" />
        <div className="relative z-10 px-10 pb-20 pt-10">
          <p className="royal-label text-xs sm:text-sm">Cordially Invites</p>
          <h1 className="mt-5 font-script text-6xl leading-none md:text-7xl text-gold-gradient">Salman <span className="block text-3xl">&</span> Seema</h1>
          <p className="mt-5 royal-label text-base text-foreground">August 11, 2027</p>
          <p className="mt-2 text-xl italic text-muted-foreground">to celebrate with our family</p>
          <p className="mt-8 royal-label text-xs animate-pulse">Tap to open</p>
        </div>
      </button>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-16">
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${castle})` }} />
      <img src={lantern} alt="" className="animate-sway absolute left-3 top-0 z-10 h-52 sm:left-[8%] md:h-[26rem]" />
      <img src={lantern} alt="" className="animate-sway absolute right-3 top-0 z-10 h-40 sm:right-[8%] md:h-80" style={{ animationDelay: "1s" }} />
      <img src={flowerTop} alt="" className="absolute -left-10 -top-6 w-32 sm:w-44 md:w-60" />
      <img src={flowerTop} alt="" className="absolute -right-10 -top-6 w-32 -scale-x-100 sm:w-44 md:w-60" />
      <div className="relative z-[5] mx-auto w-[80%] max-w-md animate-float-in">
        <img src={frame} alt="" className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[14%] pb-[18%] pt-[22%] text-center">
          <img src={calligraphy} alt="Bismillah calligraphy" className="w-full max-w-[16rem]" />
          <h1 className="mt-4 font-script text-5xl leading-tight text-gold-gradient md:text-7xl">Salman</h1>
          <span className="font-script text-4xl text-gold-gradient">&</span>
          <h1 className="font-script text-5xl leading-tight text-gold-gradient md:text-7xl">Seema</h1>
          <p className="mt-4 royal-label text-sm">11 · 08 · 2027</p>
        </div>
      </div>
      <img src={flowerTop} alt="" className="absolute -bottom-8 -left-10 w-32 -scale-y-100 sm:w-44 md:w-60" />
      <img src={flowerTop} alt="" className="absolute -bottom-8 -right-10 w-32 -scale-100 sm:w-44 md:w-60" />
    </section>
  );
}

function GoldFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <img src={goldenFrame} alt="" className="absolute inset-0 h-full w-full" />
      <div className="relative px-8 pb-14 pt-20 text-center sm:px-14 md:pt-24">{children}</div>
    </div>
  );
}

function Event({ name, place, time }: { name: string; place: string; time: string }) {
  return (
    <div className="mt-8">
      <h3 className="font-display text-3xl font-semibold tracking-[0.25em] text-gold-gradient sm:text-4xl">{name}</h3>
      <p className="mt-1 text-xl italic sm:text-2xl">{place}</p>
      <p className="mt-3 royal-label text-xs">AT</p>
      <p className="font-display text-4xl font-semibold text-gold-gradient">{time}</p>
      <p className="mt-2 font-display text-sm font-semibold tracking-[0.25em]">WEDNESDAY | 11 | AUGUST</p>
      <p className="font-display text-sm font-semibold tracking-[0.3em]">2027</p>
    </div>
  );
}

function Families() {
  return (
    <Section>
      <GoldFrame>
        <p className="font-display text-base font-semibold tracking-[0.12em] sm:text-lg">Mr. & Mrs. Mehdi El Amrani</p>
        <p className="text-xl italic text-muted-foreground">Salma El Amrani</p>
        <p className="my-3 font-script text-4xl text-gold-gradient">&</p>
        <p className="font-display text-base font-semibold tracking-[0.12em] sm:text-lg">Mr. & Mrs. Mehdi Benjelloun</p>
        <p className="text-xl italic text-muted-foreground">Salma Benjelloun</p>
        <p className="mt-6 text-xl italic leading-relaxed sm:text-2xl">We would be delighted to have you beside us on our wedding day</p>
        <Event name="NIKAH" place="Riad Al Moussika Courtyard" time="19:00" />
        <div className="mx-auto mt-8 h-px w-24 bg-gold" />
        <Event name="WALIMA" place="Beldi Country Club" time="20:30" />
      </GoldFrame>
    </Section>
  );
}

function Gallery() {
  const photos = [g1, g2, g3, g4];
  return (
    <Section className="px-0">
      <h2 className="mb-8 text-center font-script text-5xl text-gold-gradient sm:text-6xl">Our Moments</h2>
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-4">
          {[...photos, ...photos].map((p, i) => (
            <img key={i} src={p} alt="Wedding moment" className="h-64 w-48 shrink-0 rounded-t-full md:h-96 md:w-72 border-4 border-ivory object-cover shadow-soft" />
          ))}
        </div>
      </div>
    </Section>
  );
}

function useCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, WEDDING.getTime() - (now ?? WEDDING.getTime()));
  return {
    days: Math.floor(diff / 864e5),
    hours: Math.floor((diff / 36e5) % 24),
    min: Math.floor((diff / 6e4) % 60),
    sec: Math.floor((diff / 1e3) % 60),
  };
}

function Countdown() {
  const c = useCountdown();
  // August 2027 starts on a Sunday
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <Section>
      <img src={lantern} alt="" className="animate-sway absolute -left-2 -top-14 z-10 h-56 md:-left-24 md:-top-24 md:h-[26rem]" />
      <img src={lantern} alt="" className="animate-sway absolute -right-2 -top-14 z-10 h-44 md:-right-24 md:-top-24 md:h-80" style={{ animationDelay: "1.5s" }} />
      <img src={leafDeco} alt="" className="absolute -left-14 top-40 w-24 sm:w-32 md:-left-40 md:top-72 md:w-48" />
      <img src={flowerDeco} alt="" className="absolute -right-14 top-60 w-24 sm:w-32 md:-right-40 md:top-96 md:w-52" />
      <GoldFrame>
        <p className="font-display text-5xl font-semibold text-gold-gradient">19:00</p>
        <p className="mt-2 royal-label">WEDNESDAY</p>
        <p className="font-script text-8xl leading-none text-gold-gradient">11</p>
        <p className="royal-label">AUGUST</p>
        <p className="font-display text-sm tracking-[0.3em]">2027</p>
        <div className="mt-6 flex justify-center gap-8 text-lg">
          <div><p className="royal-label text-xs">Welcome</p><p>18:00</p></div>
          <div><p className="royal-label text-xs">Reception</p><p>20:30</p></div>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-1.5 sm:gap-3">
          {([["days", c.days], ["hours", c.hours], ["min", c.min], ["sec", c.sec]] as const).map(([l, v]) => (
            <div key={l} className="rounded-lg border border-border bg-ivory/80 py-3">
              <p className="font-display text-xl text-gold-deep sm:text-2xl">{v}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">{l}</p>
            </div>
          ))}
        </div>
      </GoldFrame>
      <div className="relative mx-auto mt-10 w-full max-w-sm">
        <img src={calendarFrame} alt="" className="absolute inset-0 h-full w-full" />
        <div className="relative px-[14%] py-[16%] text-center">
          <p className="font-script text-4xl text-gold-gradient">August 2027</p>
          <div className="mt-4 grid grid-cols-7 gap-1 font-display text-xs">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i} className="text-gold-deep">{d}</span>)}
            {days.map((d) => (
              <span key={d} className={`flex h-7 items-center justify-center rounded-full ${d === 11 ? "bg-gold-gradient text-primary-foreground" : ""}`}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Venue() {
  return (
    <Section className="text-center">
      <h2 className="font-script text-5xl text-gold-gradient sm:text-6xl">The Venue</h2>
      <p className="mt-4 font-display text-2xl font-semibold tracking-[0.15em] sm:text-3xl">Beldi Country Club</p>
      <p className="text-xl italic text-muted-foreground">Marrakech, Morocco</p>
      <a href={MAP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 font-display text-xs tracking-[0.2em] text-primary-foreground shadow-soft transition hover:scale-105">
        <MapPin className="h-4 w-4" /> VIEW LOCATION
      </a>
    </Section>
  );
}

function Attire() {
  const colors = [
    { name: "Ivory", c: "bg-ivory" },
    { name: "Gold", c: "bg-gold" },
    { name: "Sage", c: "bg-accent" },
  ];
  return (
    <Section className="text-center">
      <h2 className="font-script text-5xl text-gold-gradient sm:text-6xl">Party Attire</h2>
      <p className="mt-2 text-xl italic text-muted-foreground">We'd love to see you in these shades</p>
      <div className="mt-6 flex justify-center gap-6">
        {colors.map((x) => (
          <div key={x.name}>
            <div className={`h-16 w-16 rounded-full border-4 border-double border-gold sm:h-20 sm:w-20 shadow-soft ${x.c}`} />
            <p className="mt-3 royal-label text-xs">{x.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const PROGRAMME = [
  ["18:00", "Guests welcomed with dates and Arabic coffee"],
  ["19:00", "Katb al-kitab"],
  ["20:00", "Zaffa procession"],
  ["20:30", "The couple take the kosha"],
  ["21:30", "Walima dinner"],
  ["23:00", "Dabke and dancing"],
  ["00:30", "Sweets and farewell"],
];

function Programme() {
  return (
    <Section>
      <h2 className="text-center font-script text-5xl text-gold-gradient sm:text-6xl">The Evening</h2>
      <ol className="mx-auto mt-8 max-w-sm border-l border-gold pl-6">
        {PROGRAMME.map(([t, d]) => (
          <li key={t} className="relative mb-6">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gold-gradient" />
            <p className="font-display text-lg font-semibold text-gold-deep">{t}</p>
            <p className="text-xl">{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

type Wish = { name: string; text: string };

function Guestbook() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    try { setWishes(JSON.parse(localStorage.getItem("wishes") || "[]")); } catch {}
  }, []);
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const next = [{ name: name.trim(), text: text.trim() }, ...wishes];
    setWishes(next);
    localStorage.setItem("wishes", JSON.stringify(next));
    setName(""); setText("");
  };
  return (
    <Section className="bg-cover bg-center" >
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${guestbookBg})` }} />
      <div className="relative mx-auto max-w-md rounded-2xl border border-gold bg-ivory/85 p-6 text-center shadow-soft backdrop-blur-sm">
        <h2 className="font-script text-5xl text-gold-gradient sm:text-6xl">Guestbook</h2>
        <form onSubmit={send} className="mt-4 space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={60} className="w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Your wishes for the couple" maxLength={400} rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
          <button className="w-full rounded-full bg-gold-gradient py-3 font-display text-xs tracking-[0.25em] text-primary-foreground shadow-soft">🪄 SEND WISHES</button>
        </form>
        <ul className="mt-6 space-y-3 text-left">
          {wishes.map((w, i) => (
            <li key={i} className="rounded-lg border border-border bg-background/80 p-3">
              <p className="font-display text-sm text-gold-deep">{w.name}</p>
              <p className="italic">{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Ending() {
  return (
    <section className="relative overflow-hidden pt-16 text-center">
      <div className="absolute inset-0 bg-cover bg-bottom opacity-30" style={{ backgroundImage: `url(${castle})` }} />
      <p className="relative font-script text-5xl text-gold-gradient">Salman & Seema</p>
      <p className="relative mt-2 italic text-muted-foreground">We can't wait to celebrate with you</p>
      <img src={flowerBottom} alt="" className="relative mt-6 w-full" />
    </section>
  );
}
