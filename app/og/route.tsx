import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Tech, Politics & Joe'
  let thumbnail = url.searchParams.get('thumbnail')

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          {thumbnail ? (
            <img src={thumbnail} alt="Thumbnail" tw="w-full h-auto object-cover" />
          ) : (
            <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
              {title}
            </h2>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}


// Original Code
// import { ImageResponse } from 'next/og'

// export function GET(request: Request) {
//   let url = new URL(request.url)
//   let title = url.searchParams.get('title') || 'Tech, Politics & Joe'

//   return new ImageResponse(
//     (
//       <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
//         <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
//           <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
//             {title}
//           </h2>
//         </div>
//       </div>
//     ),
//     {
//       width: 1200,
//       height: 630,
//     }
//   )
// }
