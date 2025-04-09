const Stats = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="grid grid-cols-3 grid-rows-2 gap-5 w-full h-full p-20 text-center">
      <div className="shadow-2xl col-start-1 row-span-2 rounded-s-xl" dir="ltr">
        <div className="w-full h-full bg-white rounded-s-xl p-5 flex flex-col justify-around gap-5">
          <h3 className="text-base font-medium">Nouveaux abonnés</h3>
          <h3 className="text-base font-medium">Impression du profil</h3>
          <h3 className="text-base font-medium">Visites du profil</h3>
        </div>
      </div>
      <div className="shadow-2xl col-start-2 row-start-1 row-span-1">
        <div className="w-full h-full bg-white p-5 flex flex-col justify-center">
          <h3 className="text-base font-medium">Meilleur publication</h3>
        </div>
      </div>
      <div className="shadow-2xl col-start-2 row-start-2 row-span-1">
        <div className="w-full h-full bg-white p-5 flex flex-col justify-center">
          <h3 className="text-base font-medium">Meilleur publication</h3>
        </div>
      </div>
      <div className="shadow-2xl col-start-3 row-span-2 rounded-s-xl" dir="rtl">
        <div className="w-full h-full bg-white rounded-s-xl p-5 flex flex-col justify-around gap-5">
          <h3 className="text-base font-medium">Nombre de publications</h3>
          <h3 className="text-base font-medium">
            Impressions des publications
          </h3>
          <h3 className="text-base font-medium">
            Intercations avec les publications
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export default Stats;
