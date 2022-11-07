import styled, { createGlobalStyle } from 'styled-components';
import importGoogleFonts from 'import-google-fonts';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: #424242;
`;

export const GoogleFonts = importGoogleFonts(createGlobalStyle, null, [ 'Roboto' ]);

export const TitleContainer = styled.div`
  width: 100%;
  min-width: 375px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Header = styled.div`
  background-color: #333333;
`;

export const Row = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #00d1b2;
  margin-top: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: 992px) {
    font-size: 80px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-width: 375px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

export const Loading = styled.div`
  width: 100%;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  text-align: center;
  padding: 15px 0;
  color: #eeeeee;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-grow: 2;
  width: 100%;
  padding-right: 0;
  @media (min-width: 992px) {
    width: unset;
    padding-right: 30px;
  }
  label {
    width: 100%;
    padding-right: 30px;
    position: relative;
    span {
      position: absolute;
      top: 5px;
      left: 5px;
    }
  }
`;

export const Input = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border: 1px solid transparent;
  border-radius: 0;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 1rem;
  height: 1.5em;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  line-height: 1.5;
  padding: 15px;
  position: relative;
  vertical-align: top;
  background: #424242;
  border-color: #cccccc;
  color: white;
  box-shadow: none;
  width: 100%;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border: #0a8774 1px solid;
  }
`;

export const Button = styled.button`
  display: block;
  float: right;
  background: #00657b;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 800;
  padding: 18.5px 25px;
  margin-bottom: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 0 5px 5px 0;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: color .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    background: #0a8774;
  }
  &:focus {
    outline: none;
  }
`;