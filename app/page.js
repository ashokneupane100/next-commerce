import Image from "next/image";

function Card({children}) {
  return (
    <div className="border rounded-md border-gray-600 p-4">Card Component:{children}</div>
  );
}

export default function Home() {
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
      </div>
    </>
  );
}
