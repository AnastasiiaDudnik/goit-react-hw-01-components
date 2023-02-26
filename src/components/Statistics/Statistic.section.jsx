import PropTypes from 'prop-types';
import { StatisticList } from './StatisticList';
import data from '../json/data.json';
import { Section, Title } from './StatisticSection.styled';

export const StatisticSection = ({ title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatisticList stats={data} />
    </Section>
  );
};

StatisticSection.PropType = {
  title: PropTypes.string,
};
