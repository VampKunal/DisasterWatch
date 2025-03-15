export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">About DisasterWatch</h1>
      <div className="space-y-4">
        <p>
          DisasterWatch is a comprehensive platform dedicated to monitoring, predicting, and responding to natural
          disasters. Our mission is to provide timely information and resources to help communities prepare for and
          recover from catastrophic events.
        </p>
        <p>
          Founded in 2023, DisasterWatch combines cutting-edge technology with community-driven insights to create a
          robust early warning system and disaster response network. We work closely with meteorologists, geologists,
          and disaster management experts to ensure the accuracy and reliability of our information.
        </p>
        <p>Our key features include:</p>
        <ul className="list-disc pl-6">
          <li>Real-time disaster monitoring and mapping</li>
          <li>ForecastAI: Advanced predictive modeling for potential disasters</li>
          <li>CommunityAlert: Crowdsourced disaster reporting and verification</li>
          <li>Resources for disaster preparedness and recovery</li>
          <li>Collaboration with local and national disaster management authorities</li>
        </ul>
        <p>
          At DisasterWatch, we believe that informed communities are resilient communities. Join us in our effort to
          mitigate the impact of natural disasters and build a safer future for all.
        </p>
      </div>
    </div>
  )
}

