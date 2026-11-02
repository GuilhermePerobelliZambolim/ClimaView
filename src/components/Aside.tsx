type AsideProps = {
  icone: string;
  temp: string;
  clima: string;
  data: string;
};

const Aside = ({ temp, clima, data, icone }: AsideProps) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      <div className="flex-1 rounded-xl bg-[#edf9fc] border border-[#c6e8f0] p-3 shadow-sm">
        <p className="text-[10.5px] font-medium text-[#426477]">{data}</p>

        <p className="text-2xl mt-2">{icone}</p>

        <p className="text-xs text-[#426477] mt-2">{clima}</p>

        <p className="text-xs font-bold text-[#183448] mt-1">{temp}</p>
      </div>
    </div>
  );
};

export default Aside;
