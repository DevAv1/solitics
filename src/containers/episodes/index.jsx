import { Suspense } from "react";
import "./style.scss";
import { Button, CardActions, Typography } from "@mui/material";
import { CardBox } from "../../components/CardBox";
import { SearchTool } from "../../components/SearchTool";
import { useSearchTool } from "../../components/SearchTool/hooks/useSearchTool";
import { fetchEpisodesByQuery } from "../../redux/episodes/episodesActions";
import { useEpisodes } from "./hooks/useEpisodes";
import { BasicModal } from "../../components/BasicModal";
import { BasicSkeleton } from "../../components/BasicSkeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEpisodesScroll } from "./hooks/useEpisodesScroll";
import { ExtraEpisodesFilters } from "./ExtraEpisodesFilters";

export const Episodes = () => {
  const {
    allEpisodes,
    onResetQuery,
    cleanImageUrl,
    currentEpisode,
    setCurrentEpisode,
    setShowModal,
    showModal,
    filteredData,
    setFilteredData,
  } = useEpisodes();
  const { query, setQuery } = useSearchTool(fetchEpisodesByQuery, onResetQuery);

  const { lastEpisodeRef } = useEpisodesScroll(query);

  return (
    <div className="episodes">
      <div className="filters">
        <SearchTool query={query} onQueryChange={(value) => setQuery(value)} />
        <ExtraEpisodesFilters
          data={allEpisodes}
          onApplyFilter={(filtered) => setFilteredData(filtered)}
        />
      </div>
      <div className="episodes-container">
        {(filteredData || allEpisodes).map((episodeItem, index) => {
          const { name, episode, season, id, thumbnail_url } = episodeItem;
          const imageURLformatted = cleanImageUrl(thumbnail_url);
          return (
            <div
              key={id}
              ref={index === allEpisodes.length - 1 ? lastEpisodeRef : null}
              className="card-box-wrapper"
            >
              <CardBox>
                <div className="card-box-content">
                  <Suspense fallback={<BasicSkeleton />}>
                    <LazyLoadImage
                      className="image-thumbnail"
                      src={imageURLformatted}
                      effect="blur"
                      placeholderSrc={imageURLformatted}
                      width="100%"
                      height="120px"
                      style={{ objectFit: "cover" }}
                    />
                  </Suspense>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    style={{ color: "#ED6C02", fontWeight: "bolder" }}
                  >
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    SE:{season} | EP:{episode}
                  </Typography>
                </div>
                <CardActions>
                  <Button
                    size="small"
                    color="warning"
                    onClick={() => {
                      setShowModal(true);
                      setCurrentEpisode(episodeItem);
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
          Episode Information
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          <Typography gutterBottom variant="h7" component="div">
            Air Date: {currentEpisode.air_date || "N/A"}
          </Typography>
          <Typography gutterBottom variant="b1" component="div">
            Description: {currentEpisode.description || "N/A"}
          </Typography>
        </Typography>
      </BasicModal>
    </div>
  );
};
