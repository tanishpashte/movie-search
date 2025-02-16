import profile from "./assets/profile.png" 
function Profile(){
    return (
        <div className="mt-8 pr-4 bg-slate-800 flex justify-between items-center rounded-full">
            <img src={profile} alt="Profile photo" className="rounded-full h-12 w-12 bg-slate-900 mr-4"/>
            <p className="">Tanish Pashte</p>
        </div>
    )
}

export default Profile