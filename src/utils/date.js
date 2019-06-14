const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default class XDate {
  constructor(date) {
    if (date) {
      if (date instanceof XDate) {
        this._date = new Date(date._date);
      } else {
        this._date = new Date(date);
      }
    } else {
      this._date = new Date();
    }
  }

  get month() {
    return this._date.getMonth();
  }

  get weekday() {
    return this._date.getDay();
  }

  get date() {
    return this._date.getDate();
  }

  get monthFirstDate() {
    return new Date(this._date.getFullYear(), this._date.getMonth(), 1);
  }

  get monthLastDate() {
    return new Date(this._date.getFullYear(), this._date.getMonth() + 1, 0);
  }

  get daysInMonth() {
    return new Date(this._date.getFullYear(), this._date.getMonth() + 1, 0).getDate();
  }

  isToday(date) {
    const today = + new Date(this._date.getFullYear(), this._date.getMonth() + 1, this._date.getDate());

    if (date instanceof XDate) {
      date = new Date(date._date);
    } else {
      date = new Date(date);
    }

    const next = + new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());

    return today === next;
  }

  format(format) {
    const year = this._date.getFullYear();
    let month = '' + (this._date.getMonth() + 1);
    let day = '' + this._date.getDate();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    if (format === 'YYYY-MM') return [year, month].join('-');
    if (format === 'MMMM YYYY') return [months[this._date.getMonth()], year].join(', ');

    return [year, month, day].join('-');
  }

  addDays(days) {
    this._date.setDate(this._date.getDate() + days);
    return this;
  }

  addMonths(xmonths) {
    this._date.setMonth(this._date.getMonth() + xmonths);
    return this;
  }
}

export {
  XDate,
  months,
  weekdays
}
