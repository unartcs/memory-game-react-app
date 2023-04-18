import React, { useEffect, useState } from "react";
import cards from "../data/cardDB";

function CardList({ score, setScore, highScore, setHighScore }) {
  const [cardList, setCardList] = useState(cards);
  const [selectedCards, setSelectedCards] = useState([]);

  const onCardClickHandler = (card) => {
    if (!selectedCards.includes(card)) {
      setSelectedCards(selectedCards.concat(card));
      shuffle(cardList);
      setScore(score + 1);
    }
    else {
      gameOverHandler()
    }
  };
  const gameOverHandler = () => {
    shuffle(cardList);
    setSelectedCards([])
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
  };
  useEffect(() => {
    shuffle(cardList);
  },);

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
              <h3>{card.name}</h3>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
