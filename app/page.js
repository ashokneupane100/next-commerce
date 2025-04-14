import Image from "next/image";

function Card(props) {
  return (
    <div className="border rounded-md border-gray-600 p-4">Card Component:{props.text}</div>
  );
}

export default function Home() {
  const name = "Ashok ";
  return (
    <>
      <div className="p-20 space-y-4">
        <div className="">Hello {name}</div>
        <Card text="This is being passed from the parent."/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  );
}
