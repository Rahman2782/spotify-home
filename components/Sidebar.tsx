import { Library, Search, Heart, DiscAlbum } from "lucide-react"

const Sidebar: React.FC = () => {
  return ( 
    <div className="text-gray-400 h-screen w-24 p-3 text-md bg-[#131419] flex flex-col items-center">
        <div className="space-y-4 flex flex-col items-center"> {/*  */}
            <div className="space-y-4">
                <button className="flex items-center space-x-2 hover:text-white cursor-pointer">
                    <Library className="w-8 h-8"/>
                </button>
                <button className="flex items-center space-x-2 hover:text-white cursor-pointer">
                    <Heart className="w-8 h-8"/>
                </button>
            </div>

            <hr className="w-[90%] border-1 border-gray-500"/>

            {/* Playlists/Saved Albums go here - THESE ARE PLACEHOLDERS*/}
            <div className="px-2 overflow-y-auto h-screen w-full space-y-2">
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
                <DiscAlbum className="h-14 w-14"/>
            </div>

        </div>

    </div>
  )
}

export default Sidebar
