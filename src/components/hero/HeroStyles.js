import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-bottom: 30px;
  position: relative;

  @media (min-width: 992px) {
    width: 60%;
  }

  button {
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #d8d8d8;
    color: black;
    border: none;
    height: 100%;
    width: 80px;
  }
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledH1 = styled.h1`
  text-align: center;
`;

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background: transparent center no-repeat
    url(${(props) => props.backgroundimage});
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 992px) {
    background-attachment: fixed;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  h1 {
    color: white;
    position: relative;
    z-index: 100;
  }

  h2 {
    margin-bottom: 20px;
  }
`;

export const StyledInput = styled.input`
  width: calc(100% - 80px);
  margin: 0 auto;
  padding: 10px;
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  font-size: 20px;
  position: relative;
`;

export const StyledSearchedRecipes = styled.ul`
  background-color: white;
  width: calc(100% - 80px);
  max-height: 200px;
  border: 1px solid;
  text-align: left;
  list-style: none;
  border-radius: 10px;
  position: absolute;
  top: 85%;
  left: 0;
  padding: 0;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (min-width: 992px) {
    max-height: 300px;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(33, 37, 41);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  li {
    @media (min-width: 992px) {
      height: 50px !important;
    }
  }

  a {
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px;

    @media (min-width: 992px) {
      height: 100%
    }

    /* add different background every one link!! */
  }

  .active {
    background-color: rgb(33, 37, 41) !important;
    color: white !important;
  }
`;
