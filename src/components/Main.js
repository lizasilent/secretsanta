import "./Main.css";
import React from "react";

function Main({ popupActive, cards, handleText, active }) {
  const red = {
    color: "red",
  };

  const grey = {
    color: "grey",
  };

  return (
    <main className="main">
      <div className="wrapper">
        <ul className="grid">
          {cards.map((card) => (
            <li
              onClick={() => popupActive(card)}
              key={card.id}
              className="grid-cell"
              style={{
                backgroundColor: card.color,
              }}
            ></li>
          ))}
        </ul>
      </div>
      <div className="main__text">
        <h1 onClick={handleText} style={active ? red : grey}>
          <a href="#maintext"> Что это такое? </a>
        </h1>
        {active && (
          <>
            <p className="main__text" id="maintext">
              Каждый год мы ломаем голову над новогодними подарками... Но в этом году всё станет
              проще! Мы подготовили подборку книжных подарков, которая выручит даже в самой сложной
              ситуации. От уютных историй до захватывающих приключений — здесь собраны наши любимые
              книги года и проверенные временем бестселлеры, которые мы сами не раз выбирали в
              подарок. С нашим shezhinkaclub подготовка к праздникам превратится в радость, а ваши
              новогодние сюрпризы будут незабываемыми!
            </p>
            <hr />
            
          </>
        )}
      </div>
    </main>
  );
}

export default Main;
