"use client";

import { useParams } from "next/navigation";
export default function Recipes() {

    const params = useParams();

    return (
      <div className="">
          recipe {params.id}
      </div>
    );
  }
  