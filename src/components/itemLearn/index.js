import React from "react";
import HeaderLearn from "../headerLearn";
import ContentLearn from "../contentLearn";
import "./styles.css";

class itemLearn extends React.Component {

  render() {
    const { learn, editSearchLearn, getIdLearn, overFlowText, openModalImg, setImage } = this.props;
    return (
      <div className={`section section-post-learn feed ${editSearchLearn}`}>
        <HeaderLearn
          getIdLearn={getIdLearn}
          id={learn.id}
          title={learn.title}
          date={learn.updated_at}
        />
        <ContentLearn
          setImage={setImage}
          openModalImg={openModalImg}
          overFlowText={overFlowText}
          content={learn.content}
          img={learn.image}
        />
      </div>
    );
  }
}

export default itemLearn;
