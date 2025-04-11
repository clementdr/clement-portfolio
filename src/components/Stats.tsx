const Stats = () => (
  <div className="h-screen py-24 flex flex-col justify-center align-content-center gap-20">
    <div className="text-center">
      <h2 className="text-4xl font-semibold tracking-tight">
        Statistiques Instagram Pralognan-la-Vanoise
      </h2>
      <p className="mt-2 text-base text-gray-600">
        Découvrez les statistiques sur les périodes du{" "}
        <span className="text-red-800 font-medium">
          01/08/2023 au 01/04/2024
        </span>{" "}
        et du <span className="font-medium">01/08/2024 au 01/04/2025</span>.
      </p>
    </div>
    <dl className="flex text-center justify-around ">
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold ">995 914 impressions</h3>
        <h4 className="text-base/7 text-red-800">+45% from 683 191</h4>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold">310 publications</h3>
        <h4 className="text-base/7 text-red-800">+47,8% from 209</h4>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold"> 57 508 interactions</h3>
        <h4 className="text-base/7 text-red-800">+126% 25 418</h4>
      </div>
    </dl>
  </div>
);

export default Stats;
