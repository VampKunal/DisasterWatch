export default function ForecastAI() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">
        ForecastAI: Predictive Disaster Intelligence
      </h1>
      <div className="space-y-6">
        <p>
          ForecastAI is our cutting-edge artificial intelligence system designed to predict potential disasters before
          they occur. By analyzing vast amounts of data from various sources, ForecastAI provides early warnings and
          risk assessments to help communities prepare and mitigate the impact of natural disasters.
        </p>
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Current Predictions</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Cyclone risk in Bay of Bengal</span>
              <span className="text-yellow-600 font-semibold">Moderate</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Flood potential in Ganges basin</span>
              <span className="text-red-600 font-semibold">High</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Drought conditions in Maharashtra</span>
              <span className="text-orange-600 font-semibold">Elevated</span>
            </li>
          </ul>
        </div>
        <p>
          Please note that these predictions are based on current data and models. Always stay tuned to official weather
          and disaster management channels for the most up-to-date information.
        </p>
      </div>
    </div>
  )
}

