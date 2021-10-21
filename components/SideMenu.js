import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from "@heroicons/react/outline"

function SideMenu() {


    return (
        <div className="fixed h-1/5 w-1/5 bg-blue-500 top-14">
            <ul className="menu-list flex flex-col text-lg font-bold text-center">
                <div className="relative navBtn">
                    <PaperAirplaneIcon className="mobileBtn rotate-45" />
                    <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                </div>
                <PlusCircleIcon className="mobileBtn" />
                <UserGroupIcon className="mobileBtn" />
                <HeartIcon className="mobileBtn" />



            </ul>
        </div>
    )
}

export default SideMenu
