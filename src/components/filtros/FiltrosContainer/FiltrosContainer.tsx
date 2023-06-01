interface FiltrosProps {
  selectedRange: string;
  handleRangeChange: any;
  modalidad: string;
  handleModalidadChange: any;
  experiencia: string;
  handleExperienciaChange: any;
}

const FiltrosContainer: React.FC<FiltrosProps> = ({
  selectedRange,
  handleRangeChange,
  modalidad,
  handleModalidadChange,
  experiencia,
  handleExperienciaChange
}) => {
  return (
    <div className="flex flex-wrap">
      {/* FILTROS OFICIALES */}
      {/* Rango de Sueldo */}
      <div className="relative inline-flex mr-2 mb-2">
        <select
          value={selectedRange}
          name="select"
          className="block w-40 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onChange={handleRangeChange}
        >
          <option value="all">Rango de Salario</option>
          <option value="30000-40000">$30,000 - $40,000</option>
          <option value="40000-50000">$40,000 - $50,000</option>
          <option value="50000-60000">$50,000 - $60,000</option>
        </select>
      </div>
      {/* Modalidad */}
      <div className="relative inline-flex mr-2 mb-2">
        <select
          value={modalidad}
          name="select"
          className="block w-40 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onChange={handleModalidadChange}
        >
          <option value="all">Modalidad</option>
          <option value="presencial">Presencial</option>
          <option value="remoto">Remoto</option>
          <option value="hibrido">Hibrido</option>
        </select>
      </div>
      {/* Experiencia*/}
      <div className="relative inline-flex mr-2 mb-2">
        <select
          value={experiencia}
          name="select"
          className="block w-40 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onChange={handleExperienciaChange}
        >
          <option value="all">Nivel de Experiencia</option>
          <option value="junior">Junior</option>
          <option value="semisenior">SemiSenior</option>
          <option value="senior">Senior</option>
        </select>
      </div>
      {/* FILTROS DESCONTINUADOS */}
      {/* Todas las categorias */}
      {/* <div className="relative inline-flex mr-2 mb-2">
        <div>
          <button
            type="button"
            className="inline-flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-gray-500 hover:text-white transition-colors duration-150 bg-gray-300 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700"
          >
            Todas las categorías
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M6 8l4 4 4-4H6z" />
            </svg>
          </button>
        </div>
        <div className="absolute right-0 z-10 hidden w-40 mt-2 origin-top-right rounded-md shadow-lg">
          <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Diseño
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Desarrollo Frontend
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Desarrollo Backend
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Gestión de Proyectos
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Pruebas de Software
            </a>
          </div>
        </div>
      </div> */}
      {/* Paises */}
      {/* <div className="relative inline-flex mr-2 mb-2">
        <div>
          <button
            type="button"
            className="inline-flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-gray-500 hover:text-white transition-colors duration-150 bg-gray-300 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700"
          >
            Todos los países
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M6 8l4 4 4-4H6z" />
            </svg>
          </button>
        </div>
        <div className="absolute right-0 z-10 hidden w-40 mt-2 origin-top-right rounded-md shadow-lg">
          <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Estados Unidos
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Canadá
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Reino Unido
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Alemania
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Australia
            </a>
          </div>
        </div>
      </div> */}
      {/* Modalidad */}
      {/* <div className="relative inline-flex mr-2 mb-2">
        <div>
          <button
            type="button"
            className="inline-flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-gray-500 hover:text-white transition-colors duration-150 bg-gray-300 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700"
          >
            Modalidad
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M6 8l4 4 4-4H6z" />
            </svg>
          </button>
        </div>
        <div className="absolute right-0 z-10 hidden w-40 mt-2 origin-top-right rounded-md shadow-lg">
          <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Tiempo completo
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Medio tiempo
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Contrato por proyecto
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Freelance
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Prácticas
            </a>
          </div>
        </div>
      </div> */}
      {/* Rango de Sueldo */}
      {/* <div className="relative inline-flex mr-2 mb-2">
        <div>
          <button
            type="button"
            className="inline-flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-gray-500 hover:text-white transition-colors duration-150 bg-gray-300 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700"
          >
            Rango de sueldo
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M6 8l4 4 4-4H6z" />
            </svg>
          </button>
        </div>
        <div className="absolute right-0 z-10 hidden w-40 mt-2 origin-top-right rounded-md shadow-lg">
          <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              $30,000 - $40,000
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              $40,000 - $50,000
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              $50,000 - $60,000
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              $60,000 - $70,000
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              $70,000+
            </a>
          </div>
        </div>
      </div> */}
      {/* Seniority */}
      {/* <div className="relative inline-flex mr-2 mb-2">
        <div>
          <button
            type="button"
            className="inline-flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-gray-500 hover:text-white transition-colors duration-150 bg-gray-300 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700"
          >
            Seniority
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M6 8l4 4 4-4H6z" />
            </svg>
          </button>
        </div>
        <div className="absolute right-0 z-10 hidden w-40 mt-2 origin-top-right rounded-md shadow-lg">
          <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Junior
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Mid-level
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Senior
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Lead
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white"
            >
              Manager
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FiltrosContainer;
