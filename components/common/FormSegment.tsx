import * as React from "react";
import styled from "styled-components";
import { P } from "./P";

interface FormSegmentProps {
  rating?: number | null;
  title: string;
  valueIndicator?: string | null;
  optional?: boolean;
}

const FormSegment: React.SFC<FormSegmentProps> = ({
  children,
  title,
  valueIndicator,
  optional
}) => {
  return (
    <Div>
      <FieldTitle>
        <FieldTitleLeft>
          <FormTitle>{title}</FormTitle>
          {!!optional && <FormTitleOptional> - optional</FormTitleOptional>}
        </FieldTitleLeft>
        {!!valueIndicator && <FormTitle>{valueIndicator}</FormTitle>}
      </FieldTitle>
      {children}
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 15px;
`;

const FieldTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FieldTitleLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

const FormTitle = styled(P)`
  margin: 0;
`;

const FormTitleOptional = styled(FormTitle)`
  font-style: italic;
  opacity: 0.6;
`;

export default FormSegment;
