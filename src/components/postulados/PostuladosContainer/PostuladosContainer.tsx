import { getCollections } from "../../../service/firebase";
import { useAsync } from "../../../hooks/useAsync";
import PostuladosList from "../PostuladosList/PostuladosList";
import FiltrosContainer from "../../filtros/FiltrosContainer/FiltrosContainer";
import { useEffect, useState } from "react";

const PostuladosContainer = () => {
  const getProductsFromFirestore = () => getCollections("postulados");
  const [selectedRange, setSelectedRange] = useState<string>("all");
  const [modalidad, setModalidad] = useState<string>("all");
  const [experiencia, setExperiencia] = useState<string>("all");
  const {
    data: items,
    error,
    isLoading,
  } = useAsync(getProductsFromFirestore, []);

  const handleRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(event.target.value);
  };

  const handleModalidadChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setModalidad(event.target.value);
  };
  const handleExperienciaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setExperiencia(event.target.value);
  };

  const isValid = items !== undefined ? items.length : items;
  if (error) {
    return <h1>Not WORKING!!!</h1>;
  }
  return (
    <div>
      {isLoading ? (
        isValid ? (
          <>
            <FiltrosContainer
              selectedRange={selectedRange}
              handleRangeChange={handleRangeChange}
              modalidad={modalidad}
              handleModalidadChange={handleModalidadChange}
              experiencia={experiencia}
              handleExperienciaChange={handleExperienciaChange}
            />
            <PostuladosList
              items={items}
              selectedRange={selectedRange}
              modalidad={modalidad}
              experiencia={experiencia}
            />
          </>
        ) : (
          <h1>Not WORKING!!!</h1>
        )
      ) : (
        <h1>Cargando!!!</h1>
      )}
    </div>
  );
};

export default PostuladosContainer;
