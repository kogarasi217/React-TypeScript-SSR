import * as React from 'react';

export interface SampleProps {
  compiler: string;
  framework: string;
  library: string;
}

const Sample = (props: SampleProps) => {
  const { compiler, framework, library } = props;
  return (
    <h1>
      Hello from
      {compiler}
      {' '}
      and
      {framework}
      {' '}
      and
      {library}!
    </h1>
  );
};

export default Sample;
