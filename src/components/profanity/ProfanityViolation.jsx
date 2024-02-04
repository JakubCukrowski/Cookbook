import React from "react";
import { Container } from "react-bootstrap";
import { FlexContainer } from "../../styles/Containers";

export const ProfanityViolation = () => {
  return (
    <section
      style={{
        maxWidth: "100%",
        maxHeight: "100vh",
        display: "flex",
      }}
    >
      <FlexContainer>
        <div style={{margin: '50px 0', backgroundColor: 'rgba(33, 37, 41, 0.1)', padding: 10, borderRadius: 6, textAlign: "center"}}>
          <p style={{fontSize: 22, color: "tomato", fontWeight: 500 }}>
            Dodawanie wulgarnych słów na naszej stronie
            internetowej jest sprzeczne z zasadami. Taka treść może poważnie
            zaszkodzić użytkownikom. Ważne jest, abyś respektował wytyczne i
            dbał o poziom kultury na platformie, tworząc przyjazne miejsce dla
            wszystkich użytkowników, dlatego prosimy o nie dodawanie słów {' '}
            <strong>niecenzuralnych</strong>. Spróbuj jeszcze raz.
          </p>
        </div>
      </FlexContainer>
    </section>
  );
};
