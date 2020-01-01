import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class headerLearn extends React.Component {

  nth = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  formatDate = (date) => {
    var fortnightAway = new Date(date),
      dateFormat = fortnightAway.getDate(),
      monthFormat = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"][fortnightAway.getMonth()];
    return (dateFormat + this.nth(dateFormat) + " " + monthFormat + ", " + fortnightAway.getFullYear());
  }

  idLearn = (event) => {
    event.preventDefault();
    this.props.getIdLearn(this.props.id);
  }

  render() {
    const { title, date } = this.props;
    return (
      <div>
        <div className="head-post-content">
          <div className="head-post-name-user"><Link onClick={e => this.idLearn(e)} to="/">{title}</Link></div>
          <div className="head-post-story-subtitle d-flex align-items-center">
            <div className="date  d-flex justify-content-center"><span className="icon-calendar date-content" /><span>{this.formatDate(date)}</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default headerLearn;
