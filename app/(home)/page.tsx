import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center items-center">
      <div className="max-w-3xl px-8">
        <h1 className="mb-8 text-3xl font-bold">WIreless SystEm (WISE)</h1>
        <p className="text-fd-muted-foreground text-lg text-justify">
          <Link
            href="https://drive.google.com/file/d/1WY-B5Tis-3ozam6YyNkgEypXPtcURGm4/view?usp=sharing"
            className="text-fd-foreground font-semibold underline"
          >
            WISE Lab
          </Link>{" "}
          focuses on the key challenges of low latency end-to-end content
          delivery for 5G/6G including mmWave, Satellite communication, and
          security. Both software (C/C++/Python/Java/Matlab) and hardware
          (Verilog/FPGA) development are considered. More about us can be found
          via{" "}
          <Link
            href="https://sites.google.com/view/chinya-huang/news?authuser=0"
            className="text-fd-foreground font-semibold underline"
          >
            News
          </Link>
          ,{" "}
          <Link
            href="https://sites.google.com/view/chinya-huang/projects?authuser=0"
            className="text-fd-foreground font-semibold underline"
          >
            Projects
          </Link>
          , and{" "}
          <Link
            href="https://sites.google.com/view/chinya-huang/publications?authuser=0"
            className="text-fd-foreground font-semibold underline"
          >
            Publications
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
