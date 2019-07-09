/**
 * @property {Number} _commentsCount
 */
import Component from "./component";

export default class FilmCardAbstract extends Component {
  constructor(data) {
    super(data);

    this._commentsCount = data.comments.length;

    this._onCommentsButtonClickBinded = this._onCommentsButtonClick.bind(this);
  }

  set commentsButtonClickFunc(fn) {
    this._onCommentsButtonClickFunc = fn;
  }

  get _template() {}

  _getFormattedDuration() {
    return `${Math.floor(this._duration / 60)}h ${this._duration % 60}m`;
  }

  updateCommentsCount(newCommentsCount) {
    this._commentsCount = newCommentsCount;
    this._element.querySelector(`.film-card__comments`).textContent = `${this._commentsCount} comments`;
  }

  _onCommentsButtonClick() {
    return typeof this._onCommentsButtonClickFunc === `function` && this._onCommentsButtonClickFunc();
  }

  _bindListeners() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onCommentsButtonClickBinded);
  }

  _unbindListeners() {
    this._element.querySelector(`.film-card__comments`).removeEventListener(`click`, this._onCommentsButtonClickBinded);
  }
}
