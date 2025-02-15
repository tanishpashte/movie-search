// home , india spotlight, genres, top rated, upcoming, settings, logout
import profile from "./assets/profile.png"

function Sidebar(){
    return (
        <div className="w-fit h-screen px-8 py-12">
            <div className="flex items-center gap-5 bg-slate-800 pr-4 py-2 rounded-lg justify-around mb-6">
                <img src={profile} alt="Profile photo" className="rounded-full h-12 w-12"/>
                <p className="">Welcome, Tanish</p>
                {/* <div className="gap-4">
                    <i class="fa-solid fa-magnifying-glass p-4 pr-4"></i>
                    <i class="fa-solid fa-ellipsis-vertical py-4 px-2"></i>
                </div> */}
            </div>
            <section className="mb-6">
                <h3 className="font-bold text-2xl">Menu</h3>
                <ul className="text-slate-400 leading-10 pl-4"> 
                    <li><i class="fa-solid fa-house mr-2"></i>Home</li>
                    <li><i class="fa-regular fa-star mr-2"></i>India spotlight</li>
                    <li><i class="fa-solid fa-list mr-2"></i>Genres</li>
                    <li><i class="fa-solid fa-ranking-star mr-2"></i>Top rated</li>
                    <li><i class="fa-solid fa-clapperboard mr-2"></i>Upcoming</li>
                </ul>
            </section>
            <section>
                <h3 className="font-bold text-2xl">General</h3>
                <ul className="text-slate-400 leading-10 pl-4">
                    <li><i class="fa-solid fa-gear mr-2"></i>Settings</li>
                    <li><i class="fa-solid fa-arrow-right-from-bracket mr-2"></i>Log out</li>
                </ul>
            </section>
        </div>
    )
}

export default Sidebar