import { useEffect, useState } from "react";
import InputDiv from "./Form/InputDiv";

const FormDiv = ({ setFormShow, formShow, refreshData }) => {
  const [editMovie, setEditMovie] = useState({});

  useEffect(() => {
    (function showModal() {
      if (formShow.deleteId === null) {
        document.getElementById("dialogEl").showModal();

        async function fetchEditUser(movieId) {
          try {
            const response = await fetch(
              `https://mimic-server-api.vercel.app/movies/${movieId}`,
            );
            if (!response.ok) throw new Error("Failed to get movie");
            const data = await response.json();
            setEditMovie(data);
          } catch (error) {
            console.error("API fetch error :", error);
          }
        }

        if (formShow.editId !== null) {
          fetchEditUser(formShow.editId);
        }
      }
    })();
  }, [formShow]);

  async function handleSubmit(e) {
    e.preventDefault();

    const { movieTitle, movieRating, moviePopularity, movieOverview, moviePoster } =
      e.target;

    const newMovieData = {
      title: movieTitle.value,
      rating: Number(movieRating.value),
      popularity: Number(moviePopularity.value),
      overview: movieOverview.value,
      poster: moviePoster.value.trim() ||
        "https://www.designer-daily.com/wp-content/uploads/2012/12/lord-war-creative-movie-posters.jpg",
    };

    async function postNewMovie() {
      try {
        const response = await fetch(
          "https://mimic-server-api.vercel.app/movies",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              adult: false,
              genre_ids: [28, 80, 53],
              original_language: "ta",
              original_title: newMovieData.title,
              overview: newMovieData.overview,
              popularity: newMovieData.popularity,
              poster_path: newMovieData.poster, 
              release_date: "2025-01-24",
              title: newMovieData.title,
              video: false,
              vote_average: newMovieData.rating,
              vote_count: 1,
            }),
          },
        );
        if (!response.ok) throw new Error("Failed to post movie");
        alert("Movie added successfully!");
      } catch (error) {
        console.error("Error in posting movie:", error);
        alert("Something went wrong.");
      }
    }

    async function editMovie(movieId) {
      try {
        const response = await fetch(
          `https://mimic-server-api.vercel.app/movies/${movieId}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              original_title: newMovieData.title,
              overview: newMovieData.overview,
              popularity: newMovieData.popularity,
              poster_path: newMovieData.poster,
              title: newMovieData.title,
              vote_average: newMovieData.rating,
            }),
          },
        );
        if (!response.ok) throw new Error("Failed to patch movie");
        alert("Movie updated successfully!");
      } catch (error) {
        console.error("API PATCH error", error);
        alert("Something went wrong in PATCH API");
      }
    }

    // ✅ Fixed: properly await API calls before refreshing
    if (formShow.action === true && formShow.editId === null && formShow.deleteId === null) {
      await postNewMovie();
    } else if (formShow.action === true && formShow.editId !== null && formShow.deleteId === null) {
      await editMovie(formShow.editId);
    }

    setFormShow({ action: false, editId: null, deleteId: null }); // no pointless await
    refreshData();
  }

  return (
    <dialog
      id="dialogEl"
      className="m-auto pb-3 justify-self-center text-black mt-[10vh] rounded-2xl bg-slate-50 z-20 w-xl absolute float-end">
      {/* close btn */}
      <button
        type="button"
        className="absolute top-3 right-4 hover:text-orange-600 cursor-pointer outline-none"
        onClick={() => setFormShow(false)}
        title="close">
        X
      </button>
      <form className="w-full space-y-3 h-full p-5" onSubmit={handleSubmit}>
        {/* head */}
        <div className="mb-5">
          <h2 className="text-xl text-orange-600 text-center font-semibold" id="dialog-title">
            {formShow.editId === null ? "Add Movie" : "Edit Movie"}
          </h2>
        </div>

        <InputDiv
          label={"Movie Name"}
          inputId={"movieTitle"}
          movieValue={editMovie.original_title || ""}
        />
        <InputDiv
          label={"Movie Rating"}
          inputId={"movieRating"}
          inputType="number"
          movieValue={editMovie.vote_average}
        />
        <InputDiv
          label={"Movie Popularity"}
          inputId={"moviePopularity"}
          inputType="number"
          movieValue={editMovie.popularity}
        />

        <InputDiv
          label={"Poster Image URL"}
          inputId={"moviePoster"}
          inputType="url"
          movieValue={editMovie.poster_path || ""}
          required={false}
        />

        <div className="flex flex-col space-y-1">
          <label htmlFor="movieOverview">Movie Overview</label>
          <textarea
            id="movieOverview"
            name="movieOverview"
            className="px-3 py-1 bg-gray-200 rounded-lg focus:outline-2 outline-orange-300"
            placeholder="Movie Overview"
            rows={6}
            defaultValue={editMovie.overview || ""}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white px-3 py-1 text-center hover:bg-orange-700 active:bg-amber-800 rounded-lg mt-4">
          Submit
        </button>
      </form>
    </dialog>
  );
};

export default FormDiv;
