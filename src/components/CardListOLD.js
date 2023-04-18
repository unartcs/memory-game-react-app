import React, { useEffect, useState } from "react";
import cards from "../data/cardDB";

function CardList({ score, setScore, highScore, setHighScore }) {
  const [cardList, setCardList] = useState(cards);
  const [selectedCards, setSelectedCards] = useState([]);

  const onCardClickHandler = (card) => {
    setCardList(cardList.filter((item) => item.id !== card.id));
    setSelectedCards(selectedCards.concat(card));
    setScore(score + 1);
  };
  const gameOverHandler = () => {
    setCardList(cards);
    setSelectedCards([]);
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
  };
  useEffect(() => {
    shuffle(selectedCards);
    shuffle(cardList);
  }, [selectedCards, cardList]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  return (
    <div className="cardlist-container">
      <div className="cardlist-wrapper">
        {cardList.map((card) => {
          return (
            <p
              key={card.id}
              onClick={() => {
                onCardClickHandler(card);
              }}
            >
              <img
                src={require(`../data/imgs/${card.imgurl}`)}
                alt={card.name}
              />
            </p>
          );
        })}
        {selectedCards.length !== 0
          ? selectedCards.map((item) => {
              return (
                <p key={item.id} onClick={gameOverHandler}>
                  <img
                    src={require(`../data/imgs/${item.imgurl}`)}
                    alt={item.name}
                  />
                </p>
              );
            })
          : "a"}
      </div>
    </div>
  );
}

export default CardList;
