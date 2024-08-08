import Link from "next/link"

export default function Home() {
  return (
    <main id="main">
      <div style={{ minHeight: "100vh", width: "auto", alignContent: "center", alignItems: "center", backgroundColor: "#ffffff", display: "flex", flexDirection: "column", flexWrap: "nowrap", gap: "0px", height: "min-content", justifyContent: "flex-start", maxWidth: "100%", overflow: "hidden", padding: 0, position: "relative" }}>
        <div style={{ alignContent: "center", alignItems: "center", display: "flex", flex: "none", flexDirection: "column", flexWrap: "nowrap", gap: "50px", height: "min-content", justifyContent: "flex-start", maxWidth: "100%", overflow: "visible", position: "relative", width: "700px" }} className="p-[50px] max-[809px]:p-[30px]">
          <div style={{ alignItems: "center", display: "flex", flex: "none", flexDirection: "row", flexWrap: "nowrap", height: "min-content", justifyContent: "space-between", overflow: "visible", padding: 0, position: "relative", width: "100%" }}>
            <div style={{ aspectRatio: 1 / 1, borderRadius: "41px", flex: "none", height: "48px", overflow: "visible", position: "relative", width: "48px" }}>
              <div style={{ position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0, backgroundRepeat: "repeat", backgroundPosition: "left top", backgroundSize: "126px auto", backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjEyNiI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0xMjYgMHYyMS41ODRMMjEuNTg0IDEyNkgwdi0xNy41ODVMMTA4LjQxNSAwSDEyNlptMCAxMDguNDE0VjEyNmgtMTcuNTg2TDEyNiAxMDguNDE0Wm0wLTg0djM5LjE3MUw2My41ODUgMTI2SDI0LjQxNEwxMjYgMjQuNDE0Wm0wIDQydjM5LjE3TDEwNS41ODQgMTI2aC0zOS4xN0wxMjYgNjYuNDE0Wk0xMDUuNTg2IDAgMCAxMDUuNTg2VjY2LjQxNUw2Ni40MTUgMGgzOS4xNzFabS00MiAwTDAgNjMuNTg2VjI0LjQxNUwyNC40MTUgMGgzOS4xNzFabS00MiAwTDAgMjEuNTg2VjBoMjEuNTg2WiIvPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhIiBmaWxsPSIjODg4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)", opacity: 0.2 }}>

              </div>
            </div>

            <div style={{ alignContent: "center", alignItems: "center", display: "flex", flexDirection: "row", flexWrap: "nowrap", gap: "16px", height: "min-content", justifyContent: "flex-end", overflow: "visible", padding: 0, position: "relative", width: "min-content" }}>
              <div style={{ alignContent: "center", alignItems: "center", backgroundColor: "#f2f2f2", borderRadius: "50%", display: "flex", flex: "none", flexDirection: "row", flexWrap: "nowrap", gap: "10px", height: "48px", justifyContent: "center", overflow: "visible", padding: "12px", position: "relative", width: "48px" }}>
                <div style={{ display: "contents" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))" style={{ userSelect: "none", width: "100%", height: "100%", display: "inline-block", fill: "rgb(102, 102, 102)", flexShrink: 0 }}><g color="var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))" width="fill"><path d="M245.7,77.7l-30.2,30.1C209.5,177.7,150.5,232,80,232c-14.5,0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a8,8,0,0,1,3.9-11.9c.2-.1,23.8-9.1,39.1-26.4a108.6,108.6,0,0,1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1,8.1,0,0,1,5.5-6.2,8,8,0,0,1,8.1,1.9c.3.4,33.6,33.2,74.3,43.8V88a48.3,48.3,0,0,1,48.6-48,48.2,48.2,0,0,1,41,24H240a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,245.7,77.7Z"></path></g></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#001122]/80 font-medium leading-[1.4em] -tracking-[0.5px] text-left text-[20px]">
            I&apos;m Dana Parker, a designer at <span className="text-[#303040B3]"><Link target="_blank" href="https://omidshabab.com">Framer</Link></span>. I am focusing on creating the best website building tool with my talented team. A high level of craft is very important to me and my work.
          </div>
        </div>
      </div>
    </main >
  );
}
