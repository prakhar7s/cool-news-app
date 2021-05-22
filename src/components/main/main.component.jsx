import React from "react";
import Card from "../card/card.component";
import Loader from "../Loader/Loader";

import "./main.styles.scss";
import { MyContext } from "../../MyContext";

const Main = () => {
  return (
    <MyContext.Consumer>
      {(value) => (
        <main className="main">
          {console.log(value)}
          <div className="container">
            {!value.state.isLoading ? (
              <>
                <div className="cards">
                  {value.state.filteredArticles.map((article) => (
                    <Card key={article.title} article={article} />
                  ))}
                </div>

                {value.state.noNewsAvailable ? <h1>sdadad</h1> : null}
              </>
            ) : (
              <Loader />
            )}
          </div>
        </main>
      )}
    </MyContext.Consumer>
  );
};

export default React.memo(Main);
