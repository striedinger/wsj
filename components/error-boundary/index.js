import React from 'react';
import styled from 'styled-components';

const IS_DEV = process.env.NODE_ENV;

const Container = styled.details`
  align-items: center;
  border: 2px dashed red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  white-space: pre-wrap;
`;

const withErrorBoundary = (Component) => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
      // Ideally log to logging service
      this.setState({ error, errorInfo });
      // eslint-disable-next-line no-console
      console.log(error, errorInfo);
    }

    render() {
      const { state: { error, errorInfo }, props } = this;
      if (error) {
        if (IS_DEV) {
          return (
            <Container>
              <summary>{`There has been an error with the ${Component.defaultName || Component.name} component.`}</summary>
              <p>
                {error.toString()}
                <br />
                {errorInfo.componentStack}
              </p>
            </Container>
          );
        }
        return null;
      }
      return <Component {...props} />;
    }
  }
);

export default withErrorBoundary;
