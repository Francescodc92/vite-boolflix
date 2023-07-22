import { reactive } from "vue";

export const store = reactive({
  moviesArray:[],
  seriesArray:[],
  actorsArray:[],
  genresMovieArray:[],
  genresSeriesArray:[],
  modalIsOpen:false,
  currentSelectedGenre:0,
  requestKey: "522be97e0f709c65d65a20a4f7b9ebc4",
  requestUserInput:"",
})