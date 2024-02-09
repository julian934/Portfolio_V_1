import { createClient } from 'next-sanity'

export async function GET(){
    
      const expertQuery=await client.fetch(`*[_type=="expertise"]{
        _id,language,image
      }`) 
      console.log(expertQuery)

    return Response.json(expertQuery)
}