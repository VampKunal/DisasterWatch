import IndiaMap from "@/components/IndiaMap"

export default function Home() {
  const recentDisasters = [
    { id: 1, name: "Cyclone Tauktae", location: "Gujarat", date: "2023-11-15", type: "Cyclone" },
    { id: 2, name: "Assam Floods", location: "Assam", date: "2023-11-10", type: "Flood" },
    { id: 3, name: "Uttarakhand Landslide", location: "Uttarakhand", date: "2023-11-05", type: "Landslide" },
    { id: 4, name: "Maharashtra Drought", location: "Maharashtra", date: "2023-10-30", type: "Drought" },
  ]

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-center text-orange-600">Disaster Monitoring Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Disaster Map</h2>
          <IndiaMap />
        </div>
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Recent Disasters</h2>
          <ul className="space-y-4">
            {recentDisasters.map((disaster) => (
              <li key={disaster.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg">{disaster.name}</h3>
                <p className="text-green-700">{disaster.location}</p>
                <p className="text-sm text-gray-500">{disaster.date}</p>
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full mt-2">
                  {disaster.type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

