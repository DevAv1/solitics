import "./style.scss";
import { useCharacters } from "./hooks/useCharacters";
import { CardBox } from "../../components/CardBox";
import { SearchTool } from "../../components/SearchTool";
import { useSearchTool } from "../../components/SearchTool/hooks/useSearchTool";
import { fetchCharactersByQuery } from "../../redux/characters/charactersActions";
import { Button, CardActions, Typography } from "@mui/material";
import { BasicModal } from "../../components/BasicModal";
import { useCharactersScroll } from "./hooks/useCharactersScroll";
import { ExtraCharactersFilters } from "./ExtraCharactersFilters";

export const Characters = () => {
  const {
    allCharacters,
    onResetQuery,
    currentCharacter,
    setCurrentCharacter,
    showModal,
    setShowModal,
    filteredData,
    setFilteredData,
  } = useCharacters();
  const { query, setQuery } = useSearchTool(
    fetchCharactersByQuery,
    onResetQuery
  );

  const { lastCharacterRef } = useCharactersScroll(query);

  return (
    <div className="characters">
      <div className="filters">
        <SearchTool query={query} onQueryChange={(value) => setQuery(value)} />
        <ExtraCharactersFilters
          onApplyFilter={(filtered) => setFilteredData(filtered)}
          data={allCharacters}
        />
      </div>
      <div className="characters-container">
        {(filteredData || allCharacters).map((character, index) => {
          const { id, age, name, sex } = character;
          return (
            <div
              key={id}
              ref={index === allCharacters.length - 1 ? lastCharacterRef : null}
              className="card-box-wrapper"
            >
              <CardBox key={id}>
                <div className="card-box-content">
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    style={{ color: "#ED6C02", fontWeight: "bolder" }}
                  >
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    {`${age} y/o`}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    gender: {sex}
                  </Typography>
                </div>
                <CardActions>
                  <Button
                    size="small"
                    color="warning"
                    onClick={() => {
                      setCurrentCharacter(character);
                      setShowModal(true);
                    }}
                  >
                    more info
                  </Button>
                </CardActions>
              </CardBox>
            </div>
          );
        })}
      </div>
      <BasicModal isShow={showModal} onClose={() => setShowModal(false)}>
        <Typography id="modal-title" variant="h6" component="h2">
          Character Information
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          <Typography gutterBottom variant="h7" component="div">
            Occupation: {currentCharacter.occupation || "N/A"}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Hair color: {currentCharacter.hair_color || "N/A"}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Grade: {currentCharacter.grade || "N/A"}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Religion: {currentCharacter.religion || "N/A"}
          </Typography>
        </Typography>
      </BasicModal>
    </div>
  );
};
