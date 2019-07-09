import FilmCardAbstract from "./film-card-abstract";
import moment from "moment";

export default class FilmCardMain extends FilmCardAbstract {
  constructor(data) {
    super(data);
  }

  get _template() {
    return `
         <article class="film-card">
          <h3 class="film-card__title">${this._title}</h3>
          <p class="film-card__rating">${this._rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${moment(this._releaseDate).format(`YYYY`)}</span>
              <span class="film-card__duration">${this._getFormattedDuration()}</span>
              <span class="film-card__genre">${this._genres[0]}</span>
          </p>
          <img src="${this._poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${this._description}</p>
          <button class="film-card__comments">${this._commentsCount} comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`.trim();
  }
}
