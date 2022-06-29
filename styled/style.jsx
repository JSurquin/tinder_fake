import styled from 'styled-components/native'

export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const CardContainer = styled.View`
    width: 90%;
    width: 260px;
    height: 300px;
`

export const Card = styled.View`
    position: absolute;
    background-color: #fff;
    width: 100%;
    max-width: 260px;
    height: 300px;
    shadow-color: black;
    shadow-opacity: 0.2;
    shadow-radius: 20px;
    border-radius: 20px;
    resize-mode: cover;
`

export const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
`

export const CardTitle = styled.Text`
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: #fff;
`