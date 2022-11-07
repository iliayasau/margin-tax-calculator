import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_TAX_REQUESTED } from '../../actions';
import Results from '../results';
import {
  Wrapper, GoogleFonts, Container, Header, TitleContainer, Row,
  Title, SettingsWrapper, Loading, InputWrapper, Input, Button
} from './styles';

const CalculatorForm = ({
  loading,
  tax,
  error,
	getTax
}) => {
  const [query, setQuery] = useState('');
  const [salary, setSalary] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onChangeSalary = e => {
    setSalary(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getTax(query);
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  return (
    <Wrapper>
      <GoogleFonts />
      <Header>
        <TitleContainer>
          <Row>
            <Title>Margin Tax Calculator</Title>
          </Row>
        </TitleContainer>
      </Header>
      <Container>
        <Row>
          <SettingsWrapper>
            <InputWrapper>
              <label>
                <span>Calculator</span>
                <Input
                  placeholder="Enter annual salary"
                  id="salary"
                  submitInput
                  onChange={e => onChangeSalary(e)}
                  onKeyDown={e => onKeyDown(e)}
                />
              </label>
              <label>
                <span>Calculator</span>
                <Input
                  placeholder="Enter year"
                  id="year"
                  submitInput
                  onChange={e => onChange(e)}
                  onKeyDown={e => onKeyDown(e)}
                />
              </label>
              <Button
                aria-label="Submit query"
                onClick={(e) => onSubmit(e)}
              >
                Submit
              </Button>
            </InputWrapper>
          </SettingsWrapper>
          <div>
            {loading && <Loading>Loading...</Loading>}
            {error && <Loading>Error! Try again!</Loading>}
            {!loading && tax && !error &&
              <Results
                tax={tax}
                salary={salary}
              />
            }
          </div>
        </Row>
      </Container>
    </Wrapper>
  );
};

CalculatorForm.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
	tax: PropTypes.array,
	getTax: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  tax: state.tax
});

const mapDispatchToProps = (dispatch) => ({
  getTax: (query) => dispatch({ type: GET_TAX_REQUESTED, payload: query })
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorForm);