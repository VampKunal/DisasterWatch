export default function CommunityAlert() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">
        CommunityAlert: Crowdsourced Disaster Reporting
      </h1>
      <div className="space-y-6">
        <p>
          CommunityAlert is our platform for crowdsourcing real-time disaster information. By harnessing the power of
          community reporting, we can quickly identify and respond to emerging threats and ongoing disasters.
        </p>
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Community Reports</h2>
          <ul className="space-y-4">
            <li className="border-b pb-2">
              <p className="font-semibold">Flash Flood in Shimla</p>
              <p className="text-sm text-gray-600">Reported by: Amit S. | 2 hours ago</p>
              <p>Heavy rainfall causing flash floods in lower areas of Shimla. Roads blocked.</p>
            </li>
            <li className="border-b pb-2">
              <p className="font-semibold">Landslide on Mumbai-Pune Expressway</p>
              <p className="text-sm text-gray-600">Reported by: Priya M. | 5 hours ago</p>
              <p>Small landslide observed near Khandala. Traffic moving slowly.</p>
            </li>
            <li>
              <p className="font-semibold">Heatwave in Delhi</p>
              <p className="text-sm text-gray-600">Reported by: Rahul K. | 1 day ago</p>
              <p>Temperatures exceeding 45°C in parts of Delhi. Elderly and children at risk.</p>
            </li>
          </ul>
        </div>
        <p>
          To report a disaster or emergency situation in your area, please use our mobile app or call our 24/7 hotline.
          Your reports help us respond faster and more effectively to disasters.
        </p>
      </div>
    </div>
  )
}

