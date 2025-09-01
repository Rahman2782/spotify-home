import { Library, Search, Heart, DiscAlbum } from "lucide-react"

const Sidebar: React.FC = () => {
  return ( //blue is a placholder color for the sidebar so i can visualize it better
    <div className="text-gray-400 h-screen w-50 p-5 text-md bg-blue-800 overflow-y-auto">
        <div className="space-y-4 "> {/* flex flex-col items-center */}
            <button className="flex items-center space-x-2 hover:text-white cursor-pointer">
                <Search className="w-6 h-6"/>
                <p>Search</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white cursor-pointer">
                <Library className="w-6 h-6"/>
                <p>Your Library</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white cursor-pointer">
                <Heart className="w-6 h-6"/>
                <p>Liked Songs</p>
            </button>
            <hr className="mt-4"/>

            {/* Playlists/Saved Albums go here - THESE ARE PLACEHOLDERS*/}
            <DiscAlbum className=" h-14 w-14"/>
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
  )
}

export default Sidebar
