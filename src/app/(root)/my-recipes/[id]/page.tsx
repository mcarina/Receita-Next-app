"use client"

import { useParams } from 'next/navigation';

export default function ReceitasID(){
  const params = useParams();

  return(
    <div>
      <div>
        detalhes {params.id}
      </div>
    </div>
  )
}