import Hello from "@/app/components/hello"

export default function Home() {
  console.log("What am i doing here?");

  return (
    <>
      <h1 className="text-3xl">Welcome to the nextjs course</h1>
      <Hello />
    </>
  );
}
