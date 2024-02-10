"use client";
import { useState } from "react";
import "@/components/home.css";
import { Snowfall } from "react-snowfall";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [noPressed, setNoPressed] = useState(false);
  const router = useRouter();

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const phrases = [
    "No?",
    "Yakin?",
    "Bener Bener Yakin?",
    "Pikirin Lagi deh!",
    "Kesempatan Terakhir!",
    "Serius mau liat?",
    "Nanti nyesel!",
    "Masih Mau?!",
    "Sumpah udah dikasih tau berapa kali juga!",
    "Ngeyel banget jadi orang!",
    "Yaudah Deh Kalo Gitu!",
  ];

  const mentok = noCount > phrases.length;
  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  return (
    <>
      <Snowfall color="black" />
      {!noPressed ? (
        <div className="centered-container">
          <div className="valentine-container">
            <img
              className=""
              src="https://media1.tenor.com/m/lUFliafCu_MAAAAC/hello.gif"
            />
            <h1 className="text-container">
              {noCount === 0 ? "Mau Liat Orang jelek?" : getNoButtonText()}
            </h1>
            <div>
              {mentok ? (
                <Link href={"/gallery"}>
                  <button className={"yes-button"}>Yes</button>
                </Link>
              ) : (
                <button className={"yes-button"} onClick={handleNoClick}>
                  Yes
                </button>
              )}

              <button onClick={() => setNoPressed(true)} className="no-button">
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        <section className="centered-container">
          <main className="valentine-container">
            <img
              className="h-[200px]"
              src="https://media1.tenor.com/m/iQLH9O6qDw4AAAAC/peach-and-goma.gif"
              style={{ width: "400x", height: "240px" }}
            />
          </main>
        </section>
      )}
    </>
  );
}
