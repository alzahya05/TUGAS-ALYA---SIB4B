export default function navbar() {
    return(
    <div className="h-screen flex flex-col justify-center">
        <div className="bg-white h-screen w-60">

        <div className="flex items-center gap-4 p-2">
         <img src="Dashboard.svg" className="w-6 h-6"/>
        <button className="text-black">Dashboard</button>
        </div>
       
        
        <div className="flex items-center gap-4 p-2">
         <img src="Messages.svg" className="w-6 h-6"/>
        <button className="text-black">Messages</button>
        </div>

        <div className="flex items-center gap-4 p-2">
         <img src="Tasks.svg" className="w-6 h-6"/>
        <button className="text-black">Tasks</button>
        </div>

        <div className="flex items-center gap-4 p-2">
         <img src="Notes.svg" className="w-6 h-6"/>
        <button className="text-black">Notes</button>
        </div>

        <div className="flex items-center gap-4 p-2">
         <img src="Emails.svg" className="w-6 h-6"/>
        <button className="text-black">Emails</button>
        </div>

        <div className="flex items-center gap-4 p-2">
         <img src="Reports.svg" className="w-6 h-6"/>
        <button className="text-black">Reports</button>
        </div>

        <div className="flex items-center gap-4 p-2">
         <img src="Automations.svg" className="w-6 h-6"/>
        <button className="text-black">Automation</button>
        </div>
        
        <div className="flex items-center gap-4 p-2">
         <img src="Workflows.svg" className="w-6 h-6"/>
        <button className="text-black">Workflows</button>
        </div>

        <div className="flex items-center gap-4 p-2">
         <img src="Favorites.svg" className="w-6 h-6"/>
        <button className="text-black">Favorites</button>
        </div>
       

        <div className="flex items-center gap-4 p-2">
         <img src="Key Accounts.svg" className="w-6 h-6"/>
        <button className="text-black">Key Accounts</button>
        </div>
       
        <div className="flex items-center gap-4 p-2">
         <img src="Strategic Initiatives.svg" className="w-6 h-6"/>
        <button className="text-black">Strategic Initiatives</button>
        </div>

        <div className="flex items-center gap-4 p-2">
         <img src="Focus Areas.svg" className="w-6 h-6"/>
        <button className="text-black">focus Areas</button>
        </div>

         <div className="flex items-center gap-4 p-2">
         <img src="Starred items.svg" className="w-6 h-6"/>
        <button className="text-black">Starred items</button>
        </div>

        </div>
        </div>

        );
    }