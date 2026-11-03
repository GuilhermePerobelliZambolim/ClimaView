import { useState } from "react";

function Header() {
  const [cidade, setCidade] = useState("");
  const [cidadePesquisada, setCidadePesquisada] = useState("");


  function buscarCidade() {
    if(!cidade.trim()) {
      alert("Digite uma cidade!");
      return;
    } else {
      console.log(cidade)
      setCidadePesquisada(cidade.trim());
    }


  }
  
  return (
    <div className="max-w-[1000px] p-[20px] m-auto text-center">
      <h1 className="text-[3rem] font-bold m-[21px] text-white">ClimaView 🌤️</h1>

      <div className="flex justify-center mt-[30px]">
        <input
          className="w-[300px] text-sm bg-[#e6f5fa] text-[#183448] placeholder-[#668494] p-2 rounded-l-[50px] outline-none focus:ring-2 focus:ring-[#76c8eb]"
          type="text"
          placeholder="Busque por uma cidade..."
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              buscarCidade();
            }
          }}
        />
        
        <button className="w-[65px] bg-[#f09b1b] hover:bg-[#000000] hover:text-[#f09b1b] transition-colors p-2 rounded-r-[50px] cursor-pointer text-white" onClick={buscarCidade}>
          Buscar 
        </button>
        {cidadePesquisada && (<p>Voce pesquisou: {cidadePesquisada}</p>)}
      </div>
    </div>
  );
}

export default Header;

