// home , india spotlight, genres, top rated, upcoming, settings, logout
import profile from "./assets/profile.png"

function Sidebar(){
    return (
        <div className="w-fit h-screen rounded-xl mx-4 my-8 px-8 py-8 bg-slate-800 mr-6">
            <div className="flex items-center gap-5 border border-slate-500 shadow-lg shadow-amber-100 px-4 py-2 rounded-lg justify-around mb-6 text-2xl">
                <i class="fa-solid fa-film text-amber-400"></i>
                <p className="">CineSpot</p>
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