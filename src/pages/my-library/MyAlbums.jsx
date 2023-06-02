import { useDispatch, useSelector } from "react-redux";
import MusicCard from "../../components/cards/MusicCard";
import { clearFromStorage } from "../../features/storageSlice";
import EmptyList from "../../utils/EmptyList";

const MyAlbums = () => {
  const { albums } = useSelector((store) => store.storage);
  const dispatch = useDispatch();
  return (
    <section>
      <div className="flex items-center justify-between mb-3 sm:mb-0">
        <h3 className="py-3 md:py-6 px-8 sm:text-2xl font-semibold">
          My Albums
        </h3>
        {albums.length > 0 && (
          <button
            className="py-1 md:py-2 my-2 mx-6 px-4 rounded-2xl bg-red-400 text-white hover:scale-105 duration-300"
            onClick={() => {
              dispatch(clearFromStorage("albums"));
            }}
          >
            Clear Albums
          </button>
        )}
      </div>
      {!albums.length ? <EmptyList /> : <MusicCard data={albums} />}
    </section>
  );
};
export default MyAlbums;
