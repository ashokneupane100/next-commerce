"use client"
import Image from "next/image";

function Card({children}) {
  return (
    <div className="border rounded-md border-gray-600 p-4">Card Component:{children}</div>
  );
}

export default function Home() {
  const handleClick=(e)=>{
    e.preventDefault();
    console.log(e)
    alert("Annapurna is my lovely daughter. But today she is being lazy !")
 }
  const name = "Ashok ";
  return (
    <>
      <div className="p-20 space-y-4">
        <div className="">Hello {name}</div>
        <Card >This is passed to child component !</Card>
        <Card >
          <div className="">This is JS.</div>
          <Card>Nested text!</Card>
        </Card>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

<button onClick={handleClick} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
  Click me!
</button>


      </div>
    </>
  );
}
