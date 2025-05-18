import { useState } from "react";
export default function Stats({ total, c }) {
  return (
    <div className="flex justify-between items-center text-center px-16 min-h-[100px] p-4 text-3xl">
      <div>Total Task : {total}</div>
      <div>Pending Task : {total - c} </div>
      <div>Completed Task : {c}</div>
    </div>
  );
}
