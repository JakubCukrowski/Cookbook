import styled from "styled-components";

export const DashboardSection = styled.section`
    max-width: 100%;
    margin-bottom: 30px;
`

export const DashboardDesktopRecipes = styled.div`
    @media (min-width: 992px) {
        width: 40%;
    }
`

export const DashboardDesktopWrapper = styled.div`
  @media (min-width: 992px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    position: relative;
  }
`;

export const DashboardImage = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
`;

export const DashboardImageWrapper = styled.div`
    border: 2px solid #e19f25;
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
`

export const DashboardRecipeImage = styled.img`
    height: 260px;
    width: 300px;
    border-radius: 6px;
    position: relative;
    z-index: -10;
    transition: 0.3s;
    object-fit: cover;
`

export const DataDesktopWrapper = styled.div`
  @media (min-width: 992px) {
    width: 40%;
    position: sticky;
    top: 100px;
  }
`;

export const EditUserRecipeWrapper = styled.div`
    width: 300px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    z-index: 1;

    &:hover > img {
        opacity: 0.5;
    }

    .util_buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 200;
    }
    
`

export const ElementContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const ElementWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`;

export const UpdatePhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 200;
  background-color: #e19f25;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: -20px;
`;

export const FollowedUsersDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
  
`

export const FollowedUserDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`