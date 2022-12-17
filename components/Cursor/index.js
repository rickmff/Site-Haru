import dynamic from "next/dynamic";
const CustomCursor = dynamic(() => import("./CustomCursor"), {
  ssr: false,
}) 

export default function Cursor() {
  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
      <CustomCursor />
    </>
  );
}
