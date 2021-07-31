// PROVA DE CONCEITO DA BIBLIOTECA REACT-EXPORT-EXCEL
// ALUNO: GIOVANE FRÉU

// SERÁ EXPORTADO PARA UMA PLANILHA DO EXCEL OS DADOS DE UM ARRAY DE OBJETOS

// IMPORTAÇÃO DA BIBLIOTECA
import ReactExport from "react-export-excel";


export default function App() {
  
  // DEFINIÇÃO DAS CONSTANTES DO REACT EXPORT  
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  
  // PARA FINS DE DEMONSTRAÇÃO SERÁ DEFINIDO MANUALMENTE O ARRAY, MAS PODE VIR DE UM BANCO DE DADOS.
  const ARRAY_FORNECEDORES = [
    { id: 1, razaoSocial: "Fornecedor 1", cnpj: 111111, endereco: "Rua 1" },
    { id: 2, razaoSocial: "Fornecedor 2", cnpj: 222222, endereco: "Rua 2" },
    { id: 3, razaoSocial: "Fornecedor 3", cnpj: 333333, endereco: "Rua 3" },
    { id: 4, razaoSocial: "Fornecedor 4", cnpj: 444444, endereco: "Rua 4" },
    { id: 5, razaoSocial: "Fornecedor 5", cnpj: 555555, endereco: "Rua 5" },
    { id: 6, razaoSocial: "Fornecedor 6", cnpj: 666666, endereco: "Rua 6" },
  ];

  return (
    <>
      <h1 className="text-center bg-blue-500 font-bold text-4xl p-6">
        Prova de Conceito - Biblioteca REACT-EXPORT-EXCEL
      </h1>
      <h2 className="text-center bg-blue-400 font-semibold text-2xl p-4">
        Aluno: Giovane Fréu
      </h2>
      <div className="container p-6">
        <h6 className="font-semibold text-xl m-4">Lista de Fornecedores:</h6>
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-400 border-b">
              <th>Código:</th>
              <th>Razão Social:</th>
              <th>Cnpj:</th>
              <th>Endereço:</th>
            </tr>
          </thead>
          <tbody>
            {ARRAY_FORNECEDORES.map(({ id, razaoSocial, cnpj, endereco }) => {
              return (
                <tr className="bg-gray-50 border-b text-center" key={id}>
                  <td className="p-2 border-r">{id}</td>
                  <td className="p-2 border-r">{razaoSocial}</td>
                  <td className="p-2 border-r">{cnpj}</td>
                  <td className="p-2 border-r">{endereco}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ExcelFile
        element={
          <button className="m-4 bg-green-500 rounded-xl p-4 font-semibold">
            Exportar para Excel
          </button>
        }
      >
        <ExcelSheet data={ARRAY_FORNECEDORES} name="Fornecedores">
          <ExcelColumn label="Códgio" value="id"></ExcelColumn>
          <ExcelColumn label="Razão Social" value="razaoSocial"></ExcelColumn>
          <ExcelColumn label="Cnpj" value="cnpj"></ExcelColumn>
          <ExcelColumn label="Endereço" value="endereco"></ExcelColumn>
        </ExcelSheet>
      </ExcelFile>
    </>
  );
}
